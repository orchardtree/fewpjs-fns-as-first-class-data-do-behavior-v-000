/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let web_greeting = document.querySelector("h1#greeting");
function greet() {
  web_greeting.innerHTML = "TEST"
}
/* Write your implementation of displayMessage() */
