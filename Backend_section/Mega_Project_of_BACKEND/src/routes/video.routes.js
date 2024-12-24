import { Router } from "express";

import {
  publishAVideo,
  getAVideo,
  getAllVideos,
  updateVideo,
  togglePublishStatus,
  deleteVideo,
} from "../controller/video.controller.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

// global middleware
router.use(verifyJwt);

router.route("/").post(
  upload.fields([
    {
      name: "videoFile",
      maxCount: 1,
    },
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  publishAVideo
);
router.route("/").get(getAVideo);
router.route("/").get(getAllVideos);
router.route("/").patch(updateVideo);
router.route("/").patch(togglePublishStatus);
router.route("/").delete(deleteVideo);

export default router