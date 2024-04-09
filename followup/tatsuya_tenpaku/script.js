'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
}


//課題1
/**
 * @param {Array<number>} array - 1番目の引数（数値型の値をもつ配列）
 * @param {boolean} boolean - 2番目の引数（ブーリアン型）
 * @returns {Array} 返り値（配列）
 */

function evenOrOdd(array, boolean) {
  let result = [];
  if (boolean === true) {
    result = array.filter(num => num % 2 === 0);
  } else {
    result = array.filter(num => num % 2 !== 0);
  }
  return result;
}

//テスト実行
test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);


//課題2
/**
 * @param {object} obj - 1番目の引数（オブジェクト）
 * @param {string|number} target - 2番目の引数（文字列型または数値型）
 * @returns {Array} 返り値（配列）
 */

function findKeys(obj, target) {
  const result = [];
  for (const key in obj) {
    if (obj[key] === target) {
      result.push(key);
    }
  }
  return result;
}

//テスト実行
test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);


//課題3
/**
 * @param {Array} array - 1番目の引数（配列）
 * @param {Array} arrayTwo - 2番目の引数（配列）
 * @returns {object} 返り値（1番目の引数の配列をキー、2番目の引数の配列を値としたオブジェクト）
 */

function buildObject(array, arrayTwo) {
  const result = arrayTwo.reduce((accumulator, currentValue, index) => {
    accumulator[array[index]] = currentValue;
    return accumulator;
  }, {});
  return result;
}

//テスト実行
test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});


//課題4
/**
 * @param {number} x - 1番目の引数（数値型）
 * @returns {function} 返り値（関数）
 * @returns {number} 返り値（引数として1つの数値yを受けとり、'x' と 'y' の和を返す）
 */
function add(x) {
  return function(y) {
    return x + y;
  }
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);

//テスト実行
test(addOneHundred(3), 103);


//課題5
//アセスメント提出ファームに回答を記載


//課題6
//script.jsファイルへ回答を記載


//課題7
/**
 * @param {Array|object} collection - 1番目の引数（コレクション）
 * @param {function} func - 2番目の引数（コールバック関数）
 * @returns {Array} 返り値（コレクションにコールバック関数を実行した配列）
 */

function map(collection, func) {
  const result = [];
  if (Array.isArray(collection)) {
    //コレクションが配列の場合
    for (const item of collection) {
      result.push(func(item));
    }
  } else if (typeof collection === "object") {
    //コレクションがオブジェクトの場合
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(func(collection[key]));
      }
    }
  }
  return result;
}

function addOne(num) {
  return num + 1;
}

// テスト実行
test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);


//課題8
/**
 * @param {string} word - 1番目の引数（文字列メッセージ）
 * @param {string} newWord - 2番目の引数（置き換える単語）
 * @returns {string} 返り値（文字列メッセージの中央の単語を2番目の引数に置き換えたメッセージ）
 */

function changeMiddle(word, newWord) {
  // 文字列をスペースで区切って配列に変換
  const words = word.split(" ");
  // 中央の単語のインデックスを算出
  const centerIndex = Math.floor(words.length / 2);
  // 中央の単語を新しい単語に置き換え
  words[centerIndex] = newWord;
  // 配列をスペースで結合して新しい文字列を返す
  return words.join(" ");
}

//テスト実行
test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");


//課題9
/**
 * @param {Array<number|string|boolean>} array - 引数（配列）
 * @returns {string} 返り値（一番多いデータ型 COUNT：個数）
 */

function countSomething(array) {
  let numCount = 0, strCount = 0, boolCount = 0;
  array.forEach(element => {
    switch (typeof element) {
      case "number":
        numCount++;
        break;
      case "string":
        strCount++;
        break;
      case "boolean":
        boolCount++;
        break;
    }
  })
  
  // 一番多いデータ型を判定して対応するメッセージを返す
  if (numCount > strCount && numCount > boolCount) {
    return `NUMBER COUNT: ${numCount}`;
  } else if (strCount > numCount && strCount > boolCount) {
    return `STRING COUNT: ${strCount}`;
  } else if (boolCount > numCount && boolCount > strCount) {
    return `BOOL COUNT: ${boolCount}`;
  }
}

//テスト実行
test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");


//課題10
/**
 * @param {Array|object} collection - 1番目の引数（コレクション）
 * @param {function} func - 2番目の引数（コールバック関数）
 */

function each(collection, func) {
  // コレクションが配列の場合
  if (Array.isArray(collection)) {
    for (const num of collection) {
      func(num);
    }
  }
  // コレクションがオブジェクトの場合
  else if (typeof collection === "object") {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        func(collection[key]);
      }
    }
  }
}

//テスト実行
each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6


//課題11
/**
 * @param {function} funcA - 1番目の引数（コールバック関数）
 * @param {function} funcB - 2番目の引数（コールバック関数）
 * @returns {function} 返り値（引数xを受け取り、funcAにxを引数として渡して得られた戻り値をfuncBに引数として渡し、得られた結果を返す
 */

function compose(funcA, funcB) {
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

//テスト実行
test(baz(5), 20);
test(baz(100), 210);