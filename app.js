//NPM Modules - No relative path as they are in node_modules
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes/routes");
const app = express();
const photoRoutes = require("./routes/photos");

//View Engine
app.set('view engine' , 'ejs');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);
app.use(photoRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});