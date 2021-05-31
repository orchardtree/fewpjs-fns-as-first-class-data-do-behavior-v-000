/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet() {
  const timeString = document.getElementById('time').value;
  const hourString = timeString.split(':')[0];
  const parsed = parseInt(hourString)
  return parsed
}

/* Write your implementation of displayMessage() */
