const assert = require ("assert");
const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const insert = require('chai').assert;
const Functions = require("../functions");
// const func = new Functions();


describe('FlickrPhoto', function() {
    it('should exist', function() {
        var FlickrPhoto = require('./models/flickrData');
        expect(FlickrPhoto).to.not.be.undefined;
    });
});