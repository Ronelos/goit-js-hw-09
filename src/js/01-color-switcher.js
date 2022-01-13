function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
const body = document.body;
let timerId = null;

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000) 
  start.disabled = true; 
  stop.disabled = false;
}

start.addEventListener('click', changeColor) 
stop.addEventListener('click', stopChange) 

function stopChange() {
clearInterval(timerId);
start.disabled = false; 
stop.disabled = true; 
}


