const express = require("express");
const router = express.Router();
const photosController = require("../controllers/photosController");


router.get("/photos/text",photosController.getAllPhotos);



module.exports = router;