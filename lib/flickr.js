const rest = require('restler');

class Photos {
    static searchFlickr() {
        return new Promise(
            (resolve, reject) => {
                rest.get('flickrAPIUrlwith some text')    .on('complete', function(result) {
                    if (result instanceof Error) {
                        console.log('Error:', result.message);
                        reject(result);
                    } else {
                        
                    }
                    }


            }
        )

        
    }
}