// *** ryouma hiraike ***

// //TDD
// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// //1 関数 sayHelloToFriends を宣言してください。
// /**
//  * @param {Array<string>} nameOfArr - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends (nameOfArr){
//   let helloFriend = [];
//   for(const name of nameOfArr){
//     helloFriend.push("Hello, " + name + "!");
//   }
//   return helloFriend;
// }
// console.log("課題1");
// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// // アドバイス： 新たに作成した 文字列（例： "Hello, Mario!"）を、返り値となる新しい配列に追加しましょう。
// // 以下のテストではこれらの変数を使用します。

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// //2 関数 filterObjectForStrings を宣言してください。
// // /**
// //  * @param {object} オブジェクト
// //  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
// //  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   let result = {};
//   for (const key in object){
//     if (typeof object[key] === "string"){
//       result[key] = object[key];
//     }
//   }
//   return result;
// }
// console.log("課題2");
// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //3 関数 filterArrayForStrings を宣言してください。この関数内で、2 問目で作った関数 filterObjectForStrings を使いましょう。
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   let resultOfObje = [];
//   for (const object of arrayOfObjects){
//   resultOfObje.push(filterObjectForStrings(object));
//     // どこかで関数 `filterObjectForStrings` を呼びましょう
//   }
//   return resultOfObje;
// }

// console.log("課題3");
// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// //4 以下のコードを実行する前に何が表示されるか予想してみましょう。
// //その後、コードを実行して予想が合っていたかどうかを確認してください。
// //なぜこのような結果になるのか理由を説明してください。
// const names = ["いち", "に", "さん", "よん"];

// // for (let i = 0; i < 4; i++) {
// //   for (let j = 0; j < names.length; j++) {
// //     for (let k = 1; k < 3; k++) {
// //     console.log(names[j]);
// //     }
// //   }
// // }

// //=>{"いち"x2, "に"x2, "さん"x2, "よん"x2}を4回繰り返す。

// //5　以下のコードは、複数のネストされたブロック内で同じ変数名 i を使用しています。
// //コードを実行する前に何が表示されるか予想しましょう。
// //その後、コードを実行して予想が合っていたかどうかを確認してください。なぜこのような結果になるのか理由を説明してください。
// // for (let i = 0; i < 2; i++) {
// //   console.log("a: " + i);
// //   for (let i = 0; i < 2; i++) {
// //     console.log("b: " + i);
// //     for (let i = 0; i < 2; i++) {
// // 　    console.log("c: " + i);
// //     }
// //   }
// // }

// /*=>101の一周目
// 　　a:0
//      103の一周目
//      b:0
//       105の一周目 
// 　    c:0
// 　　　　105の2周目
//       c:1
//     103の2周目
//     　b:1
//       105の一周目 
// 　    c:0、
// 　　　　105の2周目
//       c:1
//    101の2周目
// 　　a:1
//      103の一周目
//      b:0
//       105の一周目 
// 　    c:0
// 　　　　105の2周目
//       c:1
//     103の2周目
//     　b:1
//       105の一周目 
// 　    c:0、
// 　　　　105の2周目
//       c:1
//   */


// *** yasushi suzuki ***

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }


// //問1
// /**
// * @param {Array<string>} ??? - 友達の名前が入った配列
// * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
// */
// // ここにコードを書きましょう


// function sayHelloToFriends(arrayOfName){
//   const newArray = [];
//   for(let i = 0; i < arrayOfName.length; i++){
//       newArray.push(`Hello, ${arrayOfName[i]}!` );
//   }
//   return newArray;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// //問2

// /**
// * @param {object} オブジェクト
// * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
// */
// function filterObjectForStrings(object) {
//   const newObject = {};
//   for(const key in object){
//       if(typeof object[key] === "string"){
//           newObject[key] = object[key];
//       }
//   }
//   return newObject;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //問3
// /**
// * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
// * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
// */
// function filterArrayForStrings(arrayOfObjects) {
//   const resultOfArray = [];
//   for(const object of arrayOfObjects){
//       resultOfArray.push(filterObjectForStrings(object));
//   }
//   return resultOfArray; 
// }


// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// // 4行目のところで、ｊがnamesを1回ずつ選択され、5行目でもう1回4行目の操作が読み込まれ、
// // そのjとkの操作がiでもう1回読み込まれるから


// *** akihiro kaneko ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください
// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// //1
// /**
//  * @param {Array<string>} names - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(names) {
//   const greet = [];
//   for (const name of names) {
//     greet.push(`Hello, ${name}!`);
//   }
//   return greet;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);



// //2
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };
// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const obj = {};
//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       obj[key] = object[key];
//     }
//   }
//   return obj;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //3
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   const arrays = [];
//   for (const obj of arrayOfObjects) {
//     // どこかで関数 `filterObjectForStrings` を呼びましょう
//     arrays.push(filterObjectForStrings(obj));
//   }
//   return arrays;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// //4

// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }

// //予想
// //いち、いち、に、に、さん、さん、よん、よんを4回表示

// //理由
// //1回目の動き
// //i=0、j=0、k=1
// //kのforはk < 3まで繰り返すので、k=1,2の2回処理が入る
// //つまり2回console.log(names[j])が走る
// //この時 j=0なので、インデックス番号0の”いち”が2回コンソールに表示される

