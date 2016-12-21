//This is a javascript class. It contains methods, in this case static, and it does NOT have a constructor, this is because we don't need to
//initialise it with anything.

class Index {
    //This method is available externally to this file as we are exporting it down below*
    static showIndex(req, res) {
        res.render("index");
    }

    static showMap(req, res) {
        res.render("show-map");
    }
}
//* Here we are exporting the entire class. This class can now be accessed anywhere where it is 'required'
module.exports = Index;