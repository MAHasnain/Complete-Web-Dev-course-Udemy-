import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateRefreshAndAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "something went wrong while generating refresh and access token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { username, fullname, email, password } = req.body;

  //   Validation: (is any field empty)
  if (
    [username, fullname, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required.");
  }

  // checking user existence
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, `User with email or username already exists.`);
  }

  // files uploading on server
  // console.warn(req.files)
  const avatarLocalPath = req.files?.avatar[0]?.path;
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;

  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  // strictly checking in multer
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing.");
  }

  // files uploading on Cloudinary
  const avatar = await uploadCloudinary(avatarLocalPath);

  let coverImage = "";
  if (coverImageLocalPath) {
    coverImage = await uploadCloudinary(coverImageLocalPath);
  }

  // create user Object (entry in db)
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  // remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering a user.");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // get data from frontend
  // username or email
  // validation : any field is empty
  // validation : user existence checking
  // validation : is password correct
  // generate access and refresh token
  // cookies send
  // response send

  const { username, email, password } = req.body;

  if (!(username || email)) {
    throw new ApiError(401, "username or email is required.");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User does not exist.");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(402, "invalid user credentials");
  }

  const { accessToken, refreshToken } = await generateRefreshAndAccessToken(
    user.id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        "User logged in successfully."
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("refreshToken", options)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, {}, "User logged out"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: req.user },
        "Current user fetched successfully"
      )
    );
});

const updateAvatar = asyncHandler(async (req, res) => {
  // file ka path grab krna h for multer
  const avatarLocalPath = req.file?.path;

  // validation : path me file h ya nhi
  if (!avatarLocalPath) {
    throw new ApiError(401, "Avatar file is missing");
  }

  // upload on cloudinary
  const avatar = await uploadCloudinary(avatarLocalPath);

  // valiation : is url missing
  if (!avatar?.url) {
    throw new ApiError(403, "Error while avatar uploading on cloudinary");
  }

  // url save in user obj (db call)
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    {
      new: true,
    }
  ).select(" -password");

  // return response
  return res
    .status(200)
    .json(new ApiResponse(200, user, "user avatar updated successfully."));
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  // get data from frontend(oldPassword, newPassword)
  const { oldPassword, newPassword } = req.body;

  // validation: is old and new password empty
  // if (!(oldPassword && newPassword)) {
  //   throw new ApiError(401, "old and new password is required");
  // }

  // old password (db) ko variable me store kr k
  const user = await User.findById(req.user?._id);
  const isValidPassword = await user.isPasswordCorrect(oldPassword);

  // validation: is old password correct
  if (!isValidPassword) {
    throw new ApiError(402, "Invalid old password");
  }

  // new password assign in user.password (db)
  user.password = newPassword;

  // user save krna h (db call)
  await user.save({ validateBeforeSave: false });

  // return response
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "password changed successfully"));
});

const updateCoverImage = asyncHandler(async (req, res) => {
  // file ka path grab krna h
  const coverImageLocalPath = req.file?.path;

  // validation: path me file h ya nhi
  if (!coverImageLocalPath) {
    throw new ApiError(401, "Cover Image file is missing");
  }

  // file upload on cloudinary
  const coverImage = await uploadCloudinary(coverImageLocalPath);

  // validation: is url missing
  if (!coverImage?.url) {
    throw new ApiError(403, "Error while file uploading on cloudinary");
  }

  // url save in db user obj
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        coverImage: coverImage.url,
      },
    },
    { new: true }
  ).select(" -password");

  // response return
  return res
    .status(200)
    .json(new ApiResponse(200, user, "user cover image updated successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  // get refresh token from cookies or body  (encoded token)
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  // validation: token feild me token h ya nhi
  if (!incomingRefreshToken) {
    throw new ApiError(401, "Invalid refresh token");
  }

  try {
    // jwt.verify se decode krna h token ko
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // validation: is incomingRefreshToken equals to bd-token
    const user = await User.findById(decodedToken?._id);

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(404, "Refresh token is used or expired");
    }

    // generate new token (generateRefreshAndAccessToken)
    const { accessToken, newRefreshToken } =
      await generateRefreshAndAccessToken(user._id);

    // options creation
    const options = {
      httpOnly: true,
      secure: true,
    };
    // return response
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("accessToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "access token is refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(501, error?.message || "Invalid refresh token");
  }
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  // get data from frontend (name, email, ...)
  const { fullname, email } = req.body;

  // validation : is any field empty
  if (!(fullname && email)) {
    throw new ApiError(401, "full name and email is reqiured");
  }

  // user finding and updating from db
  // set data
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        fullname,
        email,
      },
    },
    { new: true }
  );

  // return response
  return res
    .status(200)
    .json(new ApiResponse(200, user, "account details updated successfully"));
});

const getWatchHistory = asyncHandler(async (req, res) => {
  // get user watchHistory from req.user._id
  // user pr aggregate kr k match pipeline lagana h (req.user._id k string ko mongoose.Types se monogoDB id me convert krna h)
  const user = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user._id),
      },
    },
    {
      // then lookup krna h videos (id field) se
      $lookup: {
        from: "videos",
        foreignField: "_id",
        localField: "watchHistory",
        as: "watchHistory",

        // then sub lookup krna h video k owner pr
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              // owner se selected fields lene k liye project pipeline lagani h
              pipeline: [
                {
                  $project: {
                    fullname: 1,
                    username: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          // further addField ki pipeLine laga k  (project se array milta h )
          {
            $addFields: {
              owner: {
                $first: "$owner",
              },
            },
          },
        ],
      },
    },
  ]);

  //  return response
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        user[0].watchHistory,
        "User watch history fetched successfully"
      )
    );
});

const getUserChannelProfile = asyncHandler(async (req, res) => {
  // get details from url
  const { username } = req.params;

  // validation : is username exist in params
  if (!username?.trim()) {
    throw new ApiError(401, "username is missing");
  }

  // user pr aggregation lagyga
  const channel = await User.aggregate([
    {
      //       >   matching the document
      $match: {
        username: username?.toLowerCase(),
      },
    },
    //       >   subscribers count
    {
      $lookup: {
        from: "subscriptions",
        foreignField: "channel",
        localField: "_id",
        as: "subscribers",
      },
    },

    //       >   subscribed count
    {
      $lookup: {
        from: "subscriptions",
        foreignField: "subscriber",
        localField: "_id",
        as: "subscribedTo",
      },
    },
    {
      //       >   UserChannelProfile me addition throw addField
      $addFields: {
        subscribersCount: {
          $size: "$subscribers",
        },
        subscribedToCount: {
          $size: "$subscribedTo",
        },
        isSubscribed: {
          $cond: {
            if: { $in: [req.user?._id, "$subscribers.subscriber"] },
            then: true,
            else: false,
          },
        },
      },
    },
    {
      //       >   selected fields add krny hen throw projection
      $project: {
        username: 1,
        fullname: 1,
        avatar: 1,
        coverImage: 1,
        subscribersCount: 1,
        subscribedToCount: 1,
        isSubscribed: 1,
        email: 1,
      },
    },
  ]);

  // validation : channel me ye details ayi ya nhi
  if (!channel?.length) {
    throw new ApiError(401, "channel does not exist");
  }

  // return response
  return res
    .status(200)
    .json(
      new ApiResponse(200, channel[0], "user channel fetched successfully")
    );
});

export {
  registerUser,
  loginUser,
  logoutUser,
  updateAvatar,
  getCurrentUser,
  updateCoverImage,
  refreshAccessToken,
  getUserChannelProfile,
  getWatchHistory,
  updateAccountDetails,
  changeCurrentPassword,
};
