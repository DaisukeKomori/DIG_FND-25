'use strict';
// please do not delete the 'use strict' line above

const colors = ["#ff1493", "#e6e6fa", "#00ff00", "#9932cc", "#0000cd", "#00ff7f", "#fa8072"];
document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  console.log('Button clicked!'); // feel free to change/delete this line
}