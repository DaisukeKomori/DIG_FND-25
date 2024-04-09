'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//課題.1
function evenOrOdd(numbers, boolean) {
  const arrayNum = [];
  for (const num of numbers) {
    if (boolean === true) {
        if (num % 2 === 0) {
        arrayNum.push(num);
        }
    } else {
      if (num % 2 !== 0) {
        arrayNum.push(num);
      }
    }
  }
  return arrayNum;
}
evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]


//課題.2
function findKeys(object, target) {
  const newArray = [];
  for (const key in object) {
    if (object[key] === target) {
      newArray.push(object[key]);
    }
  }
  return newArray;
}
findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]


//課題.3
function buildObject(arrayKey, arrayElements){
  const obj = {};
  for (let i = 0; i < arrayKey.length; i++) {
    obj[arrayKey[i]] = arrayElements[i];
}
return obj
}
buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}


// 課題.4
function add(x){
  let num = x;

  function addTwo(y){
    let result = num + y;
    return result;
  }
  return addTwo;
}

function add(x){
  let num = x;

  function addOneHundred(y){
    let result = num + y;
    return result;
  }
  return addOneHundred;
}

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

const addOneHundred = add(100);
addOneHundred(3); // 103


//課題.7
function map(numbers, func) {
  const newArray = [];
  for (const num of Object.values(numbers)) {
    newArray.push(func(num));
  }
  return newArray;
}

function addOne(num) {
  return num + 1;
}
map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]


//課題.8
function changeMiddle(str1, str2) {
  const arr = str1.split(" ");
  const middleIndex = Math.floor(arr.length / 2); // 配列の中央のインデックスを取得
  arr[middleIndex] = str2; 
  const newStr = arr.join(" "); 
  return newStr;
}
changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"


//課題.9
function countSomething(arr) {
  let stringCount = 0;
  let booleanCount = 0;
  let numberCount = 0;

  for (const item of arr) {
    if (typeof item === "string") {
      stringCount++;
    } else if (typeof item === "boolean") {
      booleanCount++;
    } else if (typeof item === "number") {
      numberCount++;
    }
  }

  const counts = [
    { type: "STRING", count: stringCount },
    { type: "BOOL", count: booleanCount },
    { type: "NUMBER", count: numberCount }
  ];

  counts.sort((a, b) => b.count - a.count); // 要素の数で降順にソート

  const mostCommonType = counts[0]; // 一番多い型の要素

  return `${mostCommonType.type} COUNT: ${mostCommonType.count}`;
}

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

//課題.10
function each(numbers, func) {
  
  for (const num of Object.values(numbers)) {
    func(num);
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


//課題.11
function compose(funcA, funcB) {
  return function (input) {
    const resultA = funcA(input);
    const resultB = funcB(resultA);
    return resultB;
  };
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