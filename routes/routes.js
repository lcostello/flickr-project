//NPM Modules - No relative path as they are in node_modules
const express = require("express");
const router = express.Router();
//These are my own modules that require a relative path to find them (As they are not included in the node_modules folder. And nor should they be)
const indexController = require("../controllers/indexController");

//We are calling a function on router in this case .get(), which is the HTTP verb, and that takes 2 arguments.
//1 is the path (from the url), the 2nd is the function to call
router.get("/", indexController.showIndex);

router.get("/show-map", indexController.showMap);

//This just exports the router object so that it can be used elsewhere
module.exports = router;