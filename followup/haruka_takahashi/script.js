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

/* 1.evenOrOdd という名前の関数を宣言してください。
この関数は引数として数値型の要素を持つ配列と、boolean を受け取ります。
boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列を返します。
*/

function evenOrOdd(numArr, isEven) {
  if(isEven) {
    return numArr.filter(num => num % 2 === 0);
  } else {
    // return numArr.filter(num => num % 2 === 1 || num % 2 === -1);
    return numArr.filter(num => Math.abs(num) % 2 === 1 || num % 2 === -1);
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]); 
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([0, 4, 36], true), [0, 4, 36]);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); 
test(evenOrOdd([-0, -2, 2, 5, -7], true), [-0, -2, 2]);

/* 2.findKeys という名前の関数を宣言してください。
この関数は引数としてオブジェクトと "target" (文字列または数値) を受け取り、オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。
*/

function findKeys(obj, target) {
  const resultArr = [];
  for(const key in obj) {
    if (obj[key] === target) {
      resultArr.push(key);
    }
  }
  return resultArr;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); 
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); 
test(findKeys({ 1: true, b: false, c: "hello", d: true, e: "o" }, true), ["1", "d"]); 

/* 3.buildObject という名前の関数を宣言してください。この関数は引数として 2 つの配列を受け取り、「オブジェクトを作る」というその名が示す通り新しいオブジェクトを作って返します。
リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、第二引数の配列の要素をオブジェクトの値として設定します。
*/

const buildObject = (keyarr, valueArr) => {
  const resultObj = {};
  for (let i = 0; i < keyarr.length; i++) {
    resultObj[keyarr[i]] = valueArr[i];
  }
  return resultObj;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]),  {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]),{"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}); 
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

/* 4.add という名前の関数を宣言してください。
この関数は引数として 1 つの数値 x を受け取り、関数を返します。
返された関数は引数として 1 つの数値 y を受けとり、'x' と 'y' の和を返します。
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
test(addOneHundred(3), 103);
test(addOneHundred(5), 105);

/* 5.以下のコードを実行すると、どの順番で何が表示されるでしょうか？
もちろん、コードを実行する前に答えてください。なぜそうなるのか、わからない場合はわかるまで調べましょう！
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
/*
Hello
undefined
Hello, JavaScript
上記の順でコンソールに表示される。
まず最初にSayHelloが実行され、コンソールに表示がされる。
次に、fooにSayHelloの関数を呼び出す式が宣言される
barに引数をJavasprictにしたsayHelloAndNameが呼び出される式が宣言される
fooがコンソールに表示されるが、sayHelloはreturn文がないため、返り値がなく、関数として呼びだした時はundefinedを返す。
最後にbarがコンソールに表示される
*/

/* 6はdig-project-random-colorに記入　*/

/* 7.関数 map を宣言してください。
この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
コレクション内の各要素に対してコールバック関数を実行した結果を要素に持つ新しい配列を返します。
コールバック関数は、コレクション内のすべての要素に適用されます。 
⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。
*/

function map(collection, func) {
  const resultArr = [];
  if (Array.isArray(collection)) {
    for (const value of collection) {
      resultArr.push(addOne(value));
    }
  } else {
    for (const key in collection) {
      resultArr.push(addOne(collection[key]));
    }
  }
  return resultArr;
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]); 
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); 

/* 8.関数 changeMiddle を宣言してください。
この関数は引数として「奇数個の単語からなる文字列(スペースで区切られる)」と「1 つの単語」を受け取り、
第 1 引数の真ん中の単語を第 2 引数の単語で置き換えた新しい文字列を返します。
*/

function changeMiddle(sentence, word) {
  const splitSentence = sentence.split(" ");
  splitSentence[1] = word;
  return splitSentence.join(" ");
}

test(changeMiddle("I like cats", "love"), "I love cats"); 
test(changeMiddle("red green blue", "yellow"), "red yellow blue");

/* 9.関数 countSomething を宣言してください。この関数は引数として数値・文字列・ブーリアンを要素にもつ配列を受け取ります。
要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を返してください。
"BOOL COUNT: x" (ブーリアンが最も多い場合) 
"STRING COUNT: x" (文字列が最も多い場合) 
"NUMBER COUNT: x" （数値が最も多い場合） 
※ x はその型の要素がが何回出現したかを表す。
*/

function countSomething(arr) {
  let bool = 0;
  let str = 0;
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "string" ) {
      str ++;
    } else if (typeof(arr[i]) === "boolean" ) {
      bool ++;
    } else if (typeof(arr[i]) === "number") {
      num ++;
    }
  }

  if (bool > str && bool > num) {
    return "BOOL COUNT: " + bool;
  } else if (str > bool && str > num) {
    return "STRING COUNT: " + str;
  } else if (num > bool && num > str) {
    return "NUMBER COUNT: " + num;
  } else if (bool === str && bool !== 0) {
    return `string & boolean is even: ` + bool; 
  } else if (num === str && num !== 0) {
    return `string & number is even: ` + num; 
  } else if (bool === num && bool !== 0) {
      return `boolean & number is even: ` + bool; 
  } else {
    return "No elements found in the array.";
  }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false]), `boolean & number is even: 3`);
test(countSomething([]), "No elements found in the array.");

/* 10.関数 each を宣言してください。
この関数は引数としてコレクション(オブジェクトまたは配列)とコールバック関数を受け取り、
コレクション内の各要素に対してコールバック関数を一度だけ実行してください。
この関数は何もリターンしません。 
⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。
*/

function each(collection, func) {
  switch (Array.isArray(collection)) {
    case true:
    for (const value of collection) {
      func(value);
    }
    break;
  default:
    for (const key in collection) {
      func(collection[key]);
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

/* 11.関数 compose を宣言してください。
この関数は引数として funcA と funcB という 2 つの関数を受け取り、新しい関数を返します。
返された関数は引数 x を受け取り、funcA に x を引数として渡して得られた戻り値を funcB に引数として渡し、得られた結果を返します。
*/

function compose(funcA, funcB) {
  return function (x) {
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
test(baz(5), 20);
test(baz(100),210);
test(baz(3),16);