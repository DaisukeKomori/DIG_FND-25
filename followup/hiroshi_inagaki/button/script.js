'use strict';
// please do not delete the 'use strict' line above

/** ボタンをクリックしたら呼び出される、changeColor関数を宣言する
 * @param {} 引数なし
 * @returns {undefined} 返り値はなし
 *  (1) 画面の背景色とボタン内テキスト色を同色でランダムに変更する
 *  (2) クリックした回数を表示する
 *  (3) 変更した色のカラーコードを、最新を最上位にして列挙して表示する
*/
document.getElementById('color-button').addEventListener('click', changeColor);

document.body.style.display = "block";
document.body.style.textAlign = "center";

const counterArea = document.createElement("p");
counterArea.style.backgroundColor = "white";
counterArea.style.fontSize = "20px";
counterArea.innerText = "counter";
document.body.prepend(counterArea);

const colorCodeArea = document.createElement("p");
document.body.appendChild(colorCodeArea);

let counter = 0;

function changeColor() {
  counter++;
  const rgb =
    "RGB("
    + String(Math.floor((Math.random() * 256)))
    + ", " + String(Math.floor((Math.random() * 256)))
    + ", " + String(Math.floor((Math.random() * 256)))
    + ")";
  
  document.body.style.backgroundColor = rgb;
  document.getElementById("color-button").style.color = rgb;
  
  counterArea.innerText = String(counter) + " 回目の Click だよ！";
  
  const colorCode = document.createElement("div");
  colorCode.style.fontSize = "15px";
  colorCode.style.color = "white";
  colorCodeArea.prepend(colorCode);
  colorCode.innerText = String(counter) + " 回目のカラーコード： " + rgb;
}