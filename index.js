// Monolithic server using Express, Socket.io, and Mongoose
var express = require("express");
const bodyParser = require('body-parser');
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var mongoose = require("mongoose");
var dotenv = require("dotenv").config();

// Connect to MongoDB using Mongoose
db = process.env.URL;

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

// Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

// Setting up the server to listen on port 8080 with a callback
var server = http.listen(8080, () => {
  console.log("Server is listening on port", server.address().port);
})