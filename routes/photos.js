const express = require("express");
const router = express.Router();
const photosController = require("../controllers/photosController");




router.post("/search",photosController.getAllPhotos);




module.exports = router;