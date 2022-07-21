// CRUD + REST API + MVC + POO = AUTOGLASS CHAT
const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

const databaseConnect = require('./config/database');
const authRouter = require('./routes/authRoute');
const messengeRoute = require('./routes/messengerRoute');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const http = require('http');
const socket = require('socket.io');

dotenv.config({
    path: 'backend/config/config.env'
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/messenger',authRouter);
app.use(messengeRoute);

databaseConnect();

const server = http.createServer(app);

// _________________________________🔌 Socket.io 🔌_____________________________________
// ⚠️ WARNING: Real-time image upload failed!

const io = socket(server);

let users = [];
const addUser = (userId,socketId,userInfo) => {
    const checkUser = users.some(u=> u.userId === userId);

    if(!checkUser){
        users.push({userId,socketId,userInfo});
    }
}
const userRemove = (socketId) => {
    users = users.filter(u=>u.socketId !== socketId);
}
const findFriend = (id) => {
    return users.find(u=>u.userId === id);
}
const userLogout = (userId) => {
    users = users.filter(u=>u.userId !== userId)
}
io.on('connection',(socket)=>{
    console.log('Socket is connecting...')
    socket.on('addUser',(userId,userInfo)=>{
        addUser(userId,socket.id,userInfo);
        io.emit('getUser',users);
    const us = users.filter(u=>u.userId !== userId);
    const con = 'new_user_add';

    for(var i = 0; i < us.length; i++){
        socket.to(us[i].socketId).emit('new_user_add',con);
    }

    });

    socket.on('sendMessage',(data)=>{
        const user = findFriend(data.reseverId);
        // console.log(user);

        if(user !== undefined){
            socket.to(user.socketId).emit('getMessage', data)
        }
    })

    socket.on('messageSeen',msg =>{
        const user = findFriend(msg.senderId);
        if(user !== undefined){
            socket.to(user.socketId).emit('msgSeenResponse', msg)
        }
    })

    socket.on('delivaredMessage',msg =>{
        const user = findFriend(msg.senderId);
        if(user !== undefined){
            socket.to(user.socketId).emit('msgDelivaredResponse', msg)
        }
    })
    socket.on('seen',data => {
        const user = findFriend(data.senderId);
        if(user !== undefined){
            socket.to(user.socketId).emit('seenSuccess', data)
        }
    })

    socket.on('typingMessage',(data) => {
        const user = findFriend(data.reseverId);
        if(user !== undefined){
            socket.to(user.socketId).emit('typingMessageGet',{
                senderId : data.senderId,
                reseverId : data.reseverId,
                msg : data.msg
            })
        }
    })

    socket.on('logout',userId => {
        userLogout(userId);
    })

    socket.on('disconnect', () => {
        console.log('user is disconnect...');
        userRemove(socket.id);
        io.emit('getUser',users);
    })
})

// ______________________________👨🏽‍💼 Polymorphism 🧑_____________________________________
/* =================+👨🏽‍💼🧑 Vendor and Client as Chat Users 🧑🧑+=======================*/

class Vendor{
 
}

class Client{
  
} 

// _____________________________💊 Encapsulation 💊_________________________________
/* ======================+🔒 Private Chat funcionality 🔒+======================== */

class Contact{

}

// __________________________🏠 Running to production 🏠_______________________________
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/build")));
    // app.get('*',(req,res)=>{
    //     res.sendFile(path.resolve(__dirname,"../","frontend","build","index.html"));
    // })
} 

else { // (development || NODE_ENV === {}) Com isso, ele irá separar o endereço entre as aplicações de back e front e rodar para o modo dev
    app.get('/', (req, res)=>{
        res.send('This is from backend Server')
    })
}

// __________________________________🛳️ PORT 🛳️_______________________________________
/* Running to development: (frontend package.json) Bootstraping the proxy on port 5000 */

const PORT = process.env.PORT

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})