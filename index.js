var express = require("express");
var app = express();

app.use(express.static(__dirname))

// Definindo a porta junto com uma função callback
var server = app.listen(8080, () => {
  console.log("Server is listening on port", server.address().port);
})