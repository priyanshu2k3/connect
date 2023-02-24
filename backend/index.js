import { Server } from "socket.io";

const io = new Server(8000);

const users={};

io.on("connection", (socket) => {
    socket.on("new-user-joined",(name)=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
        console.log(name)
    });
    
    socket.on('send',(message)=>{
        socket.broadcast.emit('receive',{message:message,  name: users[socket.id]})
  });

  socket.on('receive',(data)=>{
    socket.broadcast.emit('received',{message:message,  name: users[socket.id]})
});

socket.on('disconnect',data=>{
    socket.broadcast.emit('left',users[socket.id])
    delete users[socket.id];
});



});