'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  text1.innerText = `今の背景色は　`;
  text1.style.color = `rgb(${r},${g},${b})`;
  rtext.innerText = `R:${r}　`;
  rtext.style.color = "rgb(255, 0, 0)";
  gtext.innerText = `G:${g}　`;
  gtext.style.color = "rgb(0, 255, 0)";
  btext.innerText = `B:${b}　`;
  btext.style.color = "rgb(0, 0, 255)";
  return document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

let div = document.createElement("div");
document.body.appendChild(div);

let div1 = document.createElement("div");
div.appendChild(div1);

let colorButton = document.getElementById('color-button');
div1.appendChild(colorButton);
colorButton.style.color = "rgb(255, 255, 255)";
colorButton.style.backgroundColor = "rgb(50, 150, 255)";

let div2 = document.createElement("div");
div2.style.backgroundColor = "rgb(255, 255, 255)";
div.appendChild(div2);
div2.style.display = "flex";

let text1 = document.createElement("h1");
div2.appendChild(text1);

let rtext = document.createElement("h1");
div2.appendChild(rtext);

let gtext = document.createElement("h1");
div2.appendChild(gtext);

let btext = document.createElement("h1");
div2.appendChild(btext);

let div3 = document.createElement("div");
div.appendChild(div3);
div3.style.marginTop = "20px";

let luckyColor = document.createElement("button");
div3.appendChild(luckyColor);
luckyColor.innerText = "luckyColor"
luckyColor.style.color = "rgb(255, 255, 255)";
luckyColor.style.backgroundColor = "rgb(50, 150, 255)";

luckyColor.addEventListener('click', luckyColorSelect);

const colors = [{color: "赤色です！", rgb: "rgb(255, 0, 0)"},
               {color: "青色です！", rgb: "rgb(0, 0, 255)"},
               {color: "緑色です！", rgb: "rgb(0, 255, 0)"},
               {color: "ピンクです！", rgb: "rgb(255, 0, 127)"},
               {color: "紫色です！", rgb: "rgb(127, 0, 255)"},
               {color: "オレンジです！", rgb: "rgb(255, 128, 0)"}];

function luckyColorSelect() {
  colorText.innerText = "今日のラッキーカラーは";
  const randomnum = Math.floor(Math.random() * colors.length);
  todayColor.innerText = colors[randomnum].color;
  div4.style.backgroundColor = "rgb(255, 255, 255)";
  div4.style.color = colors[randomnum].rgb;
}

let div4 = document.createElement("div");
div.appendChild(div4);
div4.style.display = "flex";

let colorText = document.createElement("h1");
div4.appendChild(colorText);

let todayColor = document.createElement("h1");
div4.appendChild(todayColor);