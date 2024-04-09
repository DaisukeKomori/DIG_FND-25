'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  const colors = [
    "red",
    "lightred",
    "blue",
    "seablue",
    "yellow",
    "green",
    "orange",
    "brown",
    "pink",
    "black",
    "lightgreen",
    "gray",
    "lightgray",
  ];
  document.bgColor = colors[Math.floor(Math.random() * colors.length)];
  if(document.bgColor === "lightgray") {
    document.write('<img src="imgbb/hello.jpg">');
  };
  console.log('Button clicked!'); // feel free to change/delete this line
}