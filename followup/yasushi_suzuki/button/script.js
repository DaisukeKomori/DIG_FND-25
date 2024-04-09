'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "brown",
    "pink",
    "black",
  ];
  const backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  console.log(backgroundColor)
  let changeBackgroundColor = document.querySelector("body");
  changeBackgroundColor.style.backgroundColor =backgroundColor;
  }
  console.log('Button clicked!'); // feel free to change/delete this line