// //2~4回目
// //i=0、j=1~3、k=1
// //同じように2回console.logが走るので
// //j=1　インデックス番号1~3の”に”、”さん”、”よん”が2回ずつ表示
// //この処理はnames.length未満(4未満)の間繰り返される

// //ここまでがi=0の時の処理
// //これをi < 4　の間繰り返すので
// //いち、いち、に、に、さん、さん、よん、よんを4回表示する

// //5

// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("c: " + i);
//     }
//   }
// }

// //予想
// //a:0 b:0 c:0 c:1 b:1 c:0 c:1 a:1 b:0 c:0 c:1 b:1 c:0 c:1

// //理由
// //コンソールにa:0を表示して次の入れ子のforへ
// //コンソールにb:0を表示して次の入れ子のforへ
// //i < 2の間繰り返しなので、コンソールにc:0、c:1を表示して前のforへ
// //コンソールにb:1を表示して入れ子のforへ
// //i < 2の間繰り返しなので、コンソールにc:0、c:1を表示して前のforへ
// //i < 2は走らないので前のforへ
// //コンソールにa:1を表示して次の入れ子のforへ
// //コンソールにb:0を表示して次の入れ子のforへ
// //i < 2の間繰り返しなので、コンソールにc:0、c:1を表示して前のforへ
// //コンソールにb:1を表示して入れ子のforへ
// //i < 2の間繰り返しなので、コンソールにc:0、c:1を表示して前のforへ
// //i < 2は走らないので前のforへ
// //終わり


// *** hiroyuki iijima ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// //課題１

// /**
//  * @param {Array<string>} arrayFriends - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう

// function sayHelloToFriends(arrayFriends) {
  
//   const resultGreeting = [];

//   for (const friend of arrayFriends) {
//     resultGreeting.push(`Hello, ${friend}!`);
//   }

//   return resultGreeting;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);



// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// //課題２

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const resultObject = {};

//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       resultObject[key] = object[key];
//     }
//   }
//   return resultObject;
// }
 
// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// //課題３
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     // ここにコードを書きましょう.
//     // どこかで関数 `filterObjectForStrings` を呼びましょう
  
//   const resultArray = [];

//   for (const array of arrayOfObjects) {
//     resultArray.push(filterObjectForStrings(array));
//   }

//   return resultArray;
// }
  
// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);




// //課題４
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }

// // 予想
// // iは０から３（４未満の為）まで１ずつ加算して繰り返し
// // jは０から３（４未満の為）まで１ずつ加算して繰り返し ※name.length=4
// // kは１から２（３未満の為）まで１ずつ加算して繰り返し

// // i=0から繰り返し開始
// // j=0の状態でkの繰り返し処理が走る
// // j=0の為、name[j]では「いち」が表示される
// // kの繰り返しは2回
// // 続いてj=1になった時も同様に「に」が2回
// // j=2（「さん」が2回）,j=3（「よん」が2回）も同様に処理
// // i=1になり、108行目～112行目が再度処理される
// // i=2,i=3も同様に処理

// //「いち」「いち」「に」「に」「さん」「さん」「よん」「よん」が４回コンソールログに表示される

// //実行結果：予想通りでした


// //課題５
// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("c: " + i);
//     }
//   }
// }

// // 予想
// // １つめのiは０から１（２未満の為）まで１ずつ加算して繰り返し
// // ２つめのiは０から１（２未満の為）まで１ずつ加算して繰り返し
// // ３つめのiは０から１（２未満の為）まで１ずつ加算して繰り返し

// // ３つのfor文はそれぞれ別のスコープの為
// // 変数は初期化されず、順に処理されていく

// // 実行結果：予想通りでした


// *** shigeo mizuki ***

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

/**
* @param {Array<string>} ??? - 友達の名前が入った配列
* @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
*/
// ここにコードを書きましょう
function sayHelloToFriends(friends){
  const box = [];
  for(const friend of friends){
      const brother = "Hello, " + friend + "!";
      box.push(brother);
  }
  return box;
}


const friends = ["Mario", "Luigi"];
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

/**
* @param {object} オブジェクト
* @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
*/
function filterObjectForStrings(object) {
  // ここにコードを書きましょう
  const obj = {};
  for (const key in object) {
      if (typeof object[key] === "string") {
          obj[key] = object[key];
      }
  }
  return obj;
}

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


/**
* @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
* @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
*/
function filterArrayForStrings(arrayOfObjects) {
// ここにコードを書きましょう.
// どこかで関数 `filterObjectForStrings` を呼びましょう
  const array1 = [];
  for (const obj of arrayOfObjects){
     const arrayobj = filterObjectForStrings(obj);
     array1.push(arrayobj);
  }
  return array1;
}

test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// 2 番目の要素から値が 2 のペアは除くこと
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


const names = ["いち", "に", "さん", "よん"];

for (let i = 0; i < 4; i++) {
for (let j = 0; j < names.length; j++) {
  for (let k = 1; k < 3; k++) {
  console.log(names[j]);
  }
}
}

// kのループで２回繰り返しがあり、コンソール表示の配列がjによって全て表示されている
// それらの動作がiのループで４回繰り返されているため


for (let i = 0; i < 2; i++) {
console.log("a: " + i);
for (let i = 0; i < 2; i++) {
  console.log("b: " + i);
  for (let i = 0; i < 2; i++) {
   console.log("c: " + i);
  }
}
}


