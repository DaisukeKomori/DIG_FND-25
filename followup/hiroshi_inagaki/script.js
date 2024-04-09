'use strict'
// 1行目に記載している 'use strict' は削除しないでください

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

/** exercises.1　evenOrOdd関数を宣言する
 * @param {Array<number>}  数値が入った配列 arrayOfNumbers
 * @param {boolean}  真偽値 boolean
 * @returns {Array<number>} boolean が true の場合は偶数のみの配列を、false の場合は奇数のみの配列を返す
*/
function evenOrOdd(arrayOfNumbers, boolean) {
  return arrayOfNumbers.filter(function(num) {
    if (boolean) {
      return num % 2 === 0;
    } else {
      return num % 2 !== 0;
    }
  });
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);

/** exercises.2　findKeys関数を宣言する
 * @param {object}  オブジェクト object
 * @param {number or string}  数値または文字列 target
 * @returns {Array<string>} オブジェクトの中で target にマッチする値を持つ全てのキーを含む新しい配列を返す
*/
function findKeys(object, target) {
  const result = [];
  for (const key in object) {
    if (object[key] === target) {
      result.push(key);
    }
  }
  return result;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);

/** exercises.3　buildObject関数を宣言する
 * @param {Array}　キーの配列 arrayOfKeys
 * @param {Array}　値の配列 arrayOfValues
 * @returns {object}　キーの配列の要素をオブジェクトのキーとして設定、値の配列の要素をオブジェクトの値として設定したオブジェクトを返す 
*/
function buildObject(arrayOfKeys, arrayOfValues) {
  const result = {};
  for (let i = 0; i < arrayOfKeys.length; i++) {
    result[arrayOfKeys[i]] = arrayOfValues[i];
  }
  return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

test(buildObject(["June", "July", "August"], [6, 7, 8, 9]), {"June": 6, "July": 7, "August": 8});
test(buildObject(["May", "June", "July", "August"], [5, 6, 7]), {"May": 5, "June": 6, "July": 7, "August": undefined});

/** exercises.4　add関数を宣言する
 * @param {number} 数値を引数にとる x
 * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
*/
function add(x) {
  return (y => x + y);
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);

/** exercises.7　map関数を宣言する
 * @param {Array<number or object>} オブジェクトの場合は要素を数値型とする collection
 * @param {function}　コールバック関数：引数の数値に何らかの演算(ex.+1)をする関数 func
 * @returns {Array<number>}　コレクション内の全ての各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返す
*/
function map(collection, func) {
  const result = [];
  if (Array.isArray(collection)) {
    for (const num of collection) {
      result.push(func(num));
    }
  } else {
    for (const key in collection) {
      result.push(func(collection[key]));
    }
  }
  return result;
}

function addOne(num) {
  return num + 1;
}

function subTen(num) {
  return num - 10;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

test(map([1, 2, 3], subTen), [-9, -8, -7]);
test(map({ "a": 10, "b": 11, "c": 12 }, subTen), [0, 1, 2]);

/** exercises.8　changeMiddle関数を宣言する
 * @param {string}　奇数個の単語からなる文字列(スペースで区切れらている) sentenceOfWords
 * @param {string}　１つの単語の文字列 word
 * @returns {string}　sentence の真ん中の単語を word に置き換えた新しい文字列を返す
 */
function changeMiddle(sentenceOfWords, word) {
  let result = "";
  const arrayOfWords = sentenceOfWords.split(" ");
  arrayOfWords[Math.floor(arrayOfWords.length / 2)] = word;
  for (const string of arrayOfWords) {
    result += string + " "; 
  }
  return result = result.slice(0, result.length - 1);
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");
test(changeMiddle("I play tennis on saturdays", "baseball"), "I play baseball on saturdays");

/** exercises.9　countSomething関数を宣言する
 * @param {Array<number, string, boolean>}　数値・文字列・ブーリアンを要素にもつ配列 arrayOfVariousType
 * @returns {string}　登場回数が最も多い型をチェックし、その回数を示すよう、以下に倣った文字列を返す
 * ブーリアンが最も多い場合：　"BOOL COUNT: x"
 * 文字列が最も多い場合：　"STRING COUNT: x"
 * 数値が最も多い場合：　"NUMBER COUNT: x"
 * 　x はその型の要素が何回出現したかを表す
 */
function countSomething(arrayOfVariousType) {
  const typeCount = [
    {
      AppearanceType: "BOOL COUNT: ",
      Count: 0
    },
    {
      AppearanceType: "STRING COUNT: ",
      Count: 0
    },
    {
      AppearanceType: "NUMBER COUNT: ",
      Count: 0
    }
  ];
  
  for (const element of arrayOfVariousType) {
    if (typeof element === "boolean") {
      typeCount[0].Count++;
    } else if (typeof element === "string") {
      typeCount[1].Count++;
    } else if (typeof element === "number") {
      typeCount[2].Count++;
    }
  }
  
  if ((typeCount[0].Count > typeCount[1].Count) && (typeCount[0].Count > typeCount[2].Count)) {
    return typeCount[0].AppearanceType + String(typeCount[0].Count);
  } else if (typeCount[1].Count > typeCount[2].Count) {
    return typeCount[1].AppearanceType + String(typeCount[1].Count);
  } else {
    return typeCount[2].AppearanceType + String(typeCount[2].Count);
  }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

/** exercises.10　each関数を宣言する
 * @param {Array<number or object>} 数値の配列かオブジェクト型 collection
 * @param {function}　コールバック関数：引数 collection の値に何らか処理する関数(今回は console.log) func
 * @returns {undefined}　何も返さない
 * コンソール画面に以下が表示される
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
*/
function each(collection, func) {
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

/** exercises.11　compose関数を宣言する
 * @param {function} funcA：引数 x を取り、得られた値を funcB に渡す
 * @param {function} funcB：funcA から渡された値を引数に取り、得られた値を返す
 * @returns {function} funcB で得られた結果が得られるように関数を返す
*/
function compose(funcA, funcB) {
   return (x => funcB(funcA(x)));
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5), 20);
test(baz(100), 210);