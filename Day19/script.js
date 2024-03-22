// // *** yutaka sonoura ***

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

// function doTheThing(array){
//  return array.filter(num => num < 6 ).map(num => num * num);
// }


// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// const strArray = [];
// function getItemsInRefrigerator(str){
//   if (str != null){
//     strArray.push(str);
//   }
//   return strArray;
// }

// function putItemInRefrigerator(str){
//   return getItemsInRefrigerator(str);
// }
// function removeItemFromRefrigerator(str){
//   for (i of strArray){
//     if (i === str){
//       console.log(i.length)
//     }
//   }
// // return strArray.splice()
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** ryoma hiraike ***

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


// //1 コードを追加して、テストをパスしましょう。
// console.log("課題1");

// // ここにコードを書きましょう
// // function doTheThing(arr){
// //   const result = [];
// //   for (const num of arr){
// //     if(num < 6){
// //       result.push(num * num);
// //     }
// //   }
// //   return result;
// // }

// //アロー関数
// function doTheThing(arr){
//  const newArr = arr.filter((element => element < 6))
//                     .map((element => element * element))
//  return newArr;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// //2 コードを追加して、テストをパスしましょう。
// console.log("課題2");
// // ここにコードを書きましょう
// //
// const result = [];

// function putItemInRefrigerator(item){
//  return result.push(item); 
// }


// function removeItemFromRefrigerator(item){
//   for (let i = 0; i < result.concat.length ; i++){
//     if ( result[i] === item ){
//       return result.splice(i,1);
//     }
//   }
// }

// // //アロー関数
// // function removeItemFromRefrigerator(item){
// //  const newArr = result.filter(element => element !== item);
// //  result = newArr;
// // }


// function getItemsInRefrigerator(){
//  return result;
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** tetsuya inokuchi ***

// 'use strict'
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



// // ここにコードを書きましょう

// const doTheThing = array => array.filter(num => num <= 5)
//                                  .map(num => num * num);

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // ここにコードを書きましょう
// let items = [];   //items.filter使用でconstから変更

// const getItemsInRefrigerator = () => items;

// const putItemInRefrigerator  = item => items.push(item);

// // const removeItemFromRefrigerator = function (item) {
// //   console.log(item);
// //   console.log(items.indexOf(item));
// //   if (items.indexOf(item) != -1) {
// //     return items.splice(items.indexOf(item),1);
// //   }
// // }

// // const removeItemFromRefrigerator = item => {
// //   if (items.indexOf(item) !== -1) {
// //     items = items.splice(items.indexOf(item),1);
// //   }
// // }

// // const removeItemFromRefrigerator = item => {
// //   if (items.indexOf(item) !== -1) {
// //     items.splice(items.indexOf(item),1);
// //   }
// // }

// // 発想転換　milk と違うものだけtrueとする。items const => letに変更
// const removeItemFromRefrigerator = item => 
//     items = items.filter(thing => thing !== item);

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** natsuki suzuki ***

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

// function doTheThing(array) {
//   if (typeof array === "object") {
//     return array.filter(num1 => num1 <= 5).map(num2 => num2 * num2); 
//   }
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// const ItemsInRefrigerato = [];

// function getItemsInRefrigerator() {
//   return ItemsInRefrigerato;
// }

// function putItemInRefrigerator(item) {
//   if (typeof item === "string") {
//     ItemsInRefrigerato.push(item);
//   }
//   return ItemsInRefrigerato;
// }

// function removeItemFromRefrigerator(item) {
//   if (ItemsInRefrigerato.indexOf(item) !== -1 && typeof item === "string") {
//     ItemsInRefrigerato.splice(ItemsInRefrigerato.indexOf(item),1);
//   }
//   return ItemsInRefrigerato;
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** soma ichihara ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // テスト
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




// // 一問目
// function doTheThing(numArray) {
//   return numArray
//     .filter(num => num <= 5)
//     .map(num => num * num)
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);
// test(doTheThing([1, 3, 6, 9, 12]), [1, 9]);



// // 二問目
// const drinkArray = [];

// function getItemsInRefrigerator() {
//   return drinkArray;
// }

