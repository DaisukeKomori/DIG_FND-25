'use strict';
// please do not delete the 'use strict' line above


//ファイルをscript.jsにした意図
//問題の中でファイル名に指定がある場合はそれを優先と書いてあったため

//test用
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}



//1
// ここにコードを書きましょう
function evenOrOdd(array, boolean) {
  const returnArray = [];
  if (boolean === true) {
    for (let i of array) {
      if (typeof i === "number") {
        if (Math.abs(i) % 2 === 0) {
          returnArray.push(i);
        }
      }
    }
  } else if (boolean === false) {
    for (let i of array) {
      if (typeof i === "number") {
        if (Math.abs(i) % 2 === 1) {
          returnArray.push(i);
        }
      }
    } 
  }
  return returnArray;
}

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

//test
test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]); // [2, 4] 正の偶数が返ってくるか
test(evenOrOdd([0, 4, 36], false), []); // [] falseの時からの配列が返ってくるか
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); // [-1, -5, -7] 負の奇数でも判別できるか
//追加test
test(evenOrOdd([-1, -2, -4, -5, -7], true), [-2, -4]); // [-2, -4] 負の偶数も判別できるか
test(evenOrOdd([-1, -2, -4, -5, -7], "true"), []); // [] booleanが文字列の場合は処理しないか
test(evenOrOdd([-1, -2, "-4", -5, -7], true), [-2]); // [] booleanが文字列の場合は処理しないか



//2
// ここにコードを書きましょう
function findKeys(object, target) {
  const matchArray = [];
  for (const key in object) {
    if (object[key] === target) {
      matchArray.push(key)
    }
  }
  return matchArray;
}

findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

//test
test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"]); // ["b", "e"] 数値型一致で返ってくるか
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); // ["c", "d"] 文字列型で返ってくるか
//追加test
test(findKeys({ 1: "h", b: "el", c: "hello", d: "Hello", e: "o" }, "hello"), ["c"]); // ["c", "d"] 完全一致のみ返ってくるか
test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: "2" }, 2),["b"]); // ["b"] 型が違うと返ってこないか



//3
// ここにコードを書きましょう
function buildObject(keyArray, valueArray) {
  const newObject = {};
  for (let i = 0; i < keyArray.length; i++) {
    newObject[keyArray[i]] = valueArray[i];
  }
  return newObject;
}

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//test
test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3}); // {"a": 1, "b": 2, "c": 3} キーバリューペアのオブジェクトができるか
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"} 配列順に入るか
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN}); // {"cat": null, "dog": 0, "duck": NaN} valueには型は関係なく入るか
//追加test
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]} valueArrayが多かった場合、追加されないか
test(buildObject(["cat", "dog", "duck"], [null, 0]), {"cat": null, "dog": 0, "duck": undefined}); // {"cat": null, "dog": 0, "duck": undefined} valueが足りなかった場合undefinedが入るか



//4
// ここにコードを書きましょう
function add(x) {
  function result(y) {
    return x + y;
  }
  return result;
}

const addTwo = add(2);
addTwo(3), 5; // 5
addTwo(70), 72; // 72

const addOneHundred = add(100);
addOneHundred(3), 103; // 103

test(addTwo(3), 5); // 5
test(addTwo(70), 72); // 72
test(addOneHundred(3), 103); // 103



//5
function sayHello() {
  console.log("Hello");
}

function sayHelloAndName(name) {
  return "Hello, " + name;
}

const foo = sayHello();
const bar = sayHelloAndName("JavaScript");

console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
// 最初にコンソールにHello
// 次にundefined
// 最後にHello, JavaScript
// fooには関数呼び出しsayHello()がはいっているので
// console.log(sayHello())と同じ意味
// 関数sayHelloにはconsole.log("Hello")が入っているので
// コンソールにHello表示
// 関数は何かしらの値を必ず返すので、returnがない関数はundefinedを返す
// console.log(bar)の中身はconsole.log(sayHelloAndName("JavaScript"))と同じ
// 関数sayHelloAndNameはreturnで "Hello, " + name を返すのでコンソールにHello, JavaScriptを表示する



// //6
// //変数設定
// const button = document.getElementById("color-button");
// const body = document.getElementsByTagName("body");
// const newElement = document.createElement("p");
// const p = document.getElementsByTagName("p");
// const btn = document.createElement("button");

// //html設定
// newElement.textContent = "色の数値が出るよ！";
// newElement.style.fontSize = "20px";
// btn.innerHTML = "Don't push it, never push it";
// btn.style.fontSize = "10px";
// btn.style.width = "100px";
// btn.style.height = "30px";

// //要素追加
// button.appendChild(newElement);
// button.after(btn);

// //ID設定
// btn.setAttribute("id", "secret")

// //イベント設定
// document.getElementById('color-button').addEventListener('click', changeColor);
// document.getElementById('secret').addEventListener('click', secret);

// //背景色変更関数
// function changeColor() {
//   let hue = Math.floor(360 * Math.random());
//   let color = `hsl( ${hue} , 100%, 50%)`;
//   let strColor = `hsl( ${hue + 120} , 100%, 50%)`;
//   let buttonColor = `hsl( ${hue + 240} , 100%, 50%)`;
//   body[0].style.backgroundColor = color;
//   p[0].innerText = `背景色は${color}`;
//   p[0].style.color = strColor;
//   button.style.backgroundColor = buttonColor;
// }

// //押しちゃダメボタン関数
// function secret() {
//   let hue = 0;

//   btn.style.display = "none";
//   newElement.style.display = "none";
//   button.style.display = "none";

