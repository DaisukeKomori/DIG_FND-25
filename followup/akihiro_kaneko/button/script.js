'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
}

//6
//変数設定
const button = document.getElementById("color-button");
const body = document.getElementsByTagName("body");
const newElement = document.createElement("p");
const p = document.getElementsByTagName("p");
const btn = document.createElement("button");

//html設定
newElement.textContent = "色の数値が出るよ！";
newElement.style.fontSize = "20px";
btn.innerHTML = "Don't push it, never push it";
btn.style.fontSize = "10px";
btn.style.width = "100px";
btn.style.height = "30px";

//要素追加
button.appendChild(newElement);
button.after(btn);

//ID設定
btn.setAttribute("id", "secret")

//イベント設定
document.getElementById('color-button').addEventListener('click', changeColor);
document.getElementById('secret').addEventListener('click', secret);

//背景色変更関数
function changeColor() {
  let hue = Math.floor(360 * Math.random());
  let color = `hsl( ${hue} , 100%, 50%)`;
  let strColor = `hsl( ${hue + 120} , 100%, 50%)`;
  let buttonColor = `hsl( ${hue + 240} , 100%, 50%)`;
  body[0].style.backgroundColor = color;
  p[0].innerText = `背景色は${color}`;
  p[0].style.color = strColor;
  button.style.backgroundColor = buttonColor;
}

//押しちゃダメボタン関数
function secret() {
  let hue = 0;

  btn.style.display = "none";
  newElement.style.display = "none";
  button.style.display = "none";

  function rainbow(){
    hue++;
    let color = `hsl( ${hue} , 100%, 50%)`
    body[0].style.backgroundColor = color;
    setTimeout(rainbow,5)
  }
  rainbow();
}

