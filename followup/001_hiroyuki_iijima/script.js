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


//課題１
// ここにコードを書きましょう
function evenOrOdd(arrayNumbers, isEven) {
  //return用の空配列作成
  const resultArrayNumbers = [];

  for (const num of arrayNumbers) {

    //「isEvenがtrueかつ偶数」「isEvenがfalseかつ奇数」の時に空配列に値を追加
    if (isEven === true && num % 2 === 0
       || isEven === false && num % 2 !== 0 && Number.isInteger(num)) {
      resultArrayNumbers.push(num);
    }
  }

  return resultArrayNumbers;
}

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

// test(evenOrOdd([1, 2, 3, 4, 5], true) ,[2, 4]);
// test(evenOrOdd([0, 4, 36], false) ,[]);
// test(evenOrOdd([-1, -2, 4, -5, -7], false) ,[-1, -5, -7]);
//追加テスト
// test(evenOrOdd([-1.5, -2, 4, -5, -7], false) ,[-5, -7]);


//課題２
// ここにコードを書きましょう
function findKeys(objects, target) {
  //return用の空配列作成  
  const resultTarget = [];

  for (const key in objects) {

    //objects[key]の値がtargetと一致した時に空配列にkey名を追加
    if (objects[key] === target) {
      resultTarget.push(key);
    }
  }

  return resultTarget;
}

findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

// test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
// test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);
//追加テスト
// test(findKeys({ a: 1, b: "2", c: 6, d: 4, e: 2 }, 2), ["e"]);


//課題３
// ここにコードを書きましょう
function buildObject(arrayKey, arrayValue) {
  //return用の空オブジェクト作成
  const resultObject = {};
  
  //keyの数だけ繰り返し
  for (let i = 0; i < arrayKey.length; i++) {    
    resultObject[arrayKey[i]] = arrayValue[i];
  }

  return resultObject;
}

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

// test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
// test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
// test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
// test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});


//課題４
// ここにコードを書きましょう
function add(baseNumber) {
  return addNumber => addNumber + baseNumber;
}

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

// test(addTwo(3), 5);
// test(addTwo(70), 72);

const addOneHundred = add(100);
addOneHundred(3); // 103

// test(addOneHundred(3), 103);


//課題５
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

/*
console.log(foo);の処理
fooの変数に入っている「sayHello();」が実行される
sayHello()関数内の「console.log("Hello");」が処理されて
コンソールログに"Hello"が表示される
return文がない為、sayHello()の結果としてundefinedが返ってくる
fooの変数にundefinedが代入され、console.log(foo)の結果としては
undefinedがコンソールログに表示される
console.log(bar);の処理
barの変数に入っている「sayHelloAndName("JavaScript");」が実行される
sayHelloAndName(name)関数の仮引数が「"JavaScript"」の為
returnとして「"Hello, JavaScript"」が返される
barの変数に「"Hello, JavaScript"」が代入され
console.log(bar)の結果としては"Hello, JavaScript"がコンソールログに表示される
予想結果
コンソールログに「"Hello"」「undefined」「"Hello, JavaScript"」の順に表示される
実行結果
予想通りでした！
*/


//課題６
//別ファイルで作成


//課題７
// ここにコードを書きましょう
function map(collection, callbackFunc) {
  //return用の空配列を作成
  const resultAddOneArray = [];

  //collectionが配列がオブジェクトかを判断する
  if (Array.isArray(collection)) {
    for (const num of collection) { //配列だったら
      resultAddOneArray.push(callbackFunc(num));
    }
  } else {
    for (const key in collection) { //オブジェクトだったら
      resultAddOneArray.push(callbackFunc(collection[key]));
    }
  }
  
  return resultAddOneArray;
}

function addOne(num) {
  return num + 1;
}

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

// test(map([1, 2, 3], addOne), [2, 3, 4]);
// test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);


//課題８
// ここにコードを書きましょう
function changeMiddle(sentence, changeWord) {
  //文章を切り出してそれぞれの単語を配列に格納
  const tempWordsArray = sentence.split(" ");

  //単語が偶数個の場合は置換しない
  if (tempWordsArray.length % 2 !== 0) {
    tempWordsArray[Math.floor(tempWordsArray.length / 2)] = changeWord;
  }

  //切り出した単語を半角スペースで繋げて結合
  return tempWordsArray.join(" ");

}

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

// test(changeMiddle("I like cats", "love"), "I love cats");
// test(changeMiddle("red green blue", "yellow"), "red yellow blue");
//追加テスト
// test(changeMiddle("I like cats too", "love"), "I like cats too");


//課題９
// ここにコードを書きましょう
function countSomething(somethingArray) {
  //各属性の値を格納する空配列を作成
  const typeOfCountArray = [];

  //各属性毎にfilterをかけ「string」「boolean」「number」の順で空配列に値を追加する
  const stringCount = (somethingArray.filter(element => typeof element === "string")).length;
  typeOfCountArray.push(stringCount);
  const boolCount = (somethingArray.filter(element => typeof element === "boolean")).length;
  typeOfCountArray.push(boolCount);
  const numberCount = (somethingArray.filter(element => typeof element === "number")).length;
  typeOfCountArray.push(numberCount);

  //配列の中で最大値があるインデックス番号を変数に格納
  const theMostType = typeOfCountArray.indexOf(Math.max(...typeOfCountArray));

  //変数の値に応じで処理を分岐（今回はswitch文を使ってみた）
  switch(theMostType) {
    case 0:
      return `STRING COUNT: ${stringCount}`;
    case 1:
      return `BOOL COUNT: ${boolCount}`;
    case 2:
      return `NUMBER COUNT: ${numberCount}`;
  }

}

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

// test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
// test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
// test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");


//課題１０
// ここにコードを書きましょう
function each(collection, callbackFunc) {

  //collectionが配列がオブジェクトかを判断する
  if (Array.isArray(collection)) {
    for (const num of collection) {
      callbackFunc(num);
    }
  } else {
    for (const key in collection) {
      callbackFunc(collection[key]);
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


//課題１１
// ここにコードを書きましょう
function compose(funcA, funcB) {
  return number => funcB(funcA(number));
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

// test(baz(5), 20); // 20
// test(baz(100), 210); // 210