//   function rainbow(){
//     hue++;
//     let color = `hsl( ${hue} , 100%, 50%)`
//     body[0].style.backgroundColor = color;
//     setTimeout(rainbow,5)
//   }
//   rainbow();
// }



//7
// ここにコードを書きましょう
function map(collection, action) {
  const addOneArray = [];
  if (Array.isArray(collection) === true) {
    for (const i of collection) {
      if (typeof i === "number") {
        addOneArray.push(addOne(i));
      }
    }
  } else if (typeof collection === "object" && collection !== null && !Array.isArray(collection)) {
    for (const key in collection) {
      if (typeof collection[key] === "number") {
        addOneArray.push(addOne(collection[key]))
      }
    }
  }
  return addOneArray;
}

function addOne(num) {
  return num + 1;
}

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4] 

//test
test(map([1, 2, 3], addOne), [2, 3, 4]); // [2, 3, 4] 配列処理できるか
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); // [2, 3, 4] オブジェクト処理できるか
//追加test
test(map(null, addOne), []); // [] null処理しないか
test(map([1, 2, "3"], addOne), [2, 3]); // [2, 3] 文字列処理しないか(配列)
test(map({ a: 1, b: "2", c: 3 }, addOne), [2, 4]); // [2, 4] 文字列処理しないか(オブジェクト)
test(map([1, 2, null], addOne), [2, 3]); // [2, 3] 配列にnullがあっても足されないか
test(map({ a: 1, b: null, c: 3 }, addOne), [2, 4]); // [2, 4] オブジェクトにnullがあっても足されないか



//8
// ここにコードを書きましょう
function changeMiddle(sentence, changeWord) {
  const wordArray = sentence.split(" ");

  if (wordArray.length % 2 === 1) {
    wordArray[wordArray.length / 2 - 0.5] = changeWord;
  }
  return wordArray.join(" ");
}

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

//test
test(changeMiddle("I like cats", "love"), "I love cats"); // "I love cats"
test(changeMiddle("red green blue", "yellow"), "red yellow blue"); // "red yellow blue"
//追加test
test(changeMiddle("red green blue orange", "yellow"), "red green blue orange"); // "red green blue orange" 偶数のとき変換せずに返すか
test(changeMiddle("red green blue orange purple", "yellow"), "red green yellow orange purple"); // "red green yellow orange purple" 5個のワードでも真ん中を置換するか



//9
// ここにコードを書きましょう
function countSomething(array) {
  let stringCount = 0;
  let numberCount = 0;
  let booleanCount = 0;
  for (const i of array) {
    if (typeof i === "string") {
      stringCount++;
    } else if (typeof i === "number") {
      numberCount++;
    } else if (typeof i === "boolean") {
      booleanCount++;
    }
  }
  if (stringCount > numberCount && stringCount > booleanCount) {
    return `STRING COUNT: ${stringCount}`;
  } else if (numberCount > stringCount && numberCount > booleanCount) {
    return `NUMBER COUNT: ${numberCount}`;
  } else if (booleanCount > stringCount && booleanCount > numberCount) {
  return `BOOL COUNT: ${booleanCount}`;
  } else if (stringCount === numberCount && numberCount === booleanCount && stringCount === booleanCount) {
    return `STRING COUNT: ${stringCount}, NUMBER COUNT: ${numberCount}, BOOL COUNT: ${booleanCount}`
  } else if (stringCount === numberCount) {
    return `STRING COUNT: ${stringCount}, NUMBER COUNT: ${numberCount}`
  } else if (numberCount === booleanCount) {
    return `NUMBER COUNT: ${numberCount}, BOOL COUNT: ${booleanCount}`
  } else if (stringCount === booleanCount) {
    return `STRING COUNT: ${stringCount}, BOOL COUNT: ${booleanCount}`
  }
}


countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

//test
test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3"); // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4"); // "BOOL COUNT: 4"
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4"); // "NUMBER COUNT: 4"
//追加test
test(countSomething([true, true, 1, 0, 1, false, 1, true, "2"]), "NUMBER COUNT: 4, BOOL COUNT: 4"); // "NUMBER COUNT: 4 ,BOOL COUNT: 4"カウントが同じ場合同率一位を表示
test(countSomething([true, true, "1", "0", 1, 1]), "STRING COUNT: 2, NUMBER COUNT: 2, BOOL COUNT: 2"); // "STRING COUNT: 2, NUMBER COUNT: 2, BOOL COUNT: 2" カウントが同じ場合同率一位を表示



//10
// ここにコードを書きましょう
function each(collection, action) {
  if (Array.isArray(collection) === true) {
    for (const i of collection) {
      action(i);
    }
  } else if (typeof collection === "object" && collection !== null && !Array.isArray(collection)) {
    for (const key in collection) {
      action(collection[key]);
    }
  }
}


each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);
//追加test
each(["7", "8", "9"], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6
//↓追加test分
// "7"
// "8"
// "9"



//11
// ここにコードを書きましょう
function compose(funcA, funcB) {
  function composeResult(x) {
    if (typeof x === "number") {
      let resultX = funcB(funcA(x));
      return resultX;
    }
  }
  return composeResult;
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
baz(5),20; // 20
baz(100),210; // 210

//test
test(baz(5), 20); // ちゃんと計算できているか
test(baz(100), 210); // ちゃんと計算できているか
//追加test
test(baz("１００"), undefined); // 全角数値はundefinedを返す
test(baz("abc"), undefined); // 文字列はundefinedを返す