'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//テスト関数
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



//問1

// ここにコードを書きましょう

function evenOrOdd(array, boolean){
  const resultOfEven = [];
  const resultOfOdd = [];
  for(const num of array){
    if(num % 2 === 0){
      resultOfEven.push(num);
    }else{
      resultOfOdd.push(num);
    }
  }
  if(boolean === true){
    return resultOfEven;
  }else{
    return resultOfOdd; 
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4])
test(evenOrOdd([0, 4, 36], false), [])
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7])

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

//問2
// ここにコードを書きましょう
function findKeys(obj, target){
  const resultOfArray = [];
  for(const key in obj){
    if(obj[key] === target){
      resultOfArray.push(key);
    }
  }
  return resultOfArray;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"])
test(findKeys({1: "h", b: "el", c: "hello", d: "hello", e: "o"},"hello"), ["c", "d"])

console.log(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2)); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

//問3
function buildObject(array1, array2){
 const resultOfObjct = {};
 for(let i = 0; i < array1.length; i++){
   resultOfObjct[array1[i]] = array2[i]  
 }
 return resultOfObjct;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3} )
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"})
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN})
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]})

console.log(buildObject(["a", "b", "c"], [1, 2, 3])); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
console.log(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]));  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//問4
// ここにコードを書きましょう

function add(x){
  return function(y){
    return x + y;
  }
}
    
const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72
console.log(addTwo(3))
    
const addOneHundred = add(100);
addOneHundred(3); // 103

test(addTwo(3), 5);
test(addOneHundred(3), 103);

//問5
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
// "答え : console.log(foo) => undefine , console.log(bar) => Hello, JavaScript"
// "理由 : 関数sayHelloはreturn文がないため、実行した際にundefinedが返ってくる。それに対し、関数sayHelloAndNameはreturn文が記載されているため、実行した際に、return文の中身が返ってくるから。"



//問7
// ここにコードを書きましょう
function map(arrayOrObject, func){
  const resultOfArray = [];
  if(Array.isArray(arrayOrObject)){
    for(const valueOfArray of arrayOrObject){
      resultOfArray.push(func(valueOfArray))
    }
  return resultOfArray
  }else{for(const key in arrayOrObject){
    resultOfArray.push(func(arrayOrObject[key]))
    }
  return resultOfArray
  }
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4])
test(map({ a: 1, b: 2, c: 3 }, addOne),[2, 3, 4])
map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]


//問8
// ここにコードを書きましょう
function changeMiddle(sentence, word){
  const array = sentence.split(" ");
  array[(array.length-1)/2] = word;
  console.log(array);
  const resultOfSentence = array.join(" ");
  console.log(resultOfSentence);
  return resultOfSentence;
}

test(changeMiddle("I like cats", "love"),  "I love cats");


console.log(changeMiddle("I like cats", "love")); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

//問9
function countSomething(array){
  const arrayOfString = [];
  const arrayOfBoor = [];
  const arrayOfNumber = [];
  const countArrayLength = [];
  for(const value of array){
    if(typeof value === "string"){
      arrayOfString.push(value);
    }else if(typeof value === "boolean"){
      arrayOfBoor.push(value);
    }else if(typeof value === "number"){
      arrayOfNumber.push(value);
    }
  }
  const lengthOfarrayOfString = arrayOfString.length
  const lengthOfarrayOfBoor = arrayOfBoor.length
  const lengthOfarrayOfNumber = arrayOfNumber.length
  console.log(arrayOfString.length)
  console.log(arrayOfString)
  countArrayLength.push(lengthOfarrayOfString)
  countArrayLength.push(lengthOfarrayOfBoor)
  countArrayLength.push(lengthOfarrayOfNumber)
  console.log(countArrayLength);
  const aryMax = function (a, b) {
    return Math.max(a, b);
  }
  const maxNumber = countArrayLength.reduce(aryMax)
  console.log(maxNumber);
  if(countArrayLength[0] === maxNumber){
    return `STRING COUNT: ${maxNumber}`
  }else if(countArrayLength[1] === maxNumber){
    return `BOOL COUNT: ${maxNumber}`
  }else{
    return `NUMBER COUNT: ${maxNumber}`
  }
}

test(countSomething(["a", "b", "c", true, false, 2]),"STRING COUNT: 3") // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4")
test(countSomething([true, true, 1, 0, 1, false, 1]),  "NUMBER COUNT: 4")


//問10
// ここにコードを書きましょう
function each(arrayOrObject,func){
  if(Array.isArray(arrayOrObject)){
    for(const value of arrayOrObject){
    func(value)
    }
  }else{ 
    for(const key in arrayOrObject){
    func(arrayOrObject[key]); 
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


//問11
// ここにコードを書きましょう
function compose(funcA, funcB){
  function funcC(x){
    return funcB(funcA(x))
  }
  return  funcC
  }
  
  function multiplyTwo(x) {
    return x * 2;
  }
  
  function addTen(x) {
    // return x + 10;C:\Users\1613479\Downloads\プログラミング\assesment-4\No.6.js
  }
  
  console.log(addTen(multiplyTwo(10)))
  



const baz = compose(multiplyTwo, addTen);
test(baz(5),20)
test(baz(100),210)
// test(baz(5), 20); // 20
// test(baz(100), 210); // 20
// baz(100); // 210