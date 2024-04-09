'use strict'
// 1行目に記載している 'use strict' は削除しないでください


let a, b, c, d;

//1
// ここにコードを書きましょう
function evenOrOdd(numArray, isOdd) {
    const resultArray = [];
    for (const num of numArray) {
        if (isOdd) {
            if (num % 2 === 0) {
                resultArray.push(num);
            }
        } else {
            if (Math.abs(num % 2) === 1) {
                resultArray.push(num);
            }
        }
    }
    return resultArray;
}

a = evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
b = evenOrOdd([0, 4, 36], false); // []
c = evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]
console.log(a, b, c)

//2
// ここにコードを書きましょう
function findKeys(obj, value) {
    const resultArray = [];
    for (const key in obj) {
        if (obj[key] === value) {
            resultArray.push(key);
        }
    }
    return resultArray;
}

a = findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
b = findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

console.log(a, b);

//3
// ここにコードを書きましょう
function buildObject(keyArray, valueArray) {
    const resultObj = {};
    for (let i = 0; i < keyArray.length; i++) {
        resultObj[keyArray[i]] = valueArray[i];
    }
    return resultObj;
}

a = buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
b = buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
c = buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
d = buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}
console.log(a, b, c, d);

//4
// ここにコードを書きましょう
function add(x) {
    return function (y) {
        return x + y;
    }
}

const addTwo = add(2);
a = addTwo(3); // 5
b = addTwo(70); // 72

const addOneHundred = add(100);
c = addOneHundred(3); // 103
console.log(a, b, c);

//5
function sayHello() { //1
  console.log("Hello"); //2
}

function sayHelloAndName(name) { //3
  return "Hello, " + name;  //4
}

const foo = sayHello(); //5
const bar = sayHelloAndName("JavaScript"); //6

console.log(foo); //7
console.log(bar); //8


// あなたの回答と、なぜそうなるのかの説明をここに記載してください
// ★Hello, undefined, Hello, JavaScriptの順番に表示される。理由は提出フォームに記入した。
// 1. functionでsayHelloが実行される。
// 2. consoleにHelloが表示される。★
// 3. functionでsayHelloAndNameが実行される。
// 4. returnで"Hello, " + nameとなる。
// 5. simpleHello()の返り値undefinedがfooに代入される。
// 6. sayHelloAndNameの返り値Hello, JavaScriptが代入される。
// 7. console.log(foo)でconsoleにundefinedが表示される。★
// 8. console.log(bar)でconsoleにHello, JavaScriptが表示される。★

//6

//7
// ここにコードを書きましょう
function map(obj,func){
    const resultArray = [];
    if(Array.isArray(obj)){
        for(const value of obj){
            resultArray.push(func(value));
        }
    }else{
        for(const key in obj){
            resultArray.push(func(obj[key]));
        }
    }
    return resultArray;
}

function addOne(num) {
    return num + 1;
}
a=map([1, 2, 3], addOne); // [2, 3, 4]
b=map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]
console.log(a,b);

//8
// ここにコードを書きましょう
function changeMiddle(sentence, word){
    const wordArray = sentence.split(" ");
    wordArray[1]=word;
    return wordArray.join(" ");
}

a=changeMiddle("I like cats", "love"); // "I love cats"
b=changeMiddle("red green blue", "yellow"); // "red yellow blue"
console.log(a,b);

//9
// ここにコードを書きましょう
function countSomething(array){
    let boolCounter=0;
    let stringCounter=0;
    let numberCounter=0;
    for(const e of array){
        if(typeof e === "boolean"){
            boolCounter++
        }else if(typeof e === "string"){
            stringCounter++;
        }else if(typeof e === "number"){
            numberCounter++;
        }
    }
    if(boolCounter>=stringCounter && boolCounter >= numberCounter){
        return "BOOL COUNT: " + boolCounter;
    }else if(stringCounter >= numberCounter){
        return "STRING COUNT: " + stringCounter;
    }else{
        return "NUMBER COUNT: " + numberCounter;
    }
}

a=countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
b=countSomething([true, true, false, true]); // "BOOL COUNT: 4"
c=countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"
console.log(a,b,c);

//10
// ここにコードを書きましょう
function each(obj,func){
    if(Array.isArray(obj)){
        for(const e of obj) func(e);
    }else{
        for(const key in obj) func(obj[key]);
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

//11
// ここにコードを書きましょう
function compose(funcA,funcB){
    return function(x){
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
  a=baz(5); // 20
  b=baz(100); // 210
  console.log(a,b);