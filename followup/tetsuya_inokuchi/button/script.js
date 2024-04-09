'use strict';
// please do not delete the 'use strict' line above
let flag = false;
let interbalFunc;


document.write("<p> (start & stop)</p>");

document.getElementById('color-button').addEventListener('click', exchangStartAndStop)

function exchangStartAndStop(){
  if (flag){
    clearInterval(interbalFunc);
    interbalFunc = null;
    flag = false;
    console.log("stop")
  } else {
      interbalFunc = setInterval(changeColor, 1);
      flag = true;
      console.log("start")
  }
}

function changeColor() {
  const red   = Math.floor(Math.random()*256).toString(16);
  const green = Math.floor(Math.random()*256).toString(16);
  const blue  = Math.floor(Math.random()*256).toString(16);
  const colorBack       = "#" + red   + green  + blue ;  
  const colorButton     = "#" + green + blue   + red  ;  
  const colorButtonBack = "#" + blue  + green  + red  ;  

  document.body.style.backgroundColor = colorBack; // document.body.style.backgroundColor = "#000000";
  document.getElementById('color-button').style.color = colorButton;
  document.getElementById('color-button').style.backgroundColor = colorButtonBack; 
}