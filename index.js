/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeString) {
  /* return timeString */
  return "Good Morning"
}

/* Write your implementation of displayMessage() */
function displayMessage(greet(timeString)) {
  const h1Greeting = document.getElementById('greeting');
   h1Greeting.innerHTML = greet(timeString);
}
