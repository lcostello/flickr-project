const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const assert = require('chai').assert;
const FlickrPhoto = require("../models/flickrData");


describe('FlickrPhoto', () => {
    it('should exist', (done) => {
        let testObject = {id: "31388261960", 
                         title: "Banana bread Recipe", 
                         latitude: "54.925464", 
                         longitude: "9.808859", 
                         url_l: "https://farm1.staticflickr.com/750/31388261960_07e524b611_b.jpg"
        };
        let modelObject = new FlickrPhoto(testObject);
        assert.isObject(modelObject,"it is an object");
        done();
    });
});