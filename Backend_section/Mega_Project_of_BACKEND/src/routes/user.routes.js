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
  changeCurrentPassword,
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
router.route("/avatar").patch(verifyJwt, upload.single("avatar"), updateAvatar);
router.route("/cover-image").patch(verifyJwt, upload.single("coverImage"), updateCoverImage);
router.route("/account-detail").patch(verifyJwt, updateAccountDetails);
router.route("/change-password").patch(verifyJwt, changeCurrentPassword);
router.route("/refresh-token").get(refreshAccessToken);
router.route("/channel/:username").get(getUserChannelProfile);
router.route("/history").get(verifyJwt, getWatchHistory);

export default router;
