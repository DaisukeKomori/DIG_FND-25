'use strict';
// please do not delete the 'use strict' line above

const button = document.getElementById('color-button');
const message = document.getElementById('message');
button.addEventListener('click', changeColor)

let count = 0;

function changeColor() {
  count ++;
  comment();
  console.log('Button clicked!'); // feel free to change/delete this line
  let randomColor = "rgb(" + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ", " + (~~(256 * Math.random())) + ")" ;
  document.body.style.backgroundColor = randomColor;
  
}



function comment() {
  if (count % 50 === 0 && count !== 1000 && count !== 10000) {
    button.innerText = "何回押すねん！✋";
    button.style.fontSize = "18px";
  } else if (count === 1000) {
    button.innerText = "マウス壊れるで！💥";
    button.style.fontSize = "18px";
  } else if (count === 10000) {
    message.innerText = `わかった！わかったからもうやめよ！？${count}回クリックするのはコワイ！😱`;
    button.innerText = "もうやめて！";
    button.style.fontSize = "18px";
  } else {
    button.innerText = "Change color";
    button.style.fontSize = "20px";
    message.innerText = "";
  }
}