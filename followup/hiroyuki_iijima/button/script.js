'use strict';
// please do not delete the 'use strict' line above

const colorButton = document.getElementById('color-button');
colorButton.addEventListener('click', changeColor);

function changeColor() {
  /*
  toString(16)で10進数の乱数を16進数変換した後に
  slice(2, 8)で小数第一位～小数第六位までの文字を取り出す
  例) 0.2313451313(10) → 0.3B396F377059AF(16) → 3B396F
  */
  const colorCode = Math.random().toString(16).slice(2, 8);
  document.body.style.backgroundColor = `#${colorCode}`;
  console.log('Button clicked!'); // feel free to change/delete this line

  /*
  追加要素(ボタンの色を背景色の補色にする)
  colorCodeのRGB値をそれぞれ取得して補色になるRGB値を設定する
  本来は割り切れる値だがjavascriptの仕様(?)で小数点が付く為、Math.floorで数値を丸める
  */
  const buttonColorRed = 255 - Math.floor(parseInt(`0x${colorCode}`) / (256 * 256));
  const buttonColorGreen = 255 - Math.floor((parseInt(`0x${colorCode}`) / 256) % 256);
  const buttonColorBlue = 255 - parseInt(`0x${colorCode}`) % 256;

  colorButton.style.backgroundColor = `rgb(${buttonColorRed} ${buttonColorGreen} ${buttonColorBlue})`;

}