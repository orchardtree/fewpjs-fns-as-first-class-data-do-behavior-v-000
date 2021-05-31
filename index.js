/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeString) {
  let greetingString = 'ERROR'
  const hourString = timeString.split(':')[0];
  const parsed = parseInt(hourString);
  if (parsed < 12) {
    greetingString = 'Good Morning';
  } else if (parsed >= 12 && parsed <= 17) {
      greetingString = "Good Afternoon";
  } else {
      greetingString = "Good Evening";
  }
  return greetingString
}

/* Write your implementation of displayMessage() */
function displayMessage() {
  
}