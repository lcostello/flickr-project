const express = require("express");
const router = express.Router();
const photosController = require("../controllers/photosController");
const parser = require('xml2json');

router.get("/photos/:text",photosController.getAllPhotos);



module.exports = router;