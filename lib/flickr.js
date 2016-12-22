//modules required to carry out class/methods.
const rest = require('restler');
const FlickrPhoto = require('../models/flickrData');
const parser = require('xml2json');

class Photos {
    static doFetchPhotos(query) {
        //this function is being called in photosController
        //this promise is getting information from the API and THEN(photos controller) executes the rest of the code. 
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d8ee0c3d3cc363dbfe4f1be5c7f5ca91&text=${query}&extras=geo, url_l`).on('complete', function (result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {
                        //converting the xml to json
                        let json = parser.toJson(result);
                        json = JSON.parse(json);
                        let photosArray = json.rsp.photos.photo;
                        let finalArray = [];
                        // every item in the array will attempt to execute the code in the 'try' block, otherwise it will 'catch'
                        for (let i in photosArray) {
                            try {
                                //the code below is referencing the file flickrData which then accesses the 'Data' class via new 'Flickr'
                                let flickrData = new FlickrPhoto(photosArray[i]);
                                finalArray.push(flickrData);
                            } catch (e) {
                                console.log(`Error ${e.message}`);
                            }
                        }
                        resolve(finalArray);
                    }
                });
            }
        )
    }
}
module.exports = Photos;