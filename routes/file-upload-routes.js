const express = require("express");
const router = express.Router();


const uploader = require("../configs/cloudinary-setup");

router.post("/upload", uploader.single("poster"), (req, res, next) => {

  if (!req.file) {
    next(new Error("No poster uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.secure_url });
});

module.exports = router;