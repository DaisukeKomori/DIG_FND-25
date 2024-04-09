'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', function(){
  changeColor();
  changeFontSize();
  changeButtonColor();
  changeButtonSize();
});

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  let num1 = Math.floor (Math.random() * 255);
  // console.log(num1);
  let num2 = Math.floor (Math.random() * 255);
  let num3 = Math.floor (Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
};

function changeFontSize (){
  let num4 = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
  document.getElementById('color-button').style.fontSize = `${num4}px`;
};

function changeButtonColor(){
  let num5 = Math.floor (Math.random() * 255);
  let num6 = Math.floor (Math.random() * 255);
  let num7 = Math.floor (Math.random() * 255);
  document.getElementById('color-button').style.backgroundColor = `rgb(${num5},${num6},${num7})`;
};

function changeButtonSize() {
  const button = document.getElementById('color-button');
  button.style.height = 'auto'; 
  button.style.width = 'auto'; 
};
window.addEventListener('load', changeButtonSize);