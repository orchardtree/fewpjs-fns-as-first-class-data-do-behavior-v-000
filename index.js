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
  const hourInt = parseInt(hourString);
  if (hourInt < 12) {
    greetingString = 'Good Morning';
  } else if (hourInt >= 12 && hourInt <= 17) {
      greetingString = 'Good Afternoon';
  } else {
      greetingString = 'Good Evening';
  }
  return greetingString
}

/* Write your implementation of displayMessage() */
function displayMessage() {
  const greetingNode = document.getElementById('greeting')
  greetingNode.innerHTML = greet(timeString);  
/*  const greetingNode = document.getElementById('greeting')
  if timestring != [0...24] {
    "TEST";
  } else {
    greetingNode.innerHTML = greet(timeString);
  } */
}
