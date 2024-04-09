'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//---------------------------------------------------1--------------------------------------------------------
function evenOrOdd(numArr, boolean) {
    if(boolean === true) {
        return numArr.filter((num) => num % 2 === 0)
    } else {
        return numArr.filter((num) => num % 2 === 1 || (num * -1) % 2 === 1)
    }
}
evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

//----------------------------------------------------2--------------------------------------------------------
function findKeys(obj, target) {
    let newArray = [];
    for (const key in obj) {
        if(obj[key] === target) {
            newArray.push(key);
        }
    }
    // console.log(newArray);
    return newArray;
}
findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

//----------------------------------------------------3--------------------------------------------------------
function buildObject(arr1, arr2) {
    let newObj = {};
    let i = 0;
    for(const key of arr1) {
        newObj[key] = arr2[i];
        i++;
    }
    return newObj;
}
buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//------------------------------------------------------4-------------------------------------------------------
function add(x) {
    return function(y) {
        return x + y;
    };
}
const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

const addOneHundred = add(100);
addOneHundred(3); // 103

////------------------------------------------------------5----------------------------------------------------------
//  function sayHello() {
//      console.log("Hello");
//    }
  
//    function sayHelloAndName(name) {
//      return "Hello, " + name;
//    }
  
//    const foo = sayHello();
//    const bar = sayHelloAndName("JavaScript");
  
//    console.log(foo);
//    console.log(bar);
  
//  あなたの回答と、なぜそうなるのかの説明をここに記載してください
  
//  console.log("Hello"); //"Hello"が表示される
//  console.log(foo);　//undefinedが表示される
//  console.log(bar); //"Hello, JavaScript"が表示される
//  fooには、sayHello()が定義されているが、sayHello()はconsole.log("Hello")を表示させているだけで返り値がないので、undefinedが表示される
//  barには、sayHelloAndName(name)が定義されていて、returnで"Hello, " + name;の返り値があるので、"JavaScript"の仮引数が入って"Hello, JavaScript"が表示される

//------------------------------------------------------7-----------------------------------------------------------------
function map(item, callback) {
    let result = [];

    // 配列の場合
    if (Array.isArray(item)) {
        for (let i = 0; i < item.length; i++) {
            result.push(callback(item[i]));
            // console.log(item[i]);
        }
    }
    else if (typeof item === 'object') {
        for (let key in item) {
            result.push(callback(item[key]));
            // console.log(item[key]);
        }
    }
    // console.log(result);
    return result;
}
function addOne(num) {  //callbackされる内容
    return num + 1;
  }
map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

//----------------------------------------------------8--------------------------------------------------------------------
function changeMiddle(word, str) {
    const words = word.split(" ");
    const centerWord = Math.floor(words.length / 2);  //中央値を求める式
    words[centerWord] = str;  //strに置き換える
    return words.join(" ");  //wordsの要素が" "で結合されて一つの文字列になる
}
changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

// ------------------------------------------------------9--------------------------------------------------------------------
function countSomething(arr) {
    let stringCount = 0;
    let boolCount = 0;
    let numberCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            stringCount++;
        } else if (typeof arr[i] === 'boolean') {
            boolCount++;
        } else if (typeof arr[i] === 'number') {
            numberCount++;
        }
    }
let max = Math.max(stringCount, boolCount, numberCount);
let result = "";
    if(max === stringCount) {
        result = "STRING COUNT: " + stringCount;
    } else if (max === boolCount) {
        result = "BOOL COUNT: " + boolCount;
    } else if (max === numberCount) {
        result = "NUMBER COUNT: " + numberCount;
    }
    // console.log(result);
    return result;
}

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

//-------------------------------------------------------10---------------------------------------------------------------------
function each(colection, callback) {
    for (const num of Object.values(colection)) {  //Object.valuesは配列かオブジェクトかに関係なく値を取得できるもの
        callback(num);
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

// -----------------------------------------------------------11--------------------------------------------------------------------
function compose(funcA, funcB) {
    function newFunc(x) {
        let resultA = funcA(x);
        let resultB = funcB(resultA);
        // console.log(resultB);
        return resultB;
    }
    return newFunc;
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