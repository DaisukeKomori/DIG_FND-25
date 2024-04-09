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



function evenOrOdd(array, bool) {
  if (bool === true) {
    return array.filter(num => Math.abs(num) % 2 === 0);
  } else {
    return array.filter(num => Math.abs(num) % 2 === 1);
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]); // [2, 4]
test(evenOrOdd([0, 4, 36], false), []); // []
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); // [-1, -5, -7]



function findKeys(obj, target) {
  const resultArray = [];
  for (const key in obj) {
    if (obj[key] === target) {
      resultArray.push(key);
    }
  }
  return resultArray
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); // ["b", "e"]
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello")["c", "d"]); // ["c", "d"]



function buildObject(keyArray, valArray) {
  const resultObj = {};
  resltObj[keyArray[0]] = valArray[0];
  keyArray.reduce(function (acc, cur, idx) {
    resltObj[cur] = valArray[idx];
    return cur;
  })
  return resultObj;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 }); // {"a": 1, "b": 2, "c": 3}
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), { "cat": "にゃー", "dog": "わんわん", "duck": "がーがー" }); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), { "cat": null, "dog": 0, "duck": NaN }); // {"cat": null, "dog": 0, "duck": NaN}
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), { "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8] });  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}



function add(x) {
  const num = x;
  function innerAdd(y) {
    return num + y;
  }
  return innerAdd;
}


// console.log(add(3)(5));
const addTwo = add(2);
test(addTwo(3), 5); // 5
test(addTwo(70), 72); // 72

const addOneHundred = add(100);
test(addOneHundred(3), 103); // 103



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
// コンソールログに表示される内容と解説
// ①Hello　が表示　
// 　解説:90行目でconsole.logとして foo が呼び出される。
//  　　　foo は simpleHello() という関数呼び出しを格納した変数なので
// 　　　関数simpleHello が実行される。関数simpleHelloの副作用として
// 　　　コンソールログにHelloを表示するため、初めにHelloが表示される。
// 　　　※またsimpleHello()は明示的な返り値がないのでundefindが返り値となっている。

// ②undefined　が表示
// 　解説: 90行目で呼び出したconsole.log(foo)＝関数simpleHelloの返り値である
// 　　　　undefined　が次に表示される。

// ③Hello, JavaScript　が表示
// 　解説:91行目でconsole.logとして bar が呼び出される。
// 　　　 bar は anotherGreeting(”JavaScript”) という関数呼び出しを格納した変数なので
// 　　　関数anotherGreetingが実行される。関数anotherGreetingは
// 　　　返り値として文字列 ”Hello, ” と 引数 name を結合して返すため、
// 　　　Hello, JavaScript　が最後に表示される。　　


function map(colection, func) {
  const val = Object.values(colection); // 連想配列(obj)も値だけの配列にする
  const result = Array.from(val, x => func(x)); //fromメソッドでmapの代替処理
  return result;
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]); // [2, 3, 4]
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); // [2, 3, 4]



function changeMiddle(sentence, insertWord) {
  const strArray = sentence.split(" ");
  const middle = (Math.floor(strArray.length) / 2);
  strArray.splice(middle, 1, insertWord);
  const result = strArray.reduce((acc, cur) => acc + " " + cur);
  return result;
}

test(changeMiddle("I like cats", "love"), "I love cats"); // "I love cats"
test(changeMiddle("red green blue", "yellow"), "red yellow blue"); // "red yellow blue"


function countSomething(array) {
  const strs = array.filter(val => typeof val === "string").length;
  const nums = array.filter(val => typeof val === "number").length;
  const bools = array.filter(val => typeof val === "boolean").length;
  if (strs > nums && strs > bools) {
    return "STRING COUNT: " + strs;
  } else if (nums > bools) {
    return "NUMBER COUNT: " + nums;
  } else {
    return "BOOL COUNT: " + bools;
  }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3"); // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4"); // "BOOL COUNT: 4"
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4"); // "NUMBER COUNT: 4"



function each(colection, func) {
  const val = Object.values(colection); // 連想配列(obj)も値だけの配列にする
  const result = Array.from(val, x => func(x)); //fromメソッドでeach,mapの代替処理
  return result;
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

function compose(fancA, fancB) {
  function innerFunc(x) {
    return fancB(fancA(x));
  }
  return innerFunc;
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