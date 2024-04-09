'use strict'

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}
/* 課題1)evenOrOdd という名前の関数を宣言してください。この関数は引数として数値型の
要素を持つ配列と、boolean を受け取ります。boolean が true の場合は、偶数のみの
配列を返し、 false の場合は、奇数のみの配列を返します。 */
// ここにコードを書きましょう

function evenOrOdd (array,bool){
  const result = [];
  if (bool === true) {
    for (const even of array) {
      if (even % 2 === 0){
        result.push(even);
      }
    }
    return result;
  }
  if (bool === false) {
    for (const odd of array) {
      if (odd % 2 !== 0){
        result.push(odd);
      }
    }
    // console.log(result);
    return result;
  }
}

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

test(evenOrOdd([1,2,3,4,5], true),[2,4]);
test(evenOrOdd([0, 4, 36], false),[]);
test(evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7]);






/* 課題2)findKeys という名前の関数を宣言してください。この関数は引数としてオブジェクトと
 "target" (文字列または数値) を受け取り、オブジェクト中、ターゲットにマッチする値を持つ
 全てのキーを含む新しい配列を返します。 */
// ここにコードを書きましょう
function findKeys (obj,target) {
  const result = [];
  const keys = Object.keys(obj);
  for (const key of keys){
    if (obj[key] === target){
      result.push(key);
    }
  }
  // console.log(result);
  return result;
}
findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"]);







/* 課題3)buildObject という名前の関数を宣言してください。この関数は引数として 2 つの配列を
受け取り、「オブジェクトを作る」というその名が示す通り新しいオブジェクトを作って返します。
リターンするオブジェクトは、第一引数の配列の要素をオブジェクトのキーとして設定し、第二引数の
配列の要素をオブジェクトの値として設定します。 */
// ここにコードを書きましょう
function buildObject (array1,array2){
  const result = {};
  for (let i = 0; i < array1.length; i++){
    const key = array1[i];
    const value = array2[i];
      result[key] = value;
    }
  // console.log(result);
  return result;
}

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

test(buildObject(["a", "b", "c"], [1, 2, 3]),{"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]),{"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]),{"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]),{"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]})







/*課題4) add という名前の関数を宣言してください。この関数は引数として 1 つの数値 x を受け取り、
関数を返します。返された関数は引数として 1 つの数値 y を受けとり、'x' と 'y' の和を返します。 */
// ここにコードを書きましょう
function add (num){
  return function addTwo(value){
    let sum = 0;
    return sum = value + num;
  }
}

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

const addOneHundred = add(100);
addOneHundred(3); // 103

test(addTwo(3),5);
test(addTwo(70),72);
test(addOneHundred(3),103)







/* 課題5)以下のコードを実行すると、どの順番で何が表示されるでしょうか？もちろん、
コードを実行する前に答えてください。なぜそうなるのか、わからない場合はわかるまで
調べましょう！ */

// function sayHello() {
//   console.log("Hello");
// }
// function sayHelloAndName(name) {
//   return "Hello, " + name;
// }
// const foo = sayHello();
// const bar = sayHelloAndName("JavaScript");
// console.log(foo);
// console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
//コンソール表示順は①console.log("Hello");⇒②console.log(foo);⇒③console.log(bar);となる
//①）Hello ⇒ console.log(foo);で変数foo内のsayHello()が呼出され関数内のconsole.log("Hello");でHelloを返す
//②）undefined ⇒ sayHello()実行時にreturn分が無いので返値が出せず、console.log(foo)の実行結果としてはundifinedを返す
//③）Hello, JavaScript ⇒ console.log(foo);でsayHelloAndName()が実行されてHello, JavaScriptが返される






/* 課題6)クリックしたらページの色が変わるボタンを作りましょう。色はボタンを
クリックするたびにランダムで決まります。これが完成イメージです。 */





/* 課題7)関数 map を宣言してください。この関数は引数としてコレクション(オブジェクトまたは配列)と
コールバック関数を受け取り、コレクション内の各要素に対してコールバック関数を実行した結果を要素に
持つ新しい配列を返します。コールバック関数は、コレクション内のすべての要素に適用されます。 
⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は使用しないでください。 */
// ここにコードを書きましょう
const addOne = function(num){
  return num + 1;
}
function map (collection,callBackFunc){
  const result = [];
 
  if (Array.isArray(collection)){
    for (const value of collection){
      result .push(callBackFunc(value));
    }
  }else{
    for (const key in collection ){
      result .push(callBackFunc(collection[key]));
    }
  }
  return result;
}

// function addOne(num) {
//   return num + 1;
// }

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

test(map([1, 2, 3], addOne),[2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne),[2, 3, 4]);









/* 課題8)関数 changeMiddle を宣言してください。この関数は引数として「奇数個の単語からなる
文字列(スペースで区切られる)」と「1 つの単語」を受け取り、第 1 引数の真ん中の単語を第 2 引数の
単語で置き換えた新しい文字列を返します。 */
// ここにコードを書きましょう
function changeMiddle(str1,str2){
  const str = str1;
  const arr = str.split(' ');
  arr[1] = str2;
  // console.log(arr.toString());
  return arr.join(' ');
}

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

test(changeMiddle("I like cats", "love"),"I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");









/* 課題9)関数 countSomething を宣言してください。この関数は引数として数値・文字列・ブーリアンを
要素にもつ配列を受け取ります。要素の登場回数が最も多い型をチェックし、以下のいずれかの文字列を
返してください。"BOOL COUNT: x" (ブーリアンが最も多い場合) "STRING COUNT: x" (文字列が最も多い場合) 
"NUMBER COUNT: x" （数値が最も多い場合） ※ x はその型の要素がが何回出現したかを表す。 */
// ここにコードを書きましょう
function countSomething(arr){
  let result ;
  let countString = 0;
  let countBool = 0;
  let countNumber = 0;

  for (const element of arr){
    if(typeof element === "string"){
      countString += 1;
    }
    if(typeof element === "boolean"){
      countBool += 1;
    }
    if(typeof element === "number"){
      countNumber += 1;
    }
    // console.log(countString);
    // console.log(countBool);
    // console.log(countNumber);
  }
  if (countString > countBool){
    result = `STRING COUNT: ${countString}`
  }else if (countBool > countNumber){
    result = `BOOL COUNT: ${countBool}`
  }else{
    result = `NUMBER COUNT: ${countNumber}`;
  }
  return result;

}

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]),"BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]),"NUMBER COUNT: 4");





/* 課題10)関数 each を宣言してください。この関数は引数としてコレクション(オブジェクトまたは配列)
とコールバック関数を受け取り、コレクション内の各要素に対してコールバック関数を一度だけ実行して
ください。この関数は何もリターンしません。 ⚠️ 注意：ビルトインメソッド (.forEach(), .map()) は
使用しないでください。 */
// ここにコードを書きましょう
function each (collection,callBackFunction){
  if (Array .isArray(collection) === false){
    for (const key in collection){
      callBackFunction(collection[key]);
    }
  }else{
    for (const value of collection){
      callBackFunction(value);
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









/* 課題11)関数 compose を宣言してください。この関数は引数として funcA と funcB という 2 つの
関数を受け取り、新しい関数を返します。返された関数は引数 x を受け取り、funcA に x を引数として
渡して得られた戻り値を funcB に引数として渡し、得られた結果を返します。 */
// ここにコードを書きましょう 
function compose (funcA, funcB){
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
baz(5); // 20
baz(100); // 210

test (baz(5),20);
test (baz(100),210);