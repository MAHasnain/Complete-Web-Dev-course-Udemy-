/**
 * _id string pk
username string
email string
fullname string
avatar string
coverImage string
password string
refreshToken string
watchHistory ObjectId videos
createdAt Date
updatedAt Date
 */

import { mongoose, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {},
    fullname: {},
    avatar: {},
    coverImage: {},
    password: {},
    refreshToken: {},
    watchHistory: {},
  },
  { timestamps: true }
);
