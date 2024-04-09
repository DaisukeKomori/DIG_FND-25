'use strict';
// please do not delete the 'use strict' line above

'use strict';
// please do not delete the 'use strict' line above

const btn = document.getElementById('color-button');

//ボタンクリックによるイベントリスナー
btn.addEventListener('click', changeColor);

const colors = ["blue", "lime", "red", "black", "pink", "grey", "yellow"];
let lastColor = null;
let intervalId = null; // setIntervalのIDを格納する変数

const rainbowButton = document.createElement("button");
rainbowButton.classList.add("addition");
rainbowButton.innerText = "Rainbow";

const alligatorButton = document.createElement("button");
alligatorButton.classList.add("addition");
alligatorButton.innerText = "Display";

const itemDiv = document.createElement("div"); // 新しいdiv要素を作成

// 画像のURL
const imageUrl = "https://i.ibb.co/kgVjygC/image.png";

// 画像要素の作成
const image = document.createElement("img");
image.src = imageUrl;

// スタイルを適用して要素を縦に配置
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";

// rainbowButtonとalligatorButton をコンテナに追加
container.appendChild(alligatorButton);

// itemDivと画像をコンテナに追加
container.appendChild(itemDiv);
container.appendChild(image);

// 画像表示の初期状態を設定
image.style.opacity = "0"; // 画像を非表示

document.body.appendChild(rainbowButton);

// コンテナをbody要素に追加
document.body.appendChild(container);


function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  // 前回の色を除外した色の配列を作成
  const availableColors = colors.filter(color => color !== lastColor);
  // 利用可能な色からランダムに色を選択
  const newColor = availableColors[Math.floor(Math.random() * availableColors.length)];

  document.querySelector("body").style.backgroundColor = newColor;
  lastColor = newColor;
}

function startRainbow() {
  console.log('rainbowButton clicked!');

  // 切り替え間隔を設定
  const intervalDuration = 300; // 1000 ミリ秒 = 1 秒

  // intervalId が null でない場合、既に別の rainbow 処理が実行中なので終了する
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    rainbowButton.innerText = "Rainbow"; // ボタンのテキストを "Rainbow" に戻す
    return;
  }

  // setInterval を使って一定間隔で rainbow 関数を呼び出す
  intervalId = setInterval(rainbow, intervalDuration);
  rainbowButton.innerText = "Stop"; // ボタンのテキストを "Stop" に変更
}

function rainbow() {
  // colors 配列の色を順番に表示する
  const currentIndex = colors.indexOf(lastColor); // 前回の色のインデックスを取得
  let nextIndex = currentIndex + 1; // 次の色のインデックス

  // 次の色のインデックスが colors 配列の範囲外の場合、最初の色に戻る
  if (nextIndex >= colors.length) {
    nextIndex = 0;
  }

  // 次の色を取得して背景色として設定
  const nextColor = colors[nextIndex];
  document.querySelector("body").style.backgroundColor = nextColor;
  lastColor = nextColor; // 選択された色を記録
}

function alligator() {
  console.log("alligatorButton clicked!");
  if (alligatorButton.innerText === "Display") {
    // ボタンのテキストを"Hidden"に変更
    alligatorButton.innerText = "Hidden";
    // 画像の opacity を変更してフェードインさせる
    image.animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      {
        duration: 1000, // 1秒でフェードイン
        fill: 'forwards'
      }
    )
  } else if (alligatorButton.innerText === "Hidden") {
    // ボタンのテキストを"Display"に変更
    alligatorButton.innerText = "Display";
    // 画像の opacity を変更してフェードアウトさせる
    image.animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      {
        duration: 1000, // 1秒でフェードアウト
        fill: 'forwards'
      }
    )
  }
}

//ボタンクリックによるイベントリスナー
rainbowButton.addEventListener('click', startRainbow);
alligatorButton.addEventListener('click', alligator);