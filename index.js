/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet() {
  let greetingString = "ERROR"
  const timeString = document.getElementById('time').value;
  const hourString = timeString.split(':')[0];
  const parsed = parseInt(hourString);
  if (parsed == 1) {
    greetingString = "Good Morning";
  } else if (parsed == 2) {
      greetingString = "Good Afternoon";
  } else {
      greetingString = "Good Evening";
  }
  return
}

/* Write your implementation of displayMessage() */
