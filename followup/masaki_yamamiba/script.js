"use strict"


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



//1.
// ここにコードを書きましょう
const evenOrOdd = (array, boolean) => {
  const result = [];
  if (boolean === true) {
    for (const num of array) {
      if (num % 2 === 0) {
        result.push(num);
      }
    }
  } else {
    for (const num of array) {
      if (num % 2 === 1 || num % 2 === -1) {
        result.push(num);
      }
    }
  } return result;
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]); // [2, 4]
test(evenOrOdd([0, 4, 36], false), []); // []
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); // [-1, -5, -7]
//  追加テスト
test(evenOrOdd([1, 2, 3, 4, 5, -2, -1, 0, 55.5], true), [2, 4, -2, 0]); // [2, 4, -2, 0]
test(evenOrOdd([1, 2, 3, 4, 5, -2, -1, 0, 55.5], false), [1, 3, 5, -1]); // [1, 3, 5, -1]

//2.

// ここにコードを書きましょう
const findKeys = (objects, target) => {
  const result = [];
  for (const key in objects) {
    if (target === objects[key]) {
      result.push(key);
    }
  } return result;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); // ["b", "e"]
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); // ["c", "d"]


//3.解けませんでした

// ここにコードを書きましょう
const buildObject = (arraysKey, arraysObj) => {
  const newObj = {};
  for (const key of arraysKey) {
    for (const obj of arraysObj) {
      newObj[key] = obj;
    }
  } return newObj;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {
  "a": 1, "b": 2, "c": 3
}); // {"a": 1, "b": 2, "c": 3}
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {
  "cat": "にゃー", "dog": "わんわん", "duck": "がーがー"
}); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {
  "cat": null, "dog": 0, "duck": NaN
}); // {"cat": null, "dog": 0, "duck": NaN}
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {
  "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]
});  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//4.

// ここにコードを書きましょう
const add = (x) => {
  return function (y) {
    return x + y
  }
}

const addTwo = add(2);
test(addTwo(3), 5); // 5
test(addTwo(70), 72); // 72

const addOneHundred = add(100);
test(addOneHundred(3), 103); // 103

//5.

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

//6.着手できませんでした

//7.

// ここにコードを書きましょう
const map = (enyThing) => {
  const result = [];
  if (Array.isArray(enyThing)) {
    for (const number of enyThing) {
      result.push(addOne(number));
    } return result;
  } else {
    for (const obj in enyThing) {
      result.push(addOne(enyThing[obj]));
    } return result;
  }
}

function addOne(num) {
  return num + 1;
}
test(map([1, 2, 3], addOne), [2, 3, 4]); // [2, 3, 4]
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); // [2, 3, 4]
//追加テスト
test(map({ a: -1, b: -2, c: -3 }, addOne), [0, -1, -2]); // [2, 3, 4]


//8.解けませんでした
// ここにコードを書きましょう

const changeMiddle = (sentence, word) => {
  const arrays = [];
  arrays.push(sentence.split(" "));
  // arrays.splice(0, 1, word);
  return `${arrays[0]} ${arrays[1]} ${arrays[2]}`;
}

test(changeMiddle("I like cats", "love"), "I love cats"); // "I love cats"
test(changeMiddle("red green blue", "yellow"), "red yellow blue"); // "red yellow blue"



// //9.解けませんでした
// // ここにコードを書きましょう
const countSomething = (arrays) => {

}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3"); // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4"); // "BOOL COUNT: 4"
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4"); // "NUMBER COUNT: 4"


// //10.解けませんでした
// // ここにコードを書きましょう
const each = () => {
  {

  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// // 上記を実行すると下記を表示するはずです
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6


// //11.解けませんでした
// // ここにコードを書きましょう

function compose(x) {
  return x;
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