import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateAccountDetails,
  getRefreshAccessToken,
  updateAvatar,
  getUserChannelProfile,
  updateCoverImage,
  getWatchHistory,
} from "../controller/user.controllers.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/").get(getCurrentUser);
router.route("/").patch(updateAvatar);
router.route("/").patch(updateCoverImage);
router.route("/").patch(updateAccountDetails);
router.route("/").get(getRefreshAccessToken);
router.route("/").get(getUserChannelProfile);
router.route("/").get(getWatchHistory);

export default router;
