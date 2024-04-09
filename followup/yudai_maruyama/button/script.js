'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)
document.getElementById('color-button').addEventListener('click', fontSizeUpper)

function changeColor() {
  console.log('Button clicked!'); 
  let colorCode = Math.random().toString(16).slice(-6);
  const body = document.querySelector("body");
  body.style.backgroundColor = `#${colorCode}`;
  // feel free to change/delete this line
}

let count = Number();
function fontSizeUpper() {
  const Button = document.querySelector('button');
  Button.style.fontSize = `${27 + count}px`;
  Button.style.width = `${200 + count*10}px`;
  Button.style.height = `${50 + count}px`;
  
  if(count > 50){
    count = 1;
  }else if(count <= 50){
    count++;
  }

  if(count > 1 && count < 25){
    Button.innerText = `Change color`;
  }else if(count >= 25 && count < 35){
    Button.innerText = `thank you!`;
  }else if(count >= 35){
    Button.innerText = `DIG!`;
  }
}