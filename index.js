var express = require("express");
var swig = require('swig');
var app = express();

app.set("views", __dirname);

//use whatever templating system(s) you like
app.engine('swig', swig.renderFile);
app.set("view engine", "swig");

//See the README about ordering of middleware

//Load the routes ("controllers" -ish)
app.use(require("./router").router);
// app.use("/api", require("app/study/router"));

//FINALLY, use any error handlers
//app.use(require("app/errors/notFound"));

// Export the app instance for unit testing via supertest
module.exports = app;