// *** ayumi mori ***
// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

// // 1
// /**
//  * @param {Array<string>} arrayOfName - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(arrayOfName) {
//     const temp = [];
//     for (const value of arrayOfName) {
//         temp.push(`Hello, ${value}!`);
//     }
//     return temp;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// // 以下のテスト用変数
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// // 2
// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//     const temp = {};
//     for (const key in object) {
//         if (typeof object[key] === "string") {
//             temp[key] = object[key];
//         }
//     }
//     return temp;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// // 3
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     const temp = [];
//     for (const key in arrayOfObjects) {
//         if (typeof arrayOfObjects[key] === "string") {
//             temp[key] = arrayOfObjects[key];
//         }
//     }
//     return temp;
// }

  
// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// // 4
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }
// // 表示 => 
// // kは


// // 5
// for (let i = 0; i < 2; i++) {
//     console.log("a: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("b: " + i);
//       for (let i = 0; i < 2; i++) {
//   　    console.log("c: " + i);
//       }
//     }
// }

// // 表示 => 
// // 


// *** yuichiro kimoto ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

// //   関数 sayHelloToFriends を宣言してください。
// /**
//  * @param {Array<string>} greeting - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */

// // ここにコードを書きましょう
// const greeting = [];
// for (const friend of friends){
//     greeting.push("Hello," + friend + "!");
// }
// return greeting;

// const friends = ["Mario", "Luigi"];

// // console.log(friends[0]);
// // console.log(friends[1]);
// // console.log(friends);

// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// *** tetsuya inokuchi ***

// // 'use strict'
// // // 1行目に記載している 'use strict' は削除しないでください



// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// // 関数 sayHelloToFriends を宣言してください。
// // /**
// //  * @param {Array<string>} ??? - 友達の名前が入った配列
// //  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
// //  */

// // // ここにコードを書きましょう
// function sayHelloToFriends(friendNames) {
//   const res = [];
//   for (let name of friendNames) {
//     res.push(`Hello, ${name}!`);
//   }
//   return res;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// ////////////////////////////////////////////////

// // 関数 filterObjectForStrings を宣言してください。

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、
//  * 値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const res = {};
//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       res[key] = object[key];
//     }
//   }
//   console.log(res);
//   return res;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない



// // //////////////////////////////////////////////////
// // 関数 filterArrayForStrings を宣言してください。この関数内で、
// // 2 問目で作った関数 filterObjectForStrings を使いましょう。

// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const res =[];
//   for (const object of arrayOfObjects) {
//     console.log("obj", object);
//     res.push(filterObjectForStrings(object));
//   }
//   return res;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);



// ////////////////////////////////////////////////////////////////////////////

// // 以下のコードを実行する前に何が表示されるか予想してみましょう。
// // その後、コードを実行して予想が合っていたかどうかを確認してください。
// // なぜこのような結果になるのか理由を説明してください。



// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     　console.log(names[j]);
//     }
//   }
// }


// /////// 予想　///////////////////////
// // 外側のiのforループ（４回）
// // 中央のjのforループ（４回）
// // 内側のkのforループ（２回）から構成されている。
// // console.assertlog(names[j])のようにnamesの配列はjで指示されている。
// // names[0]＝いち,names[0]＝いち　　と内側のル―プが２回表示した後、
// // 中央のループｊが１繰り上がる
// // names[1]=に、names[1]＝に　のように内側のループが２回同様に繰り返す。
// // 中央のループが４回繰り返した後、外側のループが繰り上がる。
// // 従って、
// // いち、いち、に、に、さん、さん、よん、よん
// // いち、いち、に、に、さん、さん、よん、よん
// // いち、いち、に、に、さん、さん、よん、よん
// // いち、いち、に、に、さん、さん、よん、よん
// /////////////////////////////////////////////////

// /////// 理由の説明　///////////

// // 前述済み



// // 以下のコードは、複数のネストされたブロック内で同じ変数名 i を使用しています。
// // コードを実行する前に何が表示されるか予想しましょう。
// // その後、コードを実行して予想が合っていたかどうかを確認してください。
// // なぜこのような結果になるのか理由を説明してください。

// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
// 　    console.log("c: " + i);
//     }
//   }
// }

// // ////////////// 予想　///////////
// // a0,b0,c0,c1,b1,c0,c1,a1,b0,c0,c1,b1,c0,c1

// // /////////////　理由　//////////////
// // ３つのループはそれぞれ２回繰り返す。
// // また、それぞれ入れ子構造のループの中の変数iのスコープは内側から優先されるので、
// // それぞれのループ内のiを示す別物であることが重要。

// // まず、外側のconsole.log(("a: " + 0))が実行される。
// // 次に中央のconsole.log(("b: " + 0))が実行される。
// // 次に内側のconsole.log(("c: " + 0))が実行される。
// // 内側のiがカウントアップされる。
// // 最後に内側のconsole.log(("c: " + 1))が実行される。
// // 内側のル―プは一旦終了して、中央のループがカウントアップする。
// // 中央のループがカウントが終了すると外側がループする。
// // と言う順番が繰り返される。


