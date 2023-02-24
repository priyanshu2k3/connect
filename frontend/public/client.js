const socket = io("ws://localhost:8000");

const form = document.getElementById('send-container');
const messageInput=document.getElementById('messageInp')
const messageContainer=document.getElementById("container")

function append(message,position){
 const messageElement=document.createElement('div')
 messageElement.innerText=message;
 messageElement.classList.add('message');
 messageElement.classList.add(position);
 messageContainer.append(messageElement);
 console.log(message,position,messageContainer);
}

const name=  prompt("entern your name to join ");

socket.emit("new-user-joined",name);

socket.on("user-joined",name=>{
  append(`${name} joined the chat`,'left')
})

socket.on('receive',(data)=>{
  append(`${data.name}: ${data.message}`,'left')
});

//form submit

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const message = messageInput.value;
  append(`You: ${message}`, 'right');
  socket.emit('send', message);
  messageInput.value = '';
})

socket.on("left",(data)=>{
  console.log(data);
  append(`${data} left the chat`,'left')
})
