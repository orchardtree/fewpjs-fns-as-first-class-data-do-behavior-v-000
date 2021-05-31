/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
let time_field = document.querySelector("input#time")
let web_greeting = document.querySelector("h1#greeting");

/* Write your implementation of greet() */
function greet() {
  if () {
    return "Good Morning"
  else if ()
    return "Good Afternoon"
  else
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage() {
  web_greeting.innerHTML = greet()
}
