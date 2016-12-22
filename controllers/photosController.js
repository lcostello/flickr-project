//controllers controls/manage the data. In this case the user can 'get' all the photos that they ask for based on their query

const Photo = require("../lib/flickr");

class photosController {
    static getAllPhotos(req, res) {
        Photo.doFetchPhotos(req.body.query)
            //goes into lib flickr.js and runs the doFetchPhotos function then comes back to run .then
            .then(result => {
                //if function is successful then a result will be given
                res.status(200).send({
                    result: result
                });
            })
            //if function is unsuccessful throw an error
            .catch(err => {
                res.status(400).send(err);
            });
    }
}
//making the class accessible in other files
module.exports = photosController;