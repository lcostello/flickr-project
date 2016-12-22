// class Functions {
//     createObjectPhoto(photo1) {
//         return new Promise(
//             (resolve) => {
//                 resolve(photo1);
//             }
//         )
//     }
// }

// module.exports = Functions;


var FlickrFetcher = require('./models/flickrData');

describe('#flickrPhotoObj()', function() {
    it('should take a photo object from Flickr and return data with required fields and values', function() {
        var input = {
            id:       '24770505034',
            title:    '20160229090898',
            latitude: '0',
            longitude: '0'
        };
        var expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
        var actual = FlickrFetcher.flickrPhotoObj(input);
        expect(actual).to.eql(expected);
    });
});