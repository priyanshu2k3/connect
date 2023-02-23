alert("helloworld")

const name = prompt("entern your name to join ");
socket.emit('new-user-joined',name)


import { io } from "socket.io-client";

const socket = io("ws://localhost:8000");

// send a message to the ser

// receive a message from the server
socket.on("hello from server", (...args) => {
  // ...
});


const form = document.getElementById('send-container');
const messageInput=document.getElementById('messageInp')
const messageContainer=document.querySelector(".container")

