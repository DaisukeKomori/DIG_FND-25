'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// TDD Code
//自作 ver.
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! test Passed!!");
  } else {
    console.error("Sorry... Please try again");
    console.group("result");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
    console.trace();
  }
};

//lodash ver.
// function test(actual, expected) {
//   if (_.isEqual(actual, expected)) {
//     console.log("OK! test Passed!!");
//   } else {
//     console.error("Sorry... Please try again");
//     console.group("result");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
//     console.trace();
//   }
// };


/**
 * #1 -function evenOrOdd-
 * @param {Array<number>} 数値型の要素を持つ配列
 * @param {boolean} "true"＝偶数,"false"=奇数
 * @returns {Array<number>} 引数boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列
 */

const evenOrOdd = (arrOfNumber, boolean) => {
  if (boolean === true) {
    const evenArr = arrOfNumber.filter(arr => arr % 2 === 0);
    return evenArr;
  } else if (boolean === false) {
    const oddArr = arrOfNumber.filter(arr => arr % 2 !== 0);
    return oddArr;
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]); // [2, 4]
test(evenOrOdd([0, 4, 36], false), []); // []
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); // [-1, -5, -7]
// 追加test
test(evenOrOdd([1, 2, 4, -5.2, 7, 0], false), [1, -5.2, 7]);


/**
 * #2 -function findKeys- 
 * @param {object} オブジェクト
 * @param {string|number} 文字列または数値型のデータ
 * @returns {Array<any>} 第二引数にマッチする値を持つ全てのキーを含む新たな配列
 */

const findKeys = (obj, target) => {
  const resultArr = [];
  for (const key in obj) {
    if (obj[key] === target) {
      resultArr.push(key);
    }
  }
  return resultArr;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); // ["b", "e"]
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); // ["c", "d"]
// 追加test
test(findKeys({ 1: "h", b: "el", c: 33, d: "hello", e: "44" }, "hello44"), []);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, ""), []);


/**
 * #3 -function buildObject- 
 * @param {Array<any>} オブジェクトのキーとなる配列
 * @param {Array<any>} オブジェクトの値となる配列
 * @returns {object} 第一引数の配列の要素をオブジェクトのキーとして設定し、第二引数の配列の要素をオブジェクトの値とした新たなオブジェクト
 */

const buildObject = (arrOfKey, arrOfValue) => {
  const resultObj = {};
  if (arrOfKey.length === arrOfValue.length) {
    for (let i = 0; i <= arrOfKey.length - 1; i++) {
      resultObj[arrOfKey[i]] = arrOfValue[i];
    }
    return resultObj;
  } else return "array.length not equal";
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 }); // {"a": 1, "b": 2, "c": 3}
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), { "cat": "にゃー", "dog": "わんわん", "duck": "がーがー" }); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), { "cat": null, "dog": 0, "duck": NaN }); // {"cat": null, "dog": 0, "duck": NaN}
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), { "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8] });  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}
//追加test（lodashが必要なtestはコメントアウト）
// test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), { "def": [3, 4, 5], "abc": [0, 1, 2], "ghi": [6, 7, 8] });
test(buildObject(["abc", "def"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), "array.length not equal");


/**
 * #4 -function add- 
 * @param {number} 数値
 * @returns {Function} 引数として 1 つの数値 x を受け取り、関数を返す。返された関数は引数として 1 つの数値 y を受けとり、'x' と 'y' の和を返す。
 */

const add = numX => {
  const addNum = numY => numX + numY;
  return addNum;
}

const addTwo = add(2);
test(addTwo(3), 5); // 5
test(addTwo(70), 72); // 72

const addOneHundred = add(100);
test(addOneHundred(3), 103); // 103
//追加test
test(addOneHundred(0), 100);
test(typeof addOneHundred, "function");


/**
 * #7 -function map- 
 * @param {object|Array} オブジェクトまたは配列
 * @param {Function} コールバック関数
 * @returns {Array<number>} 第一引数の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列
 */

const map = (collections, funcAdd) => {
  const newArray = [];
  if (Array.isArray(collections) === true) {
    for (const collection of collections) {
      newArray.push(funcAdd(collection));
    }
    return newArray;
  } else {
    for (const key in collections) {
      newArray.push(funcAdd(collections[key]))
    }
    return newArray;
  }
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]); // [2, 3, 4]
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); // [2, 3, 4]
//追加test
test(map({ a: 4, b: 5, }, addOne), [5, 6]);
test(map({}, addOne), []);

/**
 * #8 -function changeMiddle- 
 * @param {string} 奇数個の単語からなる文字列(スペースで区切られる)
 * @param {string} 1 つの単語
 * @returns {string} 第 1 引数の真ん中の単語を第 2 引数の単語で置き換えた新しい文字列
 */

const changeMiddle = (oddWords, word) => {
  const wordsArr = oddWords.split(" ");
  wordsArr[Math.floor(wordsArr.length / 2)] = word;
  return wordsArr.join(" ");
}

test(changeMiddle("I like cats", "love"), "I love cats"); // "I love cats"
test(changeMiddle("red green blue", "yellow"), "red yellow blue"); // "red yellow blue"
//追加test
test(changeMiddle("red green blue blue blue", "yellow"), "red green yellow blue blue");


/**
 * #9 -function countSomething- 
 * @param {Array<any>}  数値・文字列・ブーリアンを要素にもつ配列
 * @returns {string} 要素の登場回数が最も多い型をチェックし決められた文字列を返す
 */

const countSomething = arrayOfSomething => {
  const typeOfElements = ["number", "string", "boolean"];
  let resultCount = 0;
  let resultType = "";
  for (const element of typeOfElements) {
    let counter = 0;
    for (const item of arrayOfSomething) {
      if (typeof item === element) {
        counter++;
        if (resultCount < counter) {
          resultCount = counter;
          resultType = typeof item;
        }
      }
    }
  }
  if (resultType === "number") {
    return `NUMBER COUNT: ${resultCount}`;
  } else if (resultType === "string") {
    return `STRING COUNT: ${resultCount}`;
  } else if (resultType === "boolean") {
    return `BOOL COUNT: ${resultCount}`;
  }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3"); // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4"); // "BOOL COUNT: 4"
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4"); // "NUMBER COUNT: 4"
//追加test
test(countSomething(["1", "-1", -1, 0, 1, "false", "true"]), "STRING COUNT: 4");
test(countSomething(["false"]), "STRING COUNT: 1");


/**
 * #10 -function each- 
 * @param {object|Array} オブジェクトまたは配列
 * @param {Function} コールバック関数
 */

const each = (collections, func) => {
  if (Array.isArray(collections) !== true) {
    for (const key in collections) {
      func(collections[key]);
    }
  } else if (Array.isArray(collections) === true) {
    for (const array of collections) {
      func(array);
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


/**
 * #11 -function compose- 
 * @param {Function} 新たな関数の要素となる関数A
 * @param {Function} 新たな関数の要素となる関数B
 * @returns {Function} 引数 x を受け取り、関数Aに x を引数として渡して得られた戻り値を 関数B に引数として渡し、得られた結果を返す新たな関数
 */

const compose = (funcA, funcB) => {
  const funcMaker = function (x) {
    return funcB(funcA(x));
  }
  return funcMaker;
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
//追加test
test(baz(-100), -190);
test(baz(0), 10);