// *** hiroshi inagaki ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// // 1.関数 sayHelloToFriends を宣言してください。
// /**
//  * @param {Array<string>} ??? - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(array) {
//   const result = [];
//   for (const arr of array) {
//     result.push("Hello, " + arr + "!");
//   }
//   return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// // 2.関数 filterObjectForStrings を宣言してください。
// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const result = {};
//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       result[key] = object[key];
//     }
//   }
//   return result;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// // 3.関数 filterArrayForStrings を宣言してください。この関数内で、2 問目で作った関数 filterObjectForStrings を使いましょう。
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const result = [];
//   for (const array of arrayOfObjects) {
//     result.push(filterObjectForStrings(array));
//   }
//   return result;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// // 4.以下のコードを実行する前に何が表示されるか予想してみましょう。その後、コードを実行して予想が合っていたかどうかを確認してください。なぜこのような結果になるのか理由を説明してください。
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }
// // (1) iループ４回まわる
// // (2) jループも４回まわる
// // (3) kループは２回まわる => names[j]おなじのを２回表示する
// // (4) console.log => (2)で(3)を４回表示する、(1)で(2)を４回表示する
// // なので、「"いち"が２回、"に"が２回、"さん"が２回、"よん"が２回」を４回表示する

// // 5.以下のコードは、複数のネストされたブロック内で同じ変数名 i を使用しています。コードを実行する前に何が表示されるか予想しましょう。その後、コードを実行して予想が合っていたかどうかを確認してください。なぜこのような結果になるのか理由を説明してください。
// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("c: " + i);
//     }
//   }
// }
// // 予測できませんでした、結果を見て下記のように理解しました
// // 
// // 変数iはそれぞれのスコープ内で別物として定義されている
// // 97行目 ：　a: 0  /i=0 ,96行目ループ１周目
// // 99行目 ：　b: 0  /i=0 ,98行目ループ１周目
// // 101行目：　c: 0  /i=0 ,100行目ループ１周目
// // 101行目：　c: 1  /i=1 ,100行目のループ抜ける
// // 99行目 ：　b: 1  /i=1 ,98行目ループ２周目
// // 101行目：　c: 0  /i=0 ,100行目ループ１周目
// // 101行目：　c: 1  /i=1 ,100行目のループ抜ける、98行目のループも抜ける
// // 97行目 ：　a: 1  /i=1 ,96行目ループ２周目
// // 99行目 ：　b: 0  /i=0 ,(同上)
// // 101行目：　c: 0  /i=0 ,(同上)
// // 101行目：　c: 1  /i=1 ,(同上)
// // 99行目 ：　b: 1  /i=1 ,(同上)
// // 101行目：　c: 0  /i=0 ,(同上)
// // 101行目：　c: 1  /i=1 ,100行目のループ抜ける、98,96行目のループも抜ける
// // 


// *** souma ichihara ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // テスト
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//         console.log("OK! Test PASSED.");
//     } else {
//         console.error("Test FAILED. Try again!");
//         console.log("    actual: ", actual);
//         console.log("  expected: ", expected);
//         console.trace();
//     }
// }




// // 一問目
// /**
// * @param {Array<string>} ??? - 友達の名前が入った配列
// * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
// */
// // ここにコードを書きましょう
// function sayHelloToFriends(friend) {
//     const ansArray = [];
//     for (const name of friend) {
//         ansArray.push(`Hello, ${name}!`)
//     }
//     return ansArray;
// }

// const friends = ["Mario", "Luigi"];
// const friends2 = ["Ikeda", "Ishikawa", "Ishibashi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);
// test(sayHelloToFriends(friends2), ["Hello, Ikeda!", "Hello, Ishikawa!", "Hello, Ishibashi!"]);





// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };


// // 二問目
// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//     // ここにコードを書きましょう
//     const ansObj = {};
//     for (const key in object) {
//         if (typeof object[key] === "string") {
//             ansObj[key] = object[key];
//         }
//     }
//     return ansObj;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない



// // 三問目
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     // ここにコードを書きましょう.
//     const ansArray = [];
//     // どこかで関数 `filterObjectForStrings` を呼びましょう
//     for (const obj of arrayOfObjects) {
//         ansArray.push(filterObjectForStrings(obj));
//     }
//     return ansArray;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);




// // 四問目
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < names.length; j++) {
//         for (let k = 1; k < 3; k++) {
//             console.log(names[j]);
//         }
//     }
// }
// // 3つ目のfor文でnameの配列内を1から2まで2回ずつ繰り返し出力しそれを１つ目のfor文で0から3まで4回繰り返している
// // 出力している内容は2つ目のfor文で指定していて"ichi"から"yon"までを繰り返している



// // 五問目
// for (let i = 0; i < 2; i++) {
//     console.log("a: " + i);
//     for (let i = 0; i < 2; i++) {
//         console.log("b: " + i);
//         for (let i = 0; i < 2; i++) {
//             console.log("c: " + i);
//         }
//     }
// }
// // 一つ目のfor文で0から1まで2回繰り返しいて二つ目のfor文でも0から1まで2回繰り返していて3つ目のfor文でも0から1まで2回繰り返していている
// // その中で一つ目のfor文ではconsole.logでコンソールに出力するのと二つ目のfor文を繰り返すことしていて、二つ目のfor文でもconsole.logでコンソールに出力することと3つ目のfor文を繰り返すことをしていて3つ目のfor文はconsole.logで出力することだけをしている
// // そのため2つ目3つ目のfor文を繰り返し繰り返しているている


// *** natsuki suzuki ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// /**
//  * @param {Array<string>} friendsArray - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// function sayHelloToFriends(friendsArray) {
//   if(typeof friendsArray === "object") {
//   const result = [];
//     for (const name of friendsArray) {
//       result.push(`Hello, ${name}!`);
//     }
//     return result;
//   }
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);



// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   if (typeof object === "object") {
//     const result = {};
//     for (const key in object) {
//       if (typeof object[key] === "string") {
//         result[key] = object[key];
//       }
//     }
//     return result;
//   }
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない



// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   if (typeof arrayOfObjects === "object") {
//     const result = [];
//     for (const obj of arrayOfObjects) {
//       result.push(filterObjectForStrings(obj));
//     }
//     return result;
//   }
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);



// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }
// // 一番初めにconsol.logで出力されるのは　i===0　j===0　k===1 のときなので　
// // name[j]でjはindexなのでname[0]が出力され "いち" が返される
// // 88行目のkのループは2回繰り返されるため"いち"が2回出力される
// // jはkが2回繰り返された後1ずつ増加するのでindexが1ずつ増えていく
// // jのループは4回繰り返されるためkのループ2回がindexが増加しながら4回繰り返される
// // iのループは4回繰り返されるためkのループ2回がindexが増加しながら4回繰り返される処理を4回行うため出力されたような結果になる

// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
// 　    console.log("c: " + i);
//     }
//   }
// }
// // for文で使用されている変数はブロックスコープであり
// // 宣言されたfor文内だけで使用されるため


// *** honoka tsutsumi ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }


// //1
// /**
//  * @param {Array<string>} nameArray - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(nameArray) {
//     const greetArray = [];
//     for (const name of nameArray) {
//         greetArray.push( `Hello, ${name}!` )
//     }
//     return greetArray;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// //2
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };


// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//     // ここにコードを書きましょう
//     const stringObj = {};
//     for (const key in object) {
//         if (typeof object[key] === "string") {
//             stringObj[key] = object[key];
//         }
//     }
//     return stringObj;
// }
  
// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// //3
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     // ここにコードを書きましょう.
//     // どこかで関数 `filterObjectForStrings` を呼びましょう
//     const stringObjArray = [];
//     for (const obj of arrayOfObjects) {
//         stringObjArray.push(filterObjectForStrings(obj));
//     }
//     return stringObjArray;
// }
  
// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// //4
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }

// //理由
// // 00112233001122330011223300112233が表示される。
// // 理由はコードが下記の動きをするためである。
// // console.logにより(iのループ数)×(jのループ数)×(kのループ数)=4×4×2=32回
// // name[j]が(kのループ数)回出力し、(jのループ数)回実行し、(iのループ数)回実行する。
// // よって00112233001122330011223300112233


// //5
// for (let i = 0; i < 2; i++) {
//     console.log("a: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("b: " + i);
//       for (let i = 0; i < 2; i++) {
//   　    console.log("c: " + i);
//       }
//     }
//   }

// //理由
// // a0b0c0c1b1c0c1a1b0c0c1b1c0c1が表示される。
// // 理由はコードが下記の動きをするためである。
// // forでlet iが宣言されるたびに新しいiができる。
// // スコープの関係で各for直下では同じ階のiを参照する。
// // よってa0b0c0c1b1c0c1a1b0c0c1b1c0c1が表示される。


// *** fumiya beppusono ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // テスト関数
// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("Yay! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("  expected:", expected);
//     console.log("    actual:", actual);
//   }
// }


// // 1.関数 sayHelloToFriends を宣言してください

// /**
//  * @param {Array<string>} arrayOfFriends - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(arrayOfFriends) {
//   const result = []; // 返り値の初期化

//   for (const friend of arrayOfFriends) {
//     result.push(`Hello, ${friend}!`);
//   }

//   return result;
// }

// // テスト
// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);



// // テスト用のオブジェクト
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };


// // 2.関数 filterObjectForStrings を宣言してください
// /**
//  * @param {object} object-オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const result = {}; // 返り値の初期化

//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       result[key] = object[key];
//     }
//   }

