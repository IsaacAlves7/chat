var express = require("express");
const bodyParser = require('body-parser');
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

// Middleware to serve static files from the current directory
app.use(express.static(__dirname))

// Sending messages in JSON format
var messages = [{name: "", message: ""}];

app.get("/messages", (req, res) => {
  res.send(messages);
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/messages", (req, res) => {
  console.log(req.body);
  io.emit("message", req.body); // Emit the message to all connected clients
  messages.push(req.body);
  res.sendStatus(200); // OK
});
io.on("connection", (socket) => {
  console.log("A user connected");  
});

// Definindo a porta junto com uma função callback
var server = http.listen(8080, () => {
  console.log("Server is listening on port", server.address().port);
})