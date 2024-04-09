'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  const changeBackColor = document.body.style.backgroundColor = `rgb(${ranRgb()},${ranRgb()},${ranRgb()})`
  const changeFontColor = document.getElementById("color-button").style.color = `rgb(${ranRgb()},${ranRgb()},${ranRgb()})`
  console.log('backGroundColor:', changeBackColor); // feel free to change/delete this line
  console.log('fontColor:', changeFontColor); // feel free to change/delete this line
}

//0~255をrgb値用に返す関数
function ranRgb(){
  return Math.floor(Math.random() * 256);
}