// function putItemInRefrigerator(drinkName) {
//   drinkArray.push(drinkName);
// }

// function removeItemFromRefrigerator(drinkName) {
//   let index = 0;
//   for (const drink of drinkArray) {
//     if (drink === drinkName) {
//       drinkArray.splice(index, 1);
//     }
//     index += 1;
//   }
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** hiroshi inagaki ***

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

// // 1.ここにコードを書きましょう
// function doTheThing(arr) {
//   const number = arr.filter(num => num * num <= 25);
//   return number.map(num => num * num);
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // 2.ここにコードを書きましょう
// let result = [];
// function putItemInRefrigerator(str) {
//   return result.push(str);
// }
// function getItemsInRefrigerator() {
//   return result;
// }
// function removeItemFromRefrigerator(str) {
//   if (result.indexOf(str) !== -1) {
//     result.splice(result.indexOf(str), 1);
//   }
//   return result;
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** haruka takahashi ***

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

// //1 コードを追加して、テストをパスしましょう。
// // ここにコードを書きましょう
// function doTheThing(numArr) {
//   const filterNumArr = numArr.filter(element =>
//     element <= 5);
//   return filterNumArr.map(element =>
//     element * element);
// }



// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// //2 コードを追加して、テストをパスしましょう。
// // ここにコードを書きましょう

// const itemsInRefrigerator = [];

// function getItemsInRefrigerator() {
//   return itemsInRefrigerator;
// }

// function putItemInRefrigerator(item) {
//   itemsInRefrigerator.push(item);
// }

// // function removeItemFromRefrigerator(item) {
// //   const index = itemsInRefrigerator.indexOf(item);
// //   if (index !== -1) {
// //     itemsInRefrigerator.splice(index, 1);
// //   }
// // }

// function removeItemFromRefrigerator(item) {
//   return itemsInRefrigerator.filter((elemnt,index) => {
//     if (elemnt === item) {
//       itemsInRefrigerator.splice(index, 1)
//     }
//   });
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** yuichiro kimoto ***

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

//   // ここにコードを書きましょう
// function doTheThing(array){
//     // return (([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
//     // return (([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);
    
//     // return array => array * array  <=25;

//     const result =[];
//     for(const element of array){
//         if(element * element  <= 25){
//             result.push(element);
//         }
//     }
//     return result;
// }        
        
//         //与えられた配列の要素を取得し、element*elementを行い、25以下のものだけ返す
// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // *** yoshihiro ito ***

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

// // ここにコードを書きましょう
// function doTheThing(array) {
//   const result = [];
//   for (const num of array) {
//     if (num <= 5) {
//       result.push(num * num);
//     }
//   }
//   return result;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);//1
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);//2

// // ここにコードを書きましょう
// let result =[];

// function getItemsInRefrigerator(str) {
//   if (str) {
//     result.push(str);
//   }
//   return result;
// }

// function putItemInRefrigerator(str) {
//   result.push(str);
// }

// // 全部削除？ by DJ
// function removeItemFromRefrigerator(str) {
//   const resultCopy = [...result];
//   result = [];
//   for (const value of resultCopy) {
//     if (value !== str) {
//       result.push(value);
//     }
//   }
//   return result;
// }

// test(getItemsInRefrigerator(), []);//3

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);//4

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);//5

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);//6

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);//7


// // *** rin ito ***

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
// }


// //1

// function doTheThing(array) {
//     const array = [];
//     return array.map(x => x * x);
// }

// function squae (element){
//   return element = 25 ;
// }
// const originalArray = array;
// const filterArray = array.filter(squae);

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// *** yasushi suzuki ***

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



// //問1
// function lessThan5(num){
//   return num <= 5
// }

// function powerNumber(num){
//   return num*num;
// }

// function doTheThing(array){
// return array.filter(lessThan5).map(powerNumber);
// }


// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// //問2
// // ここにコードを書きましょう

// const drinkArray = []

// function getItemsInRefrigerator(){
// return drinkArray;
// }


// function putItemInRefrigerator(drink){
//   return drinkArray.push(drink);
// }

