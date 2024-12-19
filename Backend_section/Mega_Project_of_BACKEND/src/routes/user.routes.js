import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateAccountDetails,
  updateAvatar,
  getUserChannelProfile,
  updateCoverImage,
  getWatchHistory,
  refreshAccessToken,
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
router.route("/current-user").get(verifyJwt, getCurrentUser);
router.route("/").patch(updateAvatar);
router.route("/").patch(updateCoverImage);
router.route("/").patch(updateAccountDetails);
router.route("/refresh-token").get(refreshAccessToken);
router.route("/").get(getUserChannelProfile);
router.route("/").get(getWatchHistory);

export default router;
