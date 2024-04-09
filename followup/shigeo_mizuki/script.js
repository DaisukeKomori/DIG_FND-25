'use strict'
// １行目に記載している 'use strict'　は削除しないでください
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("OK! Test PASSED.");
    } else {
      console.error("Test FAILED. Try again!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
}


// ここにコードを書きましょう
const evenOrOdd = (array, boolean) => {
  if (boolean) {
    const filterArray = array.filter((element) => Math.abs(element) % 2 === 0);
    return filterArray;
  } else {
    const filterArray = array.filter((element) => Math.abs(element) % 2 === 1);
    return filterArray;
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);
test(evenOrOdd([-1.1, -2, 4.5, -5, -7], false), [-5, -7]);

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]


// ここにコードを書きましょう
const findKeys = (obj, num) => {
  const array = [];
  for (const key in obj) {
    if (num === obj[key]) {
      array.push(key);
    }
  }
  return array;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "h"), ["1"]);
test(findKeys({ true: "h", false: "el"}, "el"), ["false"]);

findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]


// ここにコードを書きましょう
const buildObject = (array1, array2) => {
  if (array1.length === array2.length) {
  const obj = {};
  for (let i = 0; i < array1.length; i++) {
    const key = array1[i];
    const value = array2[i];
    obj[key] = value;
  }
  return obj;
  }
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}


// ここにコードを書きましょう
const add = x => y => x + y;

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

const addOneHundred = add(100);
addOneHundred(3); // 103

const addThree = add(3);
addThree(6); // 9
addThree(90); // 93

const addFive = add(5);
addFive(20); // 25
addFive(77); // 82

test(addTwo(3),  5);
test(addTwo(70), 72);
test(addOneHundred(3), 103);
test(addThree(6), 9);
test(addThree(90), 93);
test(addFive(20), 25);
test(addFive(77), 82);


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
// "Hello"　→　"undefined"　→　”Hello, JavaScript"
// 最初の”Hello"はsayHello関数内のコンソール表示処理により表示されたもの
// ２つめの"undefined"はconst foo = によるものだが、sayHello関数に値を返すreturn文が無い為の表示
// ３つめの”Hello, JavaScript"はconst bar = によって、sayHelloAndName関数内の処理を終えた値がreturn文により返されている


// ここにコードを書きましょう
const map = (collection, func) => {
  const array = [];
  if (Array.isArray(collection)) {
    for (const num of collection) {
      array.push(func(num));
    }
  } else {
    for (const key in collection) {
      array.push(func(collection[key]));
    }
  }
  return array;
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);
test(map([-1, -2, 0, 1.5], addOne), [0, -1, 1, 2.5]);
test(map({ a: -1, b: -2, c: 0, d: 1.5 }, addOne), [0, -1, 1, 2.5]);

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]


// ここにコードを書きましょう
const changeMiddle = (string, word) => {
  const changeWord = string.substring(string.indexOf(" ") + 1, string.lastIndexOf(" "));
  return string.replace(changeWord, word);
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");
test(changeMiddle("2024/ 3/ 5", "4/"), "2024/ 4/ 5");

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"


// ここにコードを書きましょう　//
const countSomething = array => {
  let string = 0;
  let bool = 0;
  let number = 0;
  for (const element of array) {
    if (typeof element === "string") {
      string += 1;
    } else if (typeof element === "boolean") {
      bool += 1;
    } else if (typeof element === "number") {
      number += 1;
    }
  }
  if (string > bool && string > number) {
    return `STRING COUNT: ${string}`;
  } else if (bool > string && bool > number) {
    return `BOOL COUNT: ${bool}`;
  } else if (number > string && number > bool) {
    return `NUMBER COUNT: ${number}`;
  } else if (string === bool && string === number && string >= 1) {
    return `STRING COUNT & BOOL COUNT & NUMBER COUNT: ${string}`;
  } else if (string === bool && string > number) {
    return `STRING COUNT & BOOL COUNT: ${string}`;
  } else if (bool === number && bool > string) {
    return `BOOL COUNT & NUMBER COUNT: ${bool}`;
  } else if (string === number && string > bool) {
    return `STRING COUNT & NUMBER COUNT: ${string}`;
  } else if (string === 0 && bool === 0 && number === 0) {
    return "COUNT対象の値がありませんよ!"
  }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");
test(countSomething(["a", "b", 5, true, false, 2]), "STRING COUNT & BOOL COUNT & NUMBER COUNT: 2");
test(countSomething(["true", "true", false, true]), "STRING COUNT & BOOL COUNT: 2");
test(countSomething([true, "true", 1, 0, false]), "BOOL COUNT & NUMBER COUNT: 2");
test(countSomething(["true", "true", 1, 0, false]), "STRING COUNT & NUMBER COUNT: 2");
test(countSomething([]), "COUNT対象の値がありませんよ!");

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"


// ここにコードを書きましょう
const each = (collection, func) => {
  if (Array.isArray(collection)) {
    for (const num of collection) {
        func(num);
      }
    } else {
      for (const key in collection) {
        func(collection[key]);
      }
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);
each({ e: 1.7, f: -8, g: 9 * 3 }, console.log);
each([true, "a" + "B", "a"], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6
// １.７
// -8
// 27
// true
// aB
// a


// ここにコードを書きましょう
const compose = (funcA, funcB) => {
  return function(x) {
    return funcB(funcA(x)); 
  }
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
baz(5); // 20
baz(100); // 210

test(baz(5), 20);
test(baz(100), 210);
test(baz(200), 410);
test(baz(-5), 0);
test(baz(0), 10);
test(baz(0.7), 11.4);
test(baz(-20), -30);