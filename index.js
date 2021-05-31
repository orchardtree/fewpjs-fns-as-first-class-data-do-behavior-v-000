/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
let web_greeting = document.querySelector("h1#greeting");

/* Write your implementation of greet() */
function greet() {
  
}

/* Write your implementation of displayMessage() */
function displayMessage {
  web_greeting.innerHTML = greet()
}
