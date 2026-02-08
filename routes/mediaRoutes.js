const express = require("express");
const router = express.Router();
const multer = require("multer");
const mediaController = require("../controllers/mediaController");

//multer config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});

const upload = multer({ storage });

router.post("/upload", upload.single("media"), mediaController.uploadMedia);
router.get("/", mediaController.getAllMedia);

module.exports = router;
