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

import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, /// cloudinary URL
      required: true,
    },
    coverImage: {
      type: String, /// cloudinary URL
      required: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);



userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

/**
 * Compares the given password to the user's stored password.
 * This is a bcrypt-based password comparison. It is asynchronous.
 * @param {string} password - The password to compare to the user's stored password.
 * @returns {Promise<boolean>} - true if the password is correct, false otherwise.
 */
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};



/**
 * Generates an access token for the user.
 * The token contains the user's ID, name, email, and username.
 * It is signed using the ACCESS_TOKEN_SECRET environment variable.
 * The token's expiration time is specified by the ACCESS_TOKEN_EXPIRY environment variable.
 */
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};


/**
 * Generates a refresh token for the user.
 * The token contains the user's ID.
 * It is signed using the REFRESH_TOKEN_SECRET environment variable.
 * The token's expiration time is specified by the REFRESH_TOKEN_EXPIRY environment variable.
 */
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
