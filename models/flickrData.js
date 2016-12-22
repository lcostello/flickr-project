//this function is 'filtering' through the data and checking that the objects match the desired objects and that their values are valid
class FlickrPhoto {

    constructor(obj) {
        //if the object does not have an id then throw an error
        if (!obj.id) {
            throw new Error("Photo does not have an id");
        } else {
            this.id = obj.id;
        }

        if (!obj.title) {
            //if the object does not have a title then throw an error
            throw new Error("Photo does not have a title");
        } else {
            this.title = obj.title;
        }

        if (obj.latitude == "0") {
            //if the object has a latitude of 0 then throw an error, otherwise use the give integer 
            throw new Error("Cannot display photo without a valid latitude value");
        } else {
            this.latitude = obj.latitude;
        }

        if (obj.longitude == "0") {
            //if the object has a longitude of 0 then throw an error, otherwise use the give integer 
            throw new Error("Cannot display photo without a valid longitude value");
        } else {
            this.longitude = obj.longitude;
        }

        if (!obj.url_l) {
            //if the object does not have an image url then throw an error
            throw new Error("Cannot display photo without valid URL");
        } else {
            this.url_l = obj.url_l;
        }
    }
}
//telling the file what you want to extract from this particular file
module.exports = FlickrPhoto;