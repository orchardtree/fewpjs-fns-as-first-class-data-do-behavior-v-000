/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
let h1Greeting = document.getElementById('greeting');

/* Write your implementation of greet() */
function greet(timeString) {
  let greetingString = "TEST"
}

/* Write your implementation of displayMessage() */
function displayMessage(greetingString) {
  h1Greeting.innerHTML = greetingString;
}
