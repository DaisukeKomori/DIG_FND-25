'use strict';
// please do not delete the 'use strict' line above

const newArea = document.createElement("p")
newArea.id = "background"
newArea.style.position = "absolute";
newArea.style.zIndex = -1;
document.body.appendChild(newArea);

document.getElementById('color-button').addEventListener('click', changeColor)
document.getElementById('color-button').addEventListener('click', changeButton)

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line

  const hue = Math.floor(Math.random() * 360);
  const satuation = Math.floor(Math.random() * 100);
  const luminance = Math.floor(Math.random() * 100);
  const hsl = `hsl(${hue}, ${satuation}%, ${luminance}%)`;
  newArea.style.backgroundColor = hsl;
  newArea.style.height = "100%";
  newArea.style.width = "100%";

  const colorButton = document.getElementById('color-button');
  colorButton.style.color = hsl;
}

function changeButton() {
  const button = document.getElementById('color-button');
  const buttonLeft = Math.floor(Math.random() * window.innerHeight) + "px";
  const buttonTop = Math.floor(Math.random() * window.innerHeight) + "px";
  button.style.display = "block";
  button.style.position = "relative";
  button.style.alignItems = "start";
  button.style.justifyContent = "start";
  button.style.marginLeft = buttonLeft;
  button.style.marginTop = buttonTop;
}