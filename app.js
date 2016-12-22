//NPM Modules - No relative path as they are in node_modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//app has access to these routes
const routes = require("./routes/routes");
const photoRoutes = require("./routes/photos");

//View Engine - the way in which the views will be rendered (the templating engine eg ejs or react. in this case ejs)
app.set('view engine', 'ejs');

//Middleware
//To parse(transforms the data) the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);
app.use(photoRoutes);

//the port in which app will load on
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});