//   return result;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// // 3.関数 filterArrayForStrings を宣言してください。この関数内で、2 問目で作った関数 filterObjectForStrings を使いましょう
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   const result = []; // 返り値の初期化
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   for (const obj of arrayOfObjects) {
//     result.push(filterObjectForStrings(obj));
//   }

//   return result;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// // 4.以下のコードを実行する前に何が表示されるか予想してみましょう。その後、コードを実行して予想が合っていたかどうかを確認してください。なぜこのような結果になるのか理由を説明してください。
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) { // 以下のfor文の処理を４回繰り返す
//   for (let j = 0; j < names.length; j++) { // namesのインデックスに0~3を繰り返し代入
//     for (let k = 1; k < 3; k++) { // console.log(names[j])を２回繰り返す
//     console.log(names[j]);
//     }
//   }
// }

// // 解説
// // for (let j = 0; j < names.length; j++)とfor (let k = 1; k < 3; k++) {console.log(names[j]);で、namesの要素が
// // ２回ずつ出力されます。
// // それを一番外側のfor文(for (let i = 0; i < 4; i++))で４回繰り返しているので、出力結果は
// // namesの要素を順番に２回ずつ４回出力されます


// // 5.以下のコードは、複数のネストされたブロック内で同じ変数名 i を使用しています。コードを実行する前に何が表示されるか予想しましょう。その後、コードを実行して予想が合っていたかどうかを確認してください。なぜこのような結果になるのか理由を説明してください。
// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("c: " + i);
//     }
//   }
// }

// // 解説
// // それぞれのfor文でlet iが宣言されているので変数iはそのfor文の中でのみi++されます
// // 最初のfor文でiに0が代入され２番目のfor文でiに0が代入され、３番目のfor文でiに0→1が代入されます
// // その後２番目のfor文でiに１が代入され３番目のfor文でiに0→1が代入されます。
// // その後最初のfor文でiに1が代入され２番目のfor文でiに0が代入され３番目のfor文でiに0→1が代入され２番目のfor文でiに１が代入され
// // ３番目のfor文でiに0→1が代入されます。


// *** haruka takahashi ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.trace();
//     console.groupEnd();
//   }
// }

// //1 関数 sayHelloToFriends を宣言してください。

// /**
//  * @param {Array<string>} names - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう

// function sayHelloToFriends(names) {
//   const greeting = [];

//   for (const name of names) {
//     greeting.push(`Hello, ${name}!`);
//   }

//   return greeting;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// // アドバイス： 新たに作成した 文字列（例： "Hello, Mario!"）を、返り値となる新しい配列に追加しましょう。
// // 以下のテストではこれらの変数を使用します。

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// //2 関数 filterObjectForStrings を宣言してください。
// /**
//  * @param {object} object オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
// */

// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const newObj = {};

//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       newObj[key] = object[key];
//     }
//   }

//   return newObj;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //3 関数 filterArrayForStrings を宣言してください。この関数内で、2 問目で作った関数 filterObjectForStrings を使いましょう。

// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
// */

// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const result = [];

//   for (const obj of arrayOfObjects) {
//     let value = filterObjectForStrings(obj);
//     result.push(value);
//   }

//   return result;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// //4 以下のコードを実行する前に何が表示されるか予想してみましょう。その後、コードを実行して予想が合っていたかどうかを確認してください。なぜこのような結果になるのか理由を説明してください。
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {                 //最初のループ　3回 いち
//   for (let j = 0; j < names.length; j++) {    //2回目のループ　4　いち　
//     for (let k = 1; k < 3; k++) {             //3回目のループ　2回　に
//     console.log(names[j]);
//     }
//   }
// }
// //11223344 を4回
// // ループ1回で１１２２３３４４がでる、1回目のループが4回するから同じものが４回

// //5 以下のコードは、複数のネストされたブロック内で同じ変数名 i を使用しています。コードを実行する前に何が表示されるか予想しましょう。その後、コードを実行して予想が合っていたかどうかを確認してください。なぜこのような結果になるのか理由を説明してください。
// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("c: " + i);
//     }
//   }
// }
// // 最初のループでa:0 次b: 0とc: 0が次c: 1で終了、次のループ


// *** rin ito ***

// //テスト定型
// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// //課題1

// /**
//  * @param {Array<string>} array - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう

// let actual;
// let expected;

// function sayHelloToFriends(friends) {
//   const actual = [];

//   for (const name of friends) {    
//     actual.push("Hello" + name);
//   }
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// console.log([result]);


// //2
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };


// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */


// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// //3
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう

//     const arrayObj = [];
//     for (const temp of arrayOfObjects){
//         arrayObj.push(filterArrayForStrings(temp));
//     }
//     return arrayObj;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// //4
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }

// //一週目：i=0, j=0, k=1  よって、「いち」が表示
// //二週目：i=1, j=1, k=2  よって、「に」が表示
// //三週目：i=2, j=2, k=3  よって、「さん」が表示
// //四週目：i=3, j=3, k=4  よって、「よん」が表示


// //5
// for (let i = 0; i < 2; i++) {　//初期化、iが2未満、iに1を足す
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//     console.log("c: " + i);
//     }
//   }
// }


// *** yutaka sonoura ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //問題文はちゃんと最後まで読んだか
// //インデント 丸カッコ　；　の位置はおかしくないか 忘れはないか
// //let const consol.log は抜けてないか、消し忘れていないか
// //一動作ずづ理解して記述しているか
// //変数名・関数名は概ねの意味が推察できる名称か

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }


// /**
//  * @param {Array<string>} ??? - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */

// const helloName =[];

// function sayHelloToFriends( nameArray ) {
//   for ( let name of nameArray ) {
//     helloName.push( `Hello, ${name}!` );
//   }
//   return helloName;
// }
 
// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);



// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   const strObj = {}
//   for ( let key in object ){
//     if ( typeof object[key] === "string" ){
//       strObj[key] = object[key];
//     }
//   }
//   return strObj;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない



// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   const arrayobj = [];
//   for(let key in arrayOfObjects){
//     arrayobj.push ( filterObjectForStrings( arrayOfObjects[key] ) );
//   }
//   return arrayobj;
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);



// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) { // 0が４未満の間は繰り返す => 4回繰り返し、この中の処理は４回実行される
//   for (let j = 0; j < names.length; j++) { // 0が配列の要素数(4)未満の間は繰り返す => 4回繰り返す　
//     for (let k = 1; k < 3; k++) { // 1が3未満の間繰り返す　=> 2回繰り返す　
//     console.log(names[j]); //namesのインデックスとして入れ子の親jを参照している値は0~3 =>"いち"～”よん”が1つずつ順番に呼ばれる
//                           //logには直前のforによって2回ずつコンソールログが呼び出される "いち"　"いち"　～　”よん”　”よん”
//     }
//   }
// }
// // for (let i = 0; i < 4; i++) { 
// //   // 0が４未満の間は繰り返す => 4回繰り返し、
// //   この中の処理は４回実行される
  
// //     for (let j = 0; j < names.length; j++) { 
// //   // 0が配列の要素数(4)未満の間は繰り返す => 4回繰り返す　
  
// //       for (let k = 1; k < 3; k++) {
// //    // 1が3未満の間繰り返す　=> 2回繰り返す　
// //    console.log(names[j]); //namesのインデックスとして入れ子の親jを参照している
// //    値は0~3 =>"いち"～”よん”が1つずつ順番に呼ばれる
  
// //   //logには直前のforによって2回ずつコンソールログが呼び出される
// //    "いち"　"いち"　～　”よん”　”よん”が４回表示

// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
// 　    console.log("c: " + i);
//     }
//   }
// }
// // 間に合いませんでした！！！


// *** ryuya tenpaku ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }


// //#1
// /**
//  * @param {Array<string>} newArray - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう

// const friends = ["Mario", "Luigi"];

// function sayHelloToFriends(array) {
//   const newArray = [];
//   for (const name of array) {
//     newArray.push("Hello, " + name + "!");
//   }
//   return newArray;
// }
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// //#2
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   const newOfj = {};
//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       newOfj[key] = object[key];
//     }
//   }
//   return newOfj;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// //#3
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */

// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const newArray2 = [];
//   for (const object of arrayOfObjects) {
//     newArray2.push(filterObjectForStrings(object));
//   }
//   return newArray2;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// //#4
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }
// //iを4回、jを3回、kを2回繰り返す。
// //すぐ上のfor文kを2回呼び出す。さらに配列nameのインデックスがjとなっており、3回繰り返し、さらにそれを4回繰り返している


// //#5
// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
// 　    console.log("c: " + i);
//     }
//   }
// }
// // 上から順に繰り返し処理を実施している。


// *** yudai maruyama ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// //#1-----------------------

// /**
//  * @param {Array<string>} arrOfName - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう

// function sayHelloToFriends(arrOfName){
//   let result = [];
//   for(const name of arrOfName){
//     // console.log(name);
//     result.push("Hello, "+name+"!");
//   }return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// //#2------------------------

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   const result = {};
//   for(const key in object){
//     // console.log(key);
//     if(typeof object[key] === "string"){
//       result[key] = object[key];      
//     }
//   }return result;
//   // ここにコードを書きましょう
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //#3-時間足りない（; ;）--------------------------

// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
// */
// function filterArrayForStrings(arrayOfObjects) {
//   const result = [];
//   for(const object of arrayOfObjects){
    
//   }
  
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// //#4---------------------------

// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) { //0~3で４回
//   for (let j = 0; j < names.length; j++) { //name.length=4 0~3で４回
//     for (let k = 1; k < 3; k++) { //1~2で２回
//       console.log(names[j]);
//     }
//   }
// }

// //理由：kのループで２回ずつコンソールログが実行されるため「いち✖️２、に✖️２...」というように出力される。name[j]のjは４回処理される為配列（name）内のindexが全て周到される。ここまでの処理をiのloop処理で４回行う為、このような結果が返ってくる


// //#5---------------------------

// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//     console.log("c: " + i);
//     }
//   }
// }

// //理由：順次処理で上位のforから下層のforに処理が移行される。最下層のforから順にloopの処理が終わり上位のforに処理が渡されるが再度上位のforがloop処理を始めるためいったりきたりする。


// *** masaki yamamiba ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }
// //1.
// /**
//  * @param {Array<string>} nameOfArrays??? - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */

// function sayHelloToFriends(nameOfArrays) {
//   const result = [] ;
//   for (const name of nameOfArrays) {
//     // console.log(name);
//     result.push("Hello," + " " + name + "!");

//   } return result;
// }  

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// //2.
// // const obj1 = { a: "A" };
// // const obj2 = { a: "A", b: 2 };
// // const obj3 = { a: "A", b: 2, c: "C", d: true };
// // const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   const result = {};
//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       console.log(object);
//       result[key] = object[key]; 
//     } return result;
//   }
  
// }

