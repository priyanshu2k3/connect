const socket = io("ws://localhost:8000");

const form = document.getElementById('send-container');
const messageInput=document.getElementById('messageInp')
const messageContainer=document.querySelector(".container")

function append(message,position){
  const messageElement=document.createElement("div")
  messageElement.innertText=message;
  message.classList.add('message');
  message.classList.add(position);
  messageContainer.append(messageElement);
}

const name = prompt("entern your name to join ");

socket.emit("new-user-joined",name);

socket.on("user-joined",(data)=>{
  append(`${name} joined the chat`,`right`)
})
