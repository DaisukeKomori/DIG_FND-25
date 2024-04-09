'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// テスト関数
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("  expected:", expected);
    console.log("    actual:", actual);
  }
}


// 課題
// 1.
// ここにコードを書きましょう
function evenOrOdd(arrayOfNum, bool) {
  if (bool === true) {
    return arrayOfNum.filter(value => value % 2 === 0);
  } else {
    return arrayOfNum.filter(value => value % 2 !== 0);
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]); // [2, 4]
test(evenOrOdd([0, 4, 36], false), []); // []
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); // [-1, -5, -7]


// 2.
// ここにコードを書きましょう
const findKeys = (obj, target) => {
  const result = [];
  for (const key in obj) {
    if (obj[key] === target) {
      result.push(key);
    }
  }
  return result;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); // ["b", "e"]
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); // ["c", "d"]


// 3.
// ここにコードを書きましょう
const buildObject = (keyArray, valueArray) => {
  const result = {};
  for (let i = 0; i < valueArray.length; i++) {
    result[keyArray[i]] = valueArray[i];
  }
  return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3}); // {"a": 1, "b": 2, "c": 3}
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN}); // {"cat": null, "dog": 0, "duck": NaN}
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}


// 4.
// ここにコードを書きましょう
const add = (x) => {
  const innerAdd = (y) => {
    return x + y;
  }
  return innerAdd;
}

const addTwo = add(2);
test(addTwo(3), 5); // 5
test(addTwo(70), 72); // 72

const addOneHundred = add(100);
test(addOneHundred(3), 103); // 103


// 5.
// 副作用のみの関数 コンソールにHelloと表示する
function sayHello() {
  console.log("Hello");
}

// Hello, name（引数）が返り値として返される
function sayHelloAndName(name) {
  return "Hello, " + name;
}

const foo = sayHello();
const bar = sayHelloAndName("JavaScript");

console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
// コンソールの表示
// Hello
// undefined
// Hello, JavaScript

/** 解説
*1. const foo = sayHello();でsayHello関数が実行されコンソール
 *    にHelloと表示され、返り値は無いためfooにundefinedが代入される。
 * 2. const bar = sayHelloAndName("JavaScript");でsayHelloAndName
 *    関数が実行されbarに返り値であるHello, JavaScriptが代入される。
 * 3. console.log(foo);でfooに代入されているundefinedがコンソールに表示される。
 * 4. console.log(ber);でberに代入されているHello, JavaScriptがコンソールに表示される。
 */


// 7.
// ここにコードを書きましょう
const map = (collection, func) => {
  const result = [];
  if (Array.isArray(collection)) { // 実引数が配列の時の処理
    for (const value of collection) {
      result.push(func(value));
    }
  } else { // 実引数がオブジェクトの時の処理
    for (const key in collection) {
    result.push(func(collection[key]));
    }
  }  
  return result;
}

function addOne(num) {
  return num + 1;
}
test(map([1, 2, 3], addOne), [2, 3, 4]); // [2, 3, 4]
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); // [2, 3, 4]


// 8.
// ここにコードを書きましょう
const changeMiddle = (strs, str) => {
  const strsArray = strs.split(" "); // strを半角スペースで分けて配列に格納する
  for (let i = 0; i < strsArray.length; i++) {
    if (i === Math.floor(strsArray.length / 2)) { // 配列の真ん中の要素のみの処理
      strsArray[i] = str;
    }
  }
  return strsArray.join(" "); // 配列の要素を半角スペースで繋げて文字列に戻す
}

test(changeMiddle("I like cats", "love"), "I love cats"); // "I love cats"
test(changeMiddle("red green blue", "yellow"), "red yellow blue"); // "red yellow blue"


// 9.
// ここにコードを書きましょう
const countSomething = (anyValues) => {
  // カウント結果を格納するオブジェクトを作成
  // 要素の配列の中身はそのままreturnに使用する
  const counter = {
    numCount: ["NUMBER COUNT: ", 0],
    strCount: ["STRING COUNT: ", 0],
    boolCount: ["BOOL COUNT: ", 0],
  };

  // 実引数の配列の要素のtypeを調べ、対応するcounter内の数値が増える
  for (const value of anyValues) {
    const type = typeof value;
    if (type === "number") {
      counter.numCount[1]++;
    } else if (type === "string") {
      counter.strCount[1]++;
    } else {
      counter.boolCount[1]++;
    }
  }

  let maxKey;
  let maxCount = 0;
  for (const key in counter) { // counterの中で一番数値が大きいkeyを調べる
    if (maxCount < counter[key][1]) {
      maxCount = counter[key][1];
      maxKey = key;
    }
  }
  return `${counter[maxKey][0]}${counter[maxKey][1]}`;
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3"); // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4"); // "BOOL COUNT: 4"
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4"); // "NUMBER COUNT: 4"


// 10.
// ここにコードを書きましょう
const each = (collection, func) => {
  if (Array.isArray(collection)) { // 実引数が配列の時の処理
    for (const value of collection) {
      func(value);
    }
  } else {
    for (const key in collection) { // 実引数がオブジェクトの時の処理
      func(collection[key]);
    }
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6


// 11.
// ここにコードを書きましょう
const compose = (funcA, funcB) => {
  const chainFunc = (x) => {
    return funcB(funcA(x));
  }
  return chainFunc; // クロージャにより返り値として返されたchainFunc内でfuncA,funcBが使用できる
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5), 20); // 20
test(baz(100), 210); // 210