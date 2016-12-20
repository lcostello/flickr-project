const Photo = require("../lib/flickr");

class photosController {
    static showPhotos (req,res){
        res.render("showPhotos");
    }
static getAllPhotos(req,res){      
    Photo.doFetchPhotos()
    .then(result => {
        res.status(200).send({
            result: result
        });
    })
    .catch(err => {
        res.status(400).send(err);
        });
}
}

module.exports = photosController;