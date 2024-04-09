'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ここにコードを書きましょう

/**
 * 課題1 evenOrOdd
 * @param {array} numArray
 * @param {boolean} flag
 * @return {any} boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列を返します。
 */

function evenOrOdd(numArray, flag) {
    const result = [];
    if(flag === true) {
        result.push(numArray.filter((num) => num % 2 === 0));
    } else {
        result.push(numArray.filter((num) => num % 2 !== 0));
    }
    return console.log(result);
}

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]


/**
 * 課題2 findKeys
 * @param {object} obj
 * @param {number or string} target
 * @return {any} オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。
 */

function findKeys(obj, target) {
    const array = [];
    array.push(Object.keys(obj).filter(key => obj[key] === target));
    return console.log(array);
}

findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

/**
 * 課題3 buildObject
 * @param {array} array1
 * @param {array} array2
 * @returns {any} 第一引数の配列の要素をオブジェクトのキーとして設定し、第二引数の配列の要素をオブジェクトの値として設定します。
 */

function buildObject(array1, array2) {
    const result = array2.reduce((accumulator, currentValue, index) => {accumulator[array1[index]] = currentValue; return accumulator;}, {});
    console.log(result);
}

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}


/**
 * 課題4 add
 * @param {number} x
 * @param {number} y
 * @return {any} 関数を返します。返された関数は引数として 1 つの数値 y を受けとり、'x' と 'y' の和を返します。
 */

function add(x) {
    return function(y) {
        console.log(x + y);
    };
}

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

const addOneHundred = add(100);
addOneHundred(3); // 103

/**
 * 課題5 sayHello
 */

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
// 変数fooに代入された関数sayHelloが実行され、関数の中身によってHelloが表示される。しかし、返り値がないため関数の実行結果としてはundefinedとなる。変数barに代入された関数sayHelloAndNameが実行されreturn文の内容としてHello,Javascriptが表示される。


/**
 * 課題7 map
 * @param {object} objOrArray
 * @param {function} func
 * @return {any} コレクション内の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返します。
 */

function map(objOrArray, func) {
    const result = [];
    // console.log(objOrArray.length);
    if(objOrArray.length === undefined) {
        const obj = Object.keys(objOrArray);
        // console.log(obj);
        for (let i = 0, len = obj.length; i < len; i++) {
            result.push(func(objOrArray[obj[i]]));
        };
    } else {
        for (let i = 0, len = objOrArray.length; i < len; i++) {
            result.push(func(objOrArray[i]));
        };
    };
    return console.log(result);
}

function addOne(num) {
    return num + 1;
}

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

/**
 * 課題8 changeMiddle
 * @param {string} message
 * @param {string} word
 * @return {any} 第 1 引数の真ん中の単語を第 2 引数の単語で置き換えた新しい文字列を返します。
 */

function changeMiddle(message, word) {
    let str = message.split(" ");
    let length = (str.length / 2) - 0.5;
    // console.log(length);
    return console.log(message.replace(str[length], word));
}

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

/**
 * 課題9 countSomething
 * @param {array} array
 * @return {any} 要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を返してください。"BOOL COUNT: x" (ブーリアンが最も多い場合) "STRING COUNT: x" (文字列が最も多い場合) "NUMBER COUNT: x" （数値が最も多い場合） ※ x はその型の要素がが何回出現したかを表す。
 */

function countSomething(array) {
    let result;
    let countOfString = 0;
    let countOfBool = 0;
    let countOfNum = 0;
    array.forEach((element) => typeof element === "string" ? countOfString++: countOfString);
    array.forEach((element) => typeof element === "boolean" ? countOfBool++: countOfBool);
    array.forEach((element) => typeof element === "number" ? countOfNum++: countOfNum);
    if(countOfString > countOfBool && countOfString > countOfNum) {
        result = `STRING COUNT: ${countOfString}`;
    } else if(countOfBool > countOfString && countOfBool > countOfNum) {
        result = `BOOL COUNT: ${countOfBool}`;
    } else if(countOfNum > countOfString && countOfNum > countOfBool) {
        result = `NUMBER COUNT: ${countOfNum}`;
    }
    return console.log(result);
}

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"


/**
 * 課題10 each
 * @param {object} objOrArray
 * @param {function} callback
 * @return {any} コレクション内の各要素に対してコールバック関数を一度だけ実行してください。この関数は何もリターンしません。
 */

function each(objOrArray, callback) {
    if(objOrArray.length === undefined) {
        const obj = Object.keys(objOrArray);
        for (let i = 0, len = obj.length; i < len; i++) {
            callback(objOrArray[obj[i]]);
        };
    } else {
        for (let i = 0, len = objOrArray.length; i < len; i++) {
            callback(objOrArray[i]);
        };
    };
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
 * 課題11 compose
 * @param {function} funcA
 * @param {function} funcB
 * @return {any} 新しい関数を返します。返された関数は引数 x を受け取り、funcA に x を引数として渡して得られた戻り値を funcB に引数として渡し、得られた結果を返します。
 */

function compose(funcA, funcB) {
    return console.log(funcB(funcA()));
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