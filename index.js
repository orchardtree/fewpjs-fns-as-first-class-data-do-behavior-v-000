/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  //displayMessage(greet(timeString))
  greet()
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeStr) {
  let greetingString = "ERROR"
  const timeStr = document.getElementById('time').value;
  const hourString = timeString.split(':')[0];
  const parsed = parseInt(hourString);
  if (parsed < 12) {
    let greetingString = 'Good Morning';
  }
  /* } else if (parsed >= 12 && parsed <= 17) {
      greetingString = "Good Afternoon";
  } else {
      greetingString = "Good Evening";
  } */
  return timeString
}

/* Write your implementation of displayMessage() */
