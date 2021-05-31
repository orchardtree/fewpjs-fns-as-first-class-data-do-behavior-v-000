/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
let time_field = document.getElementById('time')
let web_greeting = document.getElementById('greeting');

/* Write your implementation of greet() */
function greet() {
  let test = "error"
  if (time_field == "test1")
    test = "Good Morning";
  else
    test = "Good Evening";
  return test
}

/* Write your implementation of displayMessage() */
function displayMessage() {
  web_greeting.innerHTML = greet()
}
