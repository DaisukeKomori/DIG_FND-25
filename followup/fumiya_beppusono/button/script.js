'use strict';
// please do not delete the 'use strict' line above

const button = document.getElementById('color-button'); // ボタンの取得
const bodyTag = document.querySelector('body'); // bodyの取得

button.addEventListener('click', changeColor); // ボタンがクリックされたときのイベントを設定

const appendElement = document.createElement("p"); // 後で追加するpタグを作成
appendElement.style.fontSize = "10pt" // pタグのフォントサイズを指定

function changeColor() {
  function randomNum() { // 0~255までの数字をランダムに生成する関数
    return Math.floor(Math.random() * 256)
  }

  const colorCode = `rgb(${randomNum()} ${randomNum()} ${randomNum()})`
  bodyTag.style.backgroundColor = (colorCode); // 上で作成したカラーコードを適用
  // ボタンのサイズ変更後ボタンの中にpタグを追加
  button.style.height = "100px";
  button.style.width = "300px"
  appendElement.innerText = `現在のカラーコード：${colorCode}`;
  appendElement.style.color = (colorCode);
  button.appendChild(appendElement);
}