// function removeItemFromRefrigerator(drink){
// return drinkArray.shift(drink);
// }



// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** masaharu takeda ***

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

// /* 問1_コードを追加して、テストをパスしましょう。 */
// // ここにコードを書きましょう

// function doTheThing(arrays) {
//   const result = [];
//   arrays.forEach(num => {
//     if (num <= 5) {
//       result.push(num * num);
//     }
//   });
//   return result;
// }
// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);




// /*問2_ コードを追加して、テストをパスしましょう。 */
// // ここにコードを書きましょう

// function getItemsInRefrigerator (drinkArray) {
//   const refrigerator = [];
//   refrigerator.push (drinkArrayS);

// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** honoka tsutsumi ***

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


// // ここにコードを書きましょう
// function doTheThing(numArray) {
//   const resultArray = [];
//   console.log(numArray.map(x => {
//     if (x <= 5) return x ** 2;
// }));

//   numArray.map(x => {
//       if (x <= 5) resultArray.push(x ** 2);
//   });
//   return resultArray;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);



// // // ここにコードを書きましょう
// let refrigerator = [];

// function getItemsInRefrigerator(str) {
//     return refrigerator;
// }

// function putItemInRefrigerator(str) {
//     refrigerator.push(str);
//     return refrigerator;
// }

// function removeItemFromRefrigerator(str) {

// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** fumiya beppusono ***

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



// // // 問題1
// function doTheThing(array) {
//   const underArray =  array.filter(value => value <= 5); // 5以上の要素だけ取り出す
//   return underArray.map(value => value ** 2); // 要素を2乗する
// }


// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // 問題2
// const result = [];

// function getItemsInRefrigerator() {
//   return result;
// }

// function putItemInRefrigerator(str) {
//   result.push(str); // resultに要素を追加
//   return result;
// }

// function removeItemFromRefrigerator(str) {
//   const index = result.indexOf(str);
//   if (index !== -1) { // indexOfで要素が見つからないとindexに-1が入るため、indexが-1以外のときだけ要素を削除
//     result.splice(index, 1);
//   }
//   return result;
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** akihiro kaneko ***

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
// // ここにコードを書きましょう
// function doTheThing(array) {
//   const resultArray = 
//     array
//       .filter((e) => e <= 5)
//       .map((e) => e * e);
//   return resultArray
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// //2
// // ここにコードを書きましょう
// const itemsArray = [];

// function getItemsInRefrigerator() {
//   return itemsArray;
// }

// function putItemInRefrigerator(item) {
//   itemsArray.push(item);
// }
// function removeItemFromRefrigerator(item) {
//   for (let i = 0;i < itemsArray.length; i++) {
//     if (itemsArray[i] === item) {
//       itemsArray.splice(i,1);
//     }
//   }
// }


// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("juice");
// test(getItemsInRefrigerator(), []);


// // *** emi nagamune ***

// //第3回アセスメント
// //------------------------------------------------1-----------------------------------------------------
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

// function doTheThing(arr) {
// const newArray = arr.map(num => num * num)
//                   .filter(number => number < 30);
//   return newArray;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// //--------------------------------------------2-------------------------------------------
// let inItems = [];

// function putItemInRefrigerator(item) {
//   inItems.push(item);
// }

// function removeItemFromRefrigerator(item) {
// const drink = inItems.drink(item);
// // const drink = inItems.indexOf(item); by DJ

//   if (drink !== -1) {
//       inItems.splice(drink, 1);
//   }
// }

// function getItemsInRefrigerator() {
//   return inItems;
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** shigeo mizuki ***

// 'use strict'
// // １行目に記載している 'use strict'　は削除しないでください
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
// }

// // ここにコードを書きましょう
// function doTheThing (arrays) {
//   // arrays.map(x => x ** 2);
//   // return arrays.filter(x => x < 25);

//   const result = [];
//   for (const array of arrays) {
//     const arr = (array * array);
//     if (arr <= 25){
//       result.push(arr);
//     }
//   }
//   return result;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // *** tatsuya penpaku ***

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


