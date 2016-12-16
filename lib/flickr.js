const rest = require('restler');

class Photos {
    static searchFlickr() {
        return new Promise(
            (resolve, reject) => {
                rest.get('flickrAPIUrlwith some text')    .on('complete', function(result) {



            }
        )

        
    }
}