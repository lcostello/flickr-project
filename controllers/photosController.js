const Photo = require("../lib/flickr.js");

class photosController {
    static showPhotos (req,res){
        res.render("showPhotos");
    }


}

module.exports = photosController;