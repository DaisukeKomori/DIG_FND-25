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

//1

function evenOrOdd(array, boolean) {
  if (Array.isArray(array) && typeof boolean === "boolean") {
    if(boolean) {
      return array.filter(num => Math.abs(num % 2) === 0);
    } else {
      return array.filter(num => Math.abs(num % 2) === 1);
    }
  } 
}

test(evenOrOdd([1, 2, 3, 4, 5], true),[2, 4]); 
test(evenOrOdd([0, 4, 36], false),[]);
test(evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7]);
test(evenOrOdd([4, 7, 18, 22, 50],true),[4, 18, 22, 50]);
test(evenOrOdd([-3, -5, 3, -20 ,-59],false),[-3, -5, 3, -59]);
test(evenOrOdd([0, -4, -1, 2, 5, 7],true),[0, -4, 2]);
test(evenOrOdd([5, 17, 23, 55, 91],true),[]);
test(evenOrOdd([102, 204, 405, 629, 999],false),[405, 629, 999]);


//2

function findKeys(obj, target) {
  const result = [];
  if (typeof obj === "object") {
    for (const key in obj) {
      if (obj[key] === target) {
        result.push(key);
      }
    }
    return result;
  }
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"]);
test(findKeys({ h: "apple", i: "banana", j: "orange", k: "apple", l: "grape", m: "apple"}, "apple"),["h", "k", "m"]);
test(findKeys({ 5: "a", 7: 9, 10: "b", 15: 9},9),["7", "15"])
test(findKeys({ num1: 3, num2: 7, num3: 3, num4: 12}, 3),["num1", "num3"]);
test(findKeys({ 5: true, 6: false, 7: true, 8:true}, true),["5", "7", "8"])
test(findKeys({ v: 2857, w: 2876, x: 1592, y: 9163, z:5982}, 2876),["w"])


//3

function buildObject(array1, array2) {
  const result = {};
  if (Array.isArray(array1) && Array.isArray(array2)) {
    for (let i = 0; i < array1.length; i++) {
      result[array1[i]] = array2[i];
    }
    return result;
  }
}

test(buildObject(["a", "b", "c"], [1, 2, 3]),{"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]),{"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]),{"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]),{"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});
test(buildObject(["car", "bike", "bicycle"], ["車", "バイク", "自転車"]),{"car": "車", "bike": "バイク", "bicycle": "自転車"});
test(buildObject(["March", "April", "May", "June"], [false, true, false, true]),{"March": false, "April": true, "May":false, "June":true});
test(buildObject([1, 2, 3], [undefined, "Z", "DIG"]),{1: undefined, 2:"Z", 3:"DIG"});


//4

function add(x) {
  if (typeof x === "number") {
    return y => x + y;
  }
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);
test(addTwo(120), 122);
test(addTwo(156), 158);

const addOneHundred = add(100);
test(addOneHundred(3), 103);
test(addOneHundred(15), 115);
test(addOneHundred(123), 223);

const addFifty = add(50);
test(addFifty(20), 70);
test(addFifty(100), 150);
test(addFifty(-20), 30);

const addOnethousand = add(1000);
test(addOnethousand(5), 1005);
test(addOnethousand(0), 1000);
test(addOnethousand(40), 1040);


//7

function map(obj, func) {
  const result = [];
  let temporaryArray = obj;
  if (typeof obj === "object") {
    if (!Array.isArray(obj)) {
      temporaryArray = Object.values(obj);
    }
    for (const num of temporaryArray) {
      result.push(func(num));
    }
    return result;
  }
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);
test(map([10, 25, 40], addOne), [11, 26, 41]);
test(map({ 1: 5, 2: 14, 3: 22 }, addOne), [6, 15, 23]);
test(map([0, -5, 17], addOne), [1, -4, 18]);
test(map({ A: 78, B: 55, D: 91}, addOne), [79, 56, 92]);


//8

function changeMiddle(sentence, replaceWord) {
  if(typeof sentence === "string" && typeof replaceWord === "string") {
    const splitSentence = sentence.split(" ");
    splitSentence[(splitSentence.length - 1) / 2] = replaceWord;
    return splitSentence.toString().replaceAll(",", " ");
  }
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");
test(changeMiddle("dog cat bird horse monkey", "tiger"), "dog cat tiger horse monkey");
test(changeMiddle("1 2 3 4 5 6 7", "9"), "1 2 3 9 5 6 7");
test(changeMiddle("January February March", "April"), "January April March");


//9

function countSomething(array) {
  const temporaryArray = [];
  const typeArray = ["STRING COUNT: ", "BOOL COUNT: ", "NUMBER COUNT: "];
  if(typeof array === "object") {
    temporaryArray.push(array.filter(value => typeof value === "string").length);
    temporaryArray.push(array.filter(value => typeof value === "boolean").length);
    temporaryArray.push(array.filter(value => typeof value === "number").length);
    const max = Math.max(...temporaryArray);
    return typeArray[temporaryArray.indexOf(max)] + max;
  }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");
test(countSomething(["X", false, 3, "Y", 6, "Z"]), "STRING COUNT: 3");
test(countSomething([true, false, "true", true, "false", false]), "BOOL COUNT: 4");
test(countSomething(["5", 10, 55, "32", 99]), "NUMBER COUNT: 3");


//10

function takeOut(obj) {
  for (const num of obj) {
    console.log(num);
  }
}

function each(obj, func) {
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      func(obj);
    } else {
      func(Object.values(obj));
    }
  }
}

each({ a: 1, b: 2, c: 3 }, takeOut); //1 2 3
each([4, 5, 6], takeOut); // 4 5 6
each({ A: "A", B: "B", C: "C"}, takeOut); //A B C
each([100, 200, 300], takeOut); //100 200 300
each({ 1: true, 2: false, 3: 0, 4: 5, 5: 10}, takeOut); //true false 0 5 10
each([-100, -50, 20, 70, 1000], takeOut); //-100 -50 20 70 1000

//11

function compose(funcA, funcB) {
  return x => funcB(funcA(x));
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
test(baz(70), 150);
test(baz(-5), 0);
test(baz(1000), 2010);
test(baz(-100), -190);
test(baz(500), 1010);