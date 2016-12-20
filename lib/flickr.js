const rest = require('restler');
const Flickr = require('../models/flickrData');

class Photos {
    static searchFlickr() {
        return new Promise(
            (resolve, reject) => {
                rest.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d8ee0c3d3cc363dbfe4f1be5c7f5ca91&text=apples&extras= geo, url_l').on('complete', function(result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {

                        for (let i in result) {
                            try {
                                let flickrData = new Flickr(result[i]);
                            } catch (e){
                                result.splice(i, 1);
                            }
                        }
                        resolve(result);
                    }
                });
            }
        )
    }
    
    static doFetchSinglePhoto(photo){
        return new Promise(
            (resolve, reject) => {
                rest.get(`https://jsonplaceholder.typicode.com/photos/${photo}`).on('complete', function(result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {
                        resolve(result);
                    }
                });
            }
        )
    }
}
module.exports = Photos;