const path = require('path'); // path of your static files
const http = require('http'); // HTTP require
const express = require('express'); // express library require
const socketio = require('socket.io'); // socket.io library require 
const formatMessage = require('./utils/messages');
const { 
    userJoin, 
    getCurrentUser, 
    userLeave, 
    getRoomUsers 
} = require('./utils/users');
const { emit } = require('process');

// Variable Calls
const app = express(); // depends on express
const server = http.createServer(app); // depends on app
const io = socketio(server) // depends on server

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'ClientChatApp Bot';

// Run when client connects (sockets)
io.on('connection', socket => {
    /*console.log('New WS Connection...');*/

    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        
        socket.join(user.room);

        // Welcome current user on browser console
        socket.emit('message', formatMessage(botName, 'Welcome to ClientChatApp!'));

        // Broadcast when a user connects
        socket.broadcast
          .to(user.room)
          .emit('message', formatMessage(botName, `${user.username} has joined the chat`));

        // Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    // Listen for chatMessage on Terminal log
    socket.on('chatMessage', msg => {
        /*console.log(msg);*/
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    // Runs when client disconnects
    socket.on('disconnect', () => {
      const user = userLeave(socket.id);
    
      if(user) {
        io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
      }

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
      })   
    });

});

// Port configuration
const PORT = 3000 || process.env.PORT; // App Port or .env port

server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // OK port message