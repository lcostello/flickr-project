class Data {

    constructor(obj) {
        if (!obj.id) {
            throw new Error("Photo does not have an id");
        } else {
            this.id = obj.id;
        }

        if (!obj.title) {
            throw new Error("Photo does not have a title");
        } else {
            this.title = obj.title;
        }

        if (obj.latitude <= 0) {
            throw new Error("Cannot display photo without a valid latitude value");
        } else {
            this.latitude = obj.latitude;
        }

        if (obj.longitude <= 0) {
            throw new Error("Cannot display photo without a valid longitude value");
        } else {
            this.longitude = obj.longitude;
        }

        if (!obj.url_l) {
            throw new Error("Cannot display photo without valid URL");
        } else {
            this.url_l = obj.url_l;
        }
    }
}
    module.exports = Data;