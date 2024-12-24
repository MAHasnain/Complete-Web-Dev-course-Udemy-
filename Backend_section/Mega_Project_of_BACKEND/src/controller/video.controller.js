import { Video } from "../models/video.models.js";
import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// publish a video
const publishAVideo = asyncHandler(async (req, res) => {
  // get data from user
  const { title, description, duration } = req.body;

  // validation: any field is empty
  if ([title, description, duration].some((field) => field?.trim() === "")) {
    throw new ApiError(401, "All fields are required");
  }

  // video and thumbnail files upload on server
  const videoFileLocalPath = req.files?.videoFile[0]?.path;
  const thumbnailLocalPath = req.files?.thumbnail[0]?.path;

  // strictly checking in multer
  if (!videoFileLocalPath) {
    throw new ApiError(400, "Video file is missing");
  }
  if (!thumbnailLocalPath) {
    throw new ApiError(400, "thumbnail is missing");
  }

  // upload on cloudinary
  const videoFile = await uploadCloudinary(videoFileLocalPath);
  const thumbnail = await uploadCloudinary(thumbnailLocalPath);

  // video object creation (entry in db)
  const video = await Video.create({
    title,
    description,
    videoFile: videoFile.url,
    thumbnail: thumbnail.url,
    duration
  });

  // validation : is obj save in db
  if (!video) {
    throw new ApiError(500, "Something went wrong while posting video");
  }

  // response return
  return res
  .status(200)
  .json(new ApiResponse(200, video, "Video published successfully"));

});

// get all video
const getAllVideos = asyncHandler(async (req, res) => {});

// get videos by playlist (reserve)//

// get a video (by id)
const getAVideo = asyncHandler(async (req, res) => {});

// update video
const updateVideo = asyncHandler(async (req, res) => {});

// togglePublishStatus
const togglePublishStatus = asyncHandler(async (req, res) => {});

// delete video
const deleteVideo = asyncHandler(async (req, res) => {});

export {
  publishAVideo,
  getAllVideos,
  getAVideo,
  updateVideo,
  togglePublishStatus,
  deleteVideo,
};