// //問題1
// function doTheThing(array) {
//   const result = array.filter(element => element <= 5);
//   const newResult = result.map(element => element **2);
//   return newResult;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// //問題2
// //getItemsInRefrigerator 引数を何もとらず、配列に変換する
// //putItemInRefrigerator　引数(文字列型)をとり、getItemsInRefrigeratorの配列に追加する

// function getItemsInRefrigerator() {
//   const array = [];
//   array.push(putItemInRefrigerator(str));
//   return result;
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** masaki yamabiba ***


// //1.


// // ここにコードを書きましょう

// function numberSquare(element) {
//   // console.log(element);
//   return element * element;
// }

// // function isMoreThan(element) {
// //     return element > 25
// //   }
  
//   function doTheThing(array) {
//     return array.map(numberSquare) ;
  
//   }
// // function doTheThing(array) {
// //   return array.filter(isMoreThan)
// // }



// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // *** hiroyuki iijima ***

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

// // 課題１
// function doTheThing(arrayNumbers) {
//   return arrayNumbers
//     .filter(num => num <= 5)
//     .map(num => num * num);
// }

// // ここにコードを書きましょう

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// // 課題２
// // ここにコードを書きましょう

// let putItem;
// let removeItem;
// let itemName = "";
// const arrayItems = [];

// function getItemsInRefrigerator() {
  
//   if (itemName !== "" && putItem === true) {
//     arrayItems.push(itemName);
//   } else if (itemName !== "" && removeItem ===true) {

//     // 配列内に存在するか
//     arrayItems.forEach((element, index) => {
//       if (element === itemName) {
//         arrayItems.splice(index, 1);
//       }
//     })
//   }
//   return arrayItems;
// }

// function putItemInRefrigerator(drink) {
//   putItem = true;
//   removeItem = false;
//   itemName = drink;
//   return itemName;
// }


// function removeItemFromRefrigerator(drink) {
//   putItem = false;
//   removeItem = true;
//   itemName = drink;
//   return itemName;
// }



// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** yutaka sonoura ***

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

// function doTheThing(array){
//  return array.filter(num => num < 6 ).map(num => num * num);
// }


// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// const strArray = [];
// function getItemsInRefrigerator(str){
//   if (str != null){
//     strArray.push(str);
//   }
//   return strArray;
// }

// function putItemInRefrigerator(str){
//   return getItemsInRefrigerator(str);
// }
// function removeItemFromRefrigerator(str){
//   for (i of strArray){
//     if (i === str){
//       console.log(i.length)
//     }
//   }
// // return strArray.splice()
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// // *** yudai maruyama ***

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


// function doTheThing(nums) {
//   const num2 = [];

//   for (const num of nums) {
//     num2.push(num * num);
//     // console.log(num2);
//   }

//   const result = num2.filter(function (num2) {
//     // console.log(num2)
//     return num2 <= 25;
//   });
//   return result;
// }



// // ここにコードを書きましょう

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // // ここにコードを書きましょう

// // test(getItemsInRefrigerator(), []);

// // putItemInRefrigerator("milk");
// // test(getItemsInRefrigerator(), ["milk"]);

// // putItemInRefrigerator("juice");
// // test(getItemsInRefrigerator(), ["milk", "juice"]);

// // removeItemFromRefrigerator("milk");
// // test(getItemsInRefrigerator(), ["juice"]);

// // removeItemFromRefrigerator("milk");
// // test(getItemsInRefrigerator(), ["juice"]);


// // *** tomohisa yoshida ***

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
// }


// //1.
// // ここにコードを書きましょう
// function doTheThing(numbers) {
//   const newArray = numbers
//     .map(num => num * num)
//     .filter(squaredNum => squaredNum < 30);
//   // console.log(newArray);
//   return newArray;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// //2.

// let itemsInRef = [];

// function getItemsInRefrigerator() {
//   return itemsInRef;
// }

// function putItemInRefrigerator(item) {
//   itemsInRef.push(item);
// }

// function removeItemFromRefrigerator(item) {
//   const index = itemsInRef.indexOf(item);
//   if (index !== -1) {
//       itemsInRef.splice(index, 1);
//   }
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

