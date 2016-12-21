const rest = require('restler');
const Flickr = require('../models/flickrData');
const parser = require('xml2json');

class Photos {
    static doFetchPhotos(query) {
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d8ee0c3d3cc363dbfe4f1be5c7f5ca91&text=${query}&extras=geo, url_l`).on('complete', function (result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {

                        let json = parser.toJson(result);
                        json = JSON.parse(json);
                        let photosArray = json.rsp.photos.photo;
                        let finalArray = [];

                        for (let i in photosArray) {
                            try {
                                let flickrData = new Flickr(photosArray[i]);
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


    // 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d8ee0c3d3cc363dbfe4f1be5c7f5ca91&text=apples&extras= geo, url_l'

    // static doFetchSinglePhoto(photo){
    //     return new Promise(
    //         (resolve, reject) => {
    //             rest.get(`https://jsonplaceholder.typicode.com/photos/${photo}`).on('complete', function(result) {
    //                 if (result instanceof Error) {
    //                     console.log('Error:', result.message);
    //                     reject(result);
    //                 } else {
    //                     resolve(result);
    //                 }
    //             });
    //         }
    //     )
    // }
}
module.exports = Photos;