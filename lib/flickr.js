const rest = require('restler');

class Photos {
    static searchFlickr() {
        return new Promise(
            (resolve, reject) => {
                rest.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d8ee0c3d3cc363dbfe4f1be5c7f5ca91&text=apples&extras= geo, url_l')    .on('complete', function(result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {
                        let newArray =[];
                    for (let i in result) {
                        console.log(i);
                        if (parseInt(i) === 20){
                            console.log("YES");
                            break;
                        }
                    
                    result[i].latitude = 51.643173;
                    result[i].longitude = 0.1050168;

                    newArray.push(result[i]);

               
                        }
                        resolve(newArray);
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