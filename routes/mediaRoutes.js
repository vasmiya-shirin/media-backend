const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");
const mediaController = require("../controllers/mediaController");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "desktop-photo-video-manager",
    resource_type: "auto", // image + video
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("media"), mediaController.uploadMedia);
router.get("/", mediaController.getAllMedia);

module.exports = router;

