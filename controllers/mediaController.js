const Media = require("../models/media");

// Upload media
exports.uploadMedia = async (req, res) => {
  try {
    const media = await Media.create({
      filename: req.file.originalname,
      type: req.file.mimetype,
      url: req.file.path, // Cloudinary URL
    });

    res.status(201).json(media);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
};

// Get all media
exports.getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({ createdAt: -1 });
    res.json(media);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch media" });
  }
};

