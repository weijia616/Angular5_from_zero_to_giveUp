var express = require("express");

var app = express();

app.use("/node_modules",
  express.static("/usr/src/sportsstore/node_modules"));

app.use("/",
  express.static("/usr/src/sportsstore/app"));

// based on Protractor.js
app.listen(4200, function () {
  console.log("HTTP Server running on port 4200");
});
