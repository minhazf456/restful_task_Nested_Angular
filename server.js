//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Config

//As long as Express knows where we keep static files, it will serve index.html by default when we make a request to the root route. Since index.html is found in a folder within our dist folder, we just need to direct Express to find it. Do not overwrite what should be served on the root route so that it will always default to serving index.html.
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/restful_task_nested");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})