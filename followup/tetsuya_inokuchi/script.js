'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

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

//   1

// evenOrOdd という名前の関数を宣言してください。
// この関数は引数として数値型の要素を持つ配列と、
// boolean を受け取ります。
// boolean が true の場合は、偶数のみの配列を返し、 
// false の場合は、奇数のみの配列を返します。


const evenOrOdd = (arrayNumber,bool) =>  bool ?  arrayNumber.filter(num => num % 2 === 0):
                                                 arrayNumber.filter(num => num % 2 !== 0);

test(evenOrOdd([1, 2, 3, 4, 5], true),[2, 4]);
test(evenOrOdd([0, 4, 36], false),[]);
test(evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7]);

//   2

// findKeys という名前の関数を宣言してください。
// この関数は引数としてオブジェクトと "target" (文字列または数値) を受け取り、
// オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返します。


const findKeys = function (obj, target) {
  return Object.keys(obj).filter(key => obj[key] === target)
}


test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);

//   3

// buildObject という名前の関数を宣言してください。この関数は引数として 2 つの配列を受け取り、
// 「オブジェクトを作る」というその名が示す通り新しいオブジェクトを作って返します。
// リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、
// 第二引数の配列の要素をオブジェクトの値として設定します。

// ここにコードを書きましょう
function buildObject(array1, array2) {
  let count = 0;
  const result = {};
  for (const key of array1) {
    result[key] = array2[count];
    count ++; 
  }
  return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

//   4

// add という名前の関数を宣言してください。
// この関数は引数として 1 つの数値 x を受け取り、関数を返します。
// 返された関数は引数として 1 つの数値 y を受けとり、'x' と 'y' の和を返します。


const add = x => {
  function func(y){
    return x + y;
  }
  return func;
};

const addTwo = add(2);
test(addTwo(3),5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);

//   5

// 以下のコードを実行すると、どの順番で何が表示されるでしょうか？
// もちろん、コードを実行する前に答えてください。
// なぜそうなるのか、わからない場合はわかるまで調べましょう！

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
//  *********  回答 ******************
//  コンソールには"Hello"と"undefined"と"Hello, JavaScript"が表示される。

// **********  説明 ******************
// sayHello()関数は呼出されると副作用効果としてconsole.log("Hello")実行結果としてHelloが表示される。
// しかし、returnが無いのでundefinedがfooに代入される。
// sayHelloAndName("JavaScript")関数は呼出されると"Hello, "に仮引数nameに格納された文字"JavaScript"を加えた
// 文字列"Hello, JavaScript"が返り値となり、barに代入される。
// console.log(foo)が実行されるとfooの中身であるundefinedが表示される。
// 最後にconsole.log(bar);で返り値である"Hello, JavaScript"が表示される。

//   6 

// クリックしたらページの色が変わるボタンを作りましょう。色はボタンをクリックするたびにランダムで決まります。
// これが完成イメージです。

//  script.jsを別ファイルで提出(その他ファイルには変更無し)

//   7

// 関数 map を宣言してください。
// この関数は引数としてコレクション(オブジェクトまたは配列)と
// コールバック関数を受け取り、コレクション内の各要素に対して
// コールバック関数を実行した結果を要素に持つ新しい配列を返します。
// コールバック関数は、コレクション内のすべての要素に適用されます。 
// ⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。


function map(collection, func) {
  let result = [];
  if(Array.isArray(collection)) {
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

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

//   8

// 関数 changeMiddle を宣言してください。
// この関数は引数として「奇数個の単語からなる文字列(スペースで区切られる)」と
// 「1 つの単語」を受け取り、第 1 引数の真ん中の単語を第 2 引数の単語で置き換えた
// 新しい文字列を返します


function changeMiddle(sentence, word) {
  const divSentence = sentence.split(" ");
  const centerIndex = Math.floor(divSentence.length / 2);
  divSentence.splice(centerIndex, 1, word);
  return divSentence.join(" ");
}


test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");

//   9

// 関数 countSomething を宣言してください。
// この関数は引数として数値・文字列・ブーリアンを要素にもつ配列を受け取ります。
// 要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を返してください。
// "BOOL COUNT: x" (ブーリアンが最も多い場合) 
// "STRING COUNT: x" (文字列が最も多い場合) 
// "NUMBER COUNT: x" （数値が最も多い場合） 
// ※ x はその型の要素がが何回出現したかを表す。


function countSomething(array) {
  const count = {string: 0, boolean: 0, number: 0};   

  array.forEach(element => count[typeof element] ++);

  const maxCount = Math.max(count.string, count.boolean, count.number);

  let nameOfKey;
  if (count.string === maxCount) {
    nameOfKey = "STRING";
  } else if (count.boolean === maxCount) {
    nameOfKey = "BOOL";
  } else if (count.number === maxCount) {
    nameOfKey = "NUMBER";
  }
  return `${nameOfKey} COUNT: ${maxCount}`;
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

//   10

// 関数 each を宣言してください。
// この関数は引数としてコレクション(オブジェクトまたは配列)と
// コールバック関数を受け取り、コレクション内の各要素に対してコールバック関数を
// 一度だけ実行してください。この関数は何もリターンしません。 
// ⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。


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

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6

//   11

// 関数 compose を宣言してください。
// この関数は引数として funcA と funcB という 2 つの関数を受け取り、
// 新しい関数を返します。返された関数は引数 x を受け取り、
// funcA に x を引数として渡して得られた戻り値を funcB に引数として渡し、
// 得られた結果を返します。

// ここにコードを書きましょう
function compose(funcA, funcB){
  function newFunc(x){
    return funcB(funcA(x));
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
test(baz(5), 20);
test(baz(100), 210);