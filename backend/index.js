//node server
import { Server } from "socket.io";

const io = new Server(8000);
const users={};


io.on("connection", socket => {
    socket.on("new-user-joined",name=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    })
    
  // send a message to the client
 // socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  //socket.on("hello from client", (...args) => {
    // ...

    socket.on('send',message=>{
        socket.broadcast.emit('received',{message:message,  name: users[socket.id]})
    
  });
});