// // test(filterObjectForStrings(obj1), obj1); // 変化なし
// // test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// // test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //3.
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// //4
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {  // iが4以下で繰り返しiに＋1される　
//   for (let j = 0; j < names.length; j++) { //ｊは0～namesの長さ4以下でjに+1される
//     for (let k = 1; k < 3; k++) { //kが1～3以下の条件でkが+1される
//     console.log(names[j]);
//     }
//   }
// }
// //理由
// //iは4回繰り返しnamesの要素を取得する "いち", "に", "さん", "よん"4回表示
// //jはnamesの長さの4回文namesの要素を取得する"いち", "に", "さん", "よん"4回表示
// //kは2回繰り返されるため"いち", "に", "さん", "よん""いち", "に", "さん", "よん"が2回表示される　



// // //5.
// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//       console.log("c: " + i);
//     }
//   }
// }


// *** yoshihiro ito ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// //------関数 sayHelloToFriends を宣言してください。------

// /**
//  * @param {Array<string>} nameArray - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(nameArray) {
//   const result = [];
//   for (const name of nameArray) {
//     result.push("Hello, " + name + "!");
//   }
//   return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// //------関数 filterObjectForStrings を宣言してください。------

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const result = {};
//   for (const key in object) {
//     if (typeof object[key] === "string") {
//       result[key] =object[key];
//     }
//   }
//   return result;
// }

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //------関数 filterArrayForStrings を宣言してください。------

// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   // ここにコードを書きましょう.
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const result =[];
//   for (const obj of arrayOfObjects) {
//     for (const key in obj) {
//       if (obj[key] !== 2) {
//         result.push(filterObjectForStrings(obj));
//       }
//     }
//   }
//   return result;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// *** masaharu takeda ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //忘れないで！： テストの定型文を script.js の先頭に書きましょう。
// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }


// /* 【問1】関数 sayHelloToFriends を宣言してください。 */


// /**
//  * @param {Array<string>} ??? nameArr - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends (nameArr) {
//   let result = [] ;
//   for (let name of nameArr) {
//     result .push ( `Hello, ${name}!`) ;
//   }
//   return result ;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// // アドバイス： 新たに作成した 文字列（例： "Hello, Mario!"）を、返り値となる
// //新しい配列に追加しましょう。⇒　["Hello, Mario!", "Hello, Luigi!","〇〇〇"]って
// //意味かな・・・分からない・・・

// // 以下のテストではこれらの変数を使用します。

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /* 【問2】 関数 filterObjectForStrings を宣言してください。*/

// /**
//  * @param {object} objcts オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   // ここにコードを書きましょう
//   const result = {} ;
//   for (let key in objects) {
//     if (typeof objects === "string") {
//       result[key] = objects[key] ;
//     }
//   }
//   return result ;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// *** tomohisa yoshida ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }
// //問題 1
//   /**
//  * @param {Array<string>} friends - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(array) {
//   const greetings = [];
//   for (const name of array) {
//     greetings.push("Hello, " + name + "!");
//   }
//     return greetings;
// }
  
// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// //問題 2
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//     // ここにコードを書きましょう
//   const filteredObject = {};
//   for (const key in object){
//     if(typeof object[key] === "string"){
//       filteredObject[key] = object[key];
//     }
//   }
//   return filteredObject;
// }

  
//   test(filterObjectForStrings(obj1), obj1); // 変化なし
//   test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
//   test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //問題 3
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     // ここにコードを書きましょう.
//     // どこかで関数 `filterObjectForStrings` を呼びましょう
//   const filteredArray = [];
//   for (const obj of arrayOfObjects){
//         const filteredObj = filterObjectForStrings(obj);
//         filteredArray.push(filteredObj);
//   }
//   return filteredArray;
// }
  
//   test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
//   // 2 番目の要素から値が 2 のペアは除くこと
//   test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
//   test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// *** emi nagamune ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //--------------------第２回アセスメント---------------------
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

// //-------------------------1----------------------------
// /**
//   * @param {Array<string>} name - 友達の名前が入った配列
//   * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//   */
//  function sayHelloToFriends(name) {
//      const str = [];
//      for (const array of name) {
//          str.push("Hello, " + array + "!");
//      }
//      console.log(str);
//      return str;
//  }

//  const friends = ["Mario", "Luigi"];
//  test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// //-------------------------2---------------------------
//  const obj1 = { a: "A" };
//  const obj2 = { a: "A", b: 2 };
//  const obj3 = { a: "A", b: 2, c: "C", d: true };
//  const obj4 = { a: "A", c: "C" };
// /**
//   * @param {object} object オブジェクト
//   * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//   */
//  function filterObjectForStrings(object) {
//      const obj = {};
//      for (const str in object) {
//          console.log(object[str]);
//          if (typeof object[str] === "string") {
//              obj[str] = object[str];
//          }
//      }
//      console.log(obj);
//      return obj;
//    }
  
//    test(filterObjectForStrings(obj1), obj1); // 変化なし
//    test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
//    test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //-------------------------3-----------------------------
//  /**
//   * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//   * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//   */
//  function filterArrayForStrings(arrayOfObjects) {
//      const newarray = [];
//      for (const item of arrayOfObjects) {
//          newarray.push(filterObjectForStrings(item));
//      }
//      console.log(newarray);
//      return newarray;
//    }
  
//    test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
//    // 2 番目の要素から値が 2 のペアは除くこと
//    test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
//    test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// //------------------------4-----------------------------
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }
// //~~~~~内容説明~~~~~
// //86行目のfor文　→ i を作って0から3まで繰り返す
// //87行目のfor文　→ j を作って0からnamesのlength(4回)に満たない3回まで繰り返す
// //88行目のfor文　→ k を作って1から2まで繰り返す
// //89行目のconsole.log　→ namesにjを実引数にして表示させる
// //~~~~~動きの説明~~~~~
// //まず86行目の0から3でnamesの値をすべて4回表示
// //次に87行目は89行目でcondole.logで表示したいのはnamesのインデックス[3]までとされているので、配列すべての"いち","に","さん","よん"が表示される
// //88行目ではconsole.logを何回表示させるかを表しているので、1から2の2回namesの値を表示される

