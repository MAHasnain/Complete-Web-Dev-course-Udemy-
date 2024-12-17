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
router.route("/").post(loginUser);
router.route("/").post(logoutUser);
router.route("/").get(getCurrentUser);
router.route("/").patch(updateAvatar);
router.route("/").patch(updateCoverImage);
router.route("/").patch(updateAccountDetails);
router.route("/").get(getRefreshAccessToken);
router.route("/").get(getUserChannelProfile);
router.route("/").get(getWatchHistory);

export default router;
