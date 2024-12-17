import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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
  const { username, password } = req.body;
});

const logoutUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
});

const updateAvatar = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
});

const updateCoverImage = asyncHandler(async (req, res) => {});

const getRefreshAccessToken = asyncHandler(async (req, res) => {});

const updateAccountDetails = asyncHandler(async (req, res) => {});

const getWatchHistory = asyncHandler(async (req, res) => {});

const getUserChannelProfile = asyncHandler(async (req, res) => {});

export {
  registerUser,
  loginUser,
  logoutUser,
  updateAvatar,
  getCurrentUser,
  updateCoverImage,
  getRefreshAccessToken,
  getUserChannelProfile,
  getWatchHistory,
  updateAccountDetails,
};
