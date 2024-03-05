// *** tetsuya inokuchi ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // 引数に人の名前（文字列型の値）を 1 つ取り、それを使って挨拶文を返す greeting という名前の関数を作成してください。
// // 下記のテストケースを実行して、期待通りの挨拶文がコンソールに表示されるようにしましょう。

// function greeting(name) {
//   return "Hello, " + name + "!";
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"
// console.log(greeting("Ken")); // => "Hello, Ken!"
// console.log(greeting("Jhone")); // => "Hello, Jhone!"

// // average という名前の関数を宣言してください。この関数は引数として数値型の値を 2 つ取り、その 2 つの数の平均を返します。
// // 下記のテストケースを実行して、期待通りの数値がコンソールに表示されるようにしましょう。

// function average(num1, num2) {
//   return (num1 + num2) / 2;
// }
// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200
// console.log(average(-100, 300)); // => 100
// console.log(average(-100, -300)); // => -200

// // 関数 describeTheWeather を宣言してください。
// // 以下が、それぞれの季節の適切な温度です。
// // 春 --> 暖かい
// // 夏 --> 暑い
// // 秋 --> 涼しい
// // 冬 --> 寒い
// // もし与えられた温度が適切であれば、この季節の平均的な気温です を返してください。もしそうでなければ、この季節には珍しい気温です を返してください。
// // 用意されたテストをパスできていれば、コンソールに OK! Test PASSED. と表示されます。すべてのテストをパスしましょう。

// // /**
// //  * @param {"春"|"夏"|"秋"|"冬"} seasons - 現在の季節
// //  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} feeling - 現在の気温
// //  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
// //  */

// function describeTheWeather(seasons, feelings) {
//   if (seasons === "春" && feelings === "暖かい") {
//       return "この季節の平均的な気温です。";
//     } else if (seasons === "夏" && feelings === "暑い") {
//       return "この季節の平均的な気温です。";
//     } else if (seasons === "秋" && feelings === "涼しい") {
//       return "この季節の平均的な気温です。";
//     } else if (seasons === "冬" && feelings === "寒い") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
// }

// // テスト　春
// let actual = describeTheWeather("春", "暖かい");
// let expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // テスト　夏
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // テスト　秋
// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // テスト　冬
// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** emi nagamune 長棟 笑 ***
// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //---------------------------アセスメント-------------------------------//
// //-------1----------
// function greeting(name) {
//     return "Hello, " + name + "!";
// }
// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //-------2----------
// function average(num1, num2) {
//     return (num1 + num2) / 2;
// }
// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// //-------3----------
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} c - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// let actual;
// let expected;

// function describeTheWeather(season, c) {
//     if (season === "春") {
//         if (c === "暖かい") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     } else if (season === "夏") {
//         if (c === "暑い") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     } else if (season === "秋") {
//         if (c === "涼しい") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     } else if (season === "冬") {
//         if (c === "寒い") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     }
// }
// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください

// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }


// *** yutaka sonoura 其浦 豊 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function greeting( name ) {
//     return `Hello, ${name}!`;
// }

// // テスト1
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"



// function average( num1, num2 ) {
//     return ( num1 + num2 ) / 2;
// }

// // テスト2
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200



// let actual = "";
// let expected = "";
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} sensibleTemperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// function describeTheWeather( season, sensibleTemperature ) {
//     if ( season === "春" ) {
//         if ( sensibleTemperature === "暖かい" ) {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }

//     } else if ( season === "夏" ) {
//         if ( sensibleTemperature === "暑い") {
//             return "この季節の平均的な気温です。";
//         } else if (sensibleTemperature === "熱い" ) {
//             return "湿度も高いし、いら立たしい季節です！";
//         } else {
//             return "この季節には珍しい気温です。";
//         } 

//     } else if ( season === "秋" ) {
//         if ( sensibleTemperature === "涼しい" ) {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         } 

//     } else if ( season === "冬" ) {
//         if ( sensibleTemperature === "寒い" ) {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         } 

//     } else{
//         return "入力値が異常です";
//     }
// }

//   // テスト3
//   actual = describeTheWeather("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "暑い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "熱い");
//   expected = "湿度も高いし、いら立たしい季節です！";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("100", "寒い");
//   expected = "入力値が異常です";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }


// *** ryoma hiraike 平池 龍馬 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //課題1
// console.log("課題1😀");
// /**
//  * @param {string} name - 引数(名前)
//  * @returns {string} -返り値　"Hello, name!"
//  */

// function greeting(name){
//     return `Hello, ${name}!`;
// }


// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //課題2
// console.log("課題2😀");
// /**
//  * @param {number} num1 - 1つ目の引数
//  * @param {number} num2 -　2つ目の引数
//  * @returns {number} -返り値　二つの引数の平均値
//  */

// function average(num1, num2){
//     return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// //課題3
// console.log("課題3😀");
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// //TDD用
// let actual;
// let expected;

// // function describeTheWeather(season, temperature) {
// //     // ここにコードを書きましょう
// //     if (season === "春"){                         //春の時
// //         if (temperature === "暖かい"){
// //             return "この季節の平均的な気温です。";
// //         } else {
// //             return "この季節には珍しい気温です。";
// //         }
// //     } else if (season === "夏"){                    //夏の時
// //         if (temperature === "暑い"){
// //             return "この季節の平均的な気温です。";
// //         } else {
// //             return "この季節には珍しい気温です。";
// //         }
// //     } else if (season === "秋"){                    //秋の時
// //         if (temperature === "涼しい"){
// //             return "この季節の平均的な気温です。";
// //         } else {
// //             return "この季節には珍しい気温です。";
// //         }
// //     } else if (season === "冬"){                    //冬の時
// //         if (temperature === "寒い"){
// //             return "この季節の平均的な気温です。";
// //         } else {
// //             return "この季節には珍しい気温です。";
// //         }
// //     } else {
// //         return "適切な季節を入力してください。"      //季節にそれ以外が入力された時
// //     }
// // }
  
// function describeTheWeather(season, temperature) {
//     // ここにコードを書きましょう
//     if (season === "春"){                         //春の時
//         if (temperature ==="暖かい" || temperature === "暑い" || temperature === "涼しい" || temperature === "寒い"){
//             if (temperature === "暖かい"){
//                return "この季節の平均的な気温です。";
//             } else {
//             return "この季節には珍しい気温です。";
//             }
//         } else {
//             return "適切な気温を入力してください。"
//         }
//     } else if (season === "夏"){                    //夏の時
//         if (temperature ==="暖かい" || temperature === "暑い" || temperature === "涼しい" || temperature === "寒い"){
//             if (temperature === "暑い"){
//                 return "この季節の平均的な気温です。";
//             } else {
//                 return "この季節には珍しい気温です。";
//             }
//         } else {
//             return "適切な気温を入力してください。"
//         }
//     } else if (season === "秋"){                    //秋の時
//         if (temperature ==="暖かい" || temperature === "暑い" || temperature === "涼しい" || temperature === "寒い"){
//             if (temperature === "涼しい"){
//                 return "この季節の平均的な気温です。";
//             } else {
//                 return "この季節には珍しい気温です。";
//             }
//         } else {
//             return "適切な気温を入力してください。"
//         }
//     } else if (season === "冬"){                    //冬の時
//         if (temperature ==="暖かい" || temperature === "暑い" || temperature === "涼しい" || temperature === "寒い"){
//             if (temperature === "寒い"){
//                 return "この季節の平均的な気温です。";
//             } else {
//                 return "この季節には珍しい気温です。";
//             }
//         } else {
//             return "適切な気温を入力してください。"
//         }
//     } else {
//         return "適切な季節を入力してください。"      //季節にそれ以外が入力された時
//     }
// }
  

// // テスト
//   actual = describeTheWeather("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
// // さらにテストを書いて、コードが正しいことを確認してください
// //　"この季節の平均的な気温です。"の確認
//   actual = describeTheWeather("夏", "暑い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("秋", "涼しい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("冬", "寒い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

// // "この季節には珍しい気温です。"の確認

//   actual = describeTheWeather("夏", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }


//   actual = describeTheWeather("秋", "暑い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("冬", "涼しい");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

// //遊び
//   actual = describeTheWeather("FUYU", "寒い");
//   expected = "適切な季節を入力してください。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("春", "ああ");
//   expected = "適切な気温を入力してください。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "ああ");
//   expected = "適切な気温を入力してください。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("秋", "ああ");
//   expected = "適切な気温を入力してください。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }


//   actual = describeTheWeather("冬", "ああ");
//   expected = "適切な気温を入力してください。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }



// *** masaharu takeda 武田 政治 ***

// /* 【プログラミング基礎_試験_課題1】*/
// // テスト

// function greeting (str) {
//   return "Hello, " + str + "!" ;
// }
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"


// /* 【プログラミング基礎_試験_課題2】*/
// // テスト
// function average (num1, num2) {
//   return (num1 + num2) / 2 ; 
// }
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// /* 【プログラミング基礎_試験_課題3】*/
// // テスト
// function describeTheWeather(str1, str2) {
//   // ここにコードを書きましょう
//   if (str1 === "春" && str2 === "暖かい"){
//       return "この季節の平均的な気温です。" ;
          
//       }
//       if (str1 === "夏" && str2 === "暑い"){
//       return "この季節の平均的な気温です。" ;

//       }
//       if (str1 === "秋" && str2 === "涼しい"){
//       return "この季節の平均的な気温です。" ;

//       }
//       if (str1 === "冬" && str2 === "寒い"){
//       return "この季節の平均的な気温です。" ;

//   }else
//       return "この季節には珍しい気温です。" ;
// }

// // テスト
// let actual = describeTheWeather("春", "暖かい");
// let expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// } 

// // さらにテストを書いて、コードが正しいことを確認してください


// *** yuichiro kimoto 木本 雄一郎 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // テスト
// function greeting(name){
//     return "Hello, "+ name +"!";
// }

// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// // テスト
// function average(num1, num2){
//     return (num1 + num2) /2;
//     }

// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200





// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temp) {
//     // ここにコードを書きましょう
//   if (season === "春" && temp === "暖かい"){
//       return "この季節の平均的な気温です";
//     } else if(season === "夏" && temp === "暑い"){
//       return "この季節の平均的な気温です";
//     } else if(season === "秋" && temp === "涼しい"){
//           return "この季節の平均的な気温です";
//     } else if(season === "夏" && temp === "寒い"){
//       return "この季節の平均的な気温です";
//    }  else {
//       return  "この季節には珍しい気温です。"
// }
// }

  
//   // テスト
//   actual = describeTheWeather("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   // さらにテストを書いて、コードが正しいことを確認してください


// *** ayumi mori 森 あゆみ ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //1 
// function greeting(name){
//     return `Hello, ${name}!`;
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"


// //2
// function average(num1, num2){
//     return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// //3
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// let actual;
// let expected;

// function describeTheWeather(season, temp) {
//     // ここにコードを書きましょう
//     if (season === "春" && temp === "暖かい") {
//         return "この季節の平均的な気温です。";
//     } else if (season === "夏" && temp === "暑い") {
//         return "この季節の平均的な気温です。";
//     } else if (season === "秋" && temp === "涼しい") {
//         return "この季節の平均的な気温です。";
//     } else if (season === "冬" && temp === "寒い") {
//         return "この季節の平均的な気温です。";
//     } else {
//         return "この季節には珍しい気温です。";
//     }
//   }
  
//   // テスト
//   actual = describeTheWeather("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   // さらにテストを書いて、コードが正しいことを確認してください
//   actual = describeTheWeather("夏", "暑い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "涼しい");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("秋", "涼しい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("秋", "暖かい");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("冬", "寒い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("冬", "暑い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
// // こちらのコードでも可能
// // 関数名をdescribeTheWeatherV2とする
// function describeTheWeatherV2(season, temp) {
//     // ここにコードを書きましょう
//     if ((season === "春" && temp === "暖かい") 
//     || (season === "夏" && temp === "暑い")  
//     || (season === "秋" && temp === "涼しい") 
//     || (season === "冬" && temp === "寒い")) {
//         return "この季節の平均的な気温です。";
//     } else {
//         return "この季節には珍しい気温です。";
//     }
// }
  
//   // テスト
//   actual = describeTheWeatherV2("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeatherV2("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeatherV2("夏", "暑い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeatherV2("夏", "涼しい");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeatherV2("秋", "涼しい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeatherV2("秋", "暖かい");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeatherV2("冬", "寒い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeatherV2("冬", "暑い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }


// *** hiroshi inagaki 稲垣 博司 ***

// // 課題１
// // 引数に人の名前（文字列型の値）を 1 つ取り、それを使って挨拶文を返す greeting という名前の関数を作成してください。下記のテストケースを実行して、期待通りの挨拶文がコンソールに表示されるようにしましょう。
// function greeting(name) {
//   return `Hello, ${name}!`;
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// // 課題２
// // average という名前の関数を宣言してください。この関数は引数として数値型の値を 2 つ取り、その 2 つの数の平均を返します。下記のテストケースを実行して、期待通りの数値がコンソールに表示されるようにしましょう。
// function average(num1, num2) {
//   return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// // 課題３
// // 関数 describeTheWeather を宣言してください。
// // 以下が、それぞれの季節の適切な温度です。
// // 春 --> 暖かい
// // 夏 --> 暑い
// // 秋 --> 涼しい
// // 冬 --> 寒い
// // もし与えられた温度が適切であれば、この季節の平均的な気温です を返してください。もしそうでなければ、この季節には珍しい気温です を返してください。
// // 用意されたテストをパスできていれば、コンソールに OK! Test PASSED. と表示されます。すべてのテストをパスしましょう。

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} sens - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, sens) {
//   // ここにコードを書きましょう
//   if (season === "春") {
//     if (sens === "暖かい") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else if (season === "夏") {
//     if (sens === "暑い") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else if (season === "秋") {
//     if (sens === "涼しい") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else if (season === "冬") {
//     if (sens === "寒い") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   }
// }

// let actual;
// let expected;

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** yasushi suzuki 鈴木 康史 ***

// // 問1
// function greeting(name){
//   return `Hello, ${name}!`;
// }

// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// // 問2
// function average(num1, num2){
//   return (num1 + num2) / 2
// }
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// //問3
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} feeling - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// function describeTheWeather(season, feeling) {
//   if(season === "春" && feeling === "暖かい"){
//     return "この季節の平均的な気温です。";
//   }else if(season === "春" && feeling === "暑い"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "春" && feeling === "涼しい"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "春" && feeling === "寒い"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "夏" && feeling === "暖かい"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "夏" && feeling === "暑い"){
//     return "この季節の平均的な気温です。";
//   }else if(season === "夏" && feeling === "涼しい"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "夏" && feeling === "寒い"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "秋" && feeling === "暖かい"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "秋" && feeling === "暑い"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "秋" && feeling === "涼しい"){
//     return "この季節の平均的な気温です。";
//   }else if(season === "秋" && feeling === "寒い"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "冬" && feeling === "暖かい"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "冬" && feeling === "暑い"){
//     return "この季節には珍しい気温です。";
//   }else if(season === "冬" && feeling === "涼しい"){
//     return "この季節には珍しい気温です。";
//   }else {
//     return "この季節の平均的な気温です。";
//   }
// }

// // テスト
// let actual = describeTheWeather("春", "暖かい");
// let expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** rin ito 伊藤 凛 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // 課題１

// function greeting(name){
//     return "Hello," + name + "!";
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"



// //課題２

// function average(num1, num2){
//     return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200



// //課題３

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// let actual;
// let expected;

// function describeTheWeather(season, temp) {
//     // ここにコードを書きましょう
//     if (season === "春" && temp === "暖かい"){
//         return actual = "この季節の平均的な気温です。";
//     }else if (season === "夏" && temp === "暑い"){
//         return actual = "この季節の平均的な気温です。";
//     }else if (season === "秋" && temp === "涼しい"){
//         return actual = "この季節の平均的な気温です。";
//     }else if (season === "冬" && temp === "寒い"){
//         return actual = "この季節の平均的な気温です。";
//     }else{
//         return actual = "この季節には珍しい気温です。";
//     }
//   }
  
//   // テスト
//   actual = describeTheWeather("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   // さらにテストを書いて、コードが正しいことを確認してください

//   actual = describeTheWeather("秋", "涼しい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }


// *** natsuki suzuki 鈴木 菜月 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function greeting(name){
//   if (typeof name === "string"){
//     return `Hello, ${name}!`;
//   }
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// function average(num1, num2){
//   if (typeof num1 === "number" && typeof num2 === "number"){
//     return (num1 + num2) / 2;
//   }
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// let actual;
// let expected;

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temperature) {
//   if (typeof season === "string" && typeof temperature === "string"){
//     if (season === "春" && temperature === "暖かい"){
//       return "この季節の平均的な気温です。";
//     } else if (season === "夏" && temperature === "暑い"){
//       return "この季節の平均的な気温です。";
//     } else if (season === "秋" && temperature === "涼しい"){
//       return "この季節の平均的な気温です。";
//     } else if (season === "冬" && temperature === "寒い"){
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   }
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** hiroyuki iijima 飯島 啓之 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // TDD用変数宣言
// let actual;
// let expected;


// // 課題１
// function greeting(name) {
//   return `Hello, ${name}!`;
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"


// // 課題２
// function average(numOne, numTwo) {
//   return (numOne + numTwo) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// // 課題３
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temperature) {
//   // 季節と気温の組み合わせが適切（下記のどれかに該当）な時
//   // 【春:暖かい、夏:暑い、秋:涼しい、冬:寒い】
//   if (season === "春" && temperature === "暖かい" 
//       || season === "夏" && temperature === "暑い"
//       || season === "秋" && temperature === "涼しい"
//       || season === "冬" && temperature === "寒い") {
//     return "この季節の平均的な気温です。";
//   } else {  // それ以外の時
//     return "この季節には珍しい気温です。";
//   }
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
  
// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
  
// // さらにテストを書いて、コードが正しいことを確認してください
// // 夏
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
  
// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // 秋
// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
  
// actual = describeTheWeather("秋", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // 冬
// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
  
// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** akihiro kaneko 金子 明弘 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //1
// function greeting(name) {
//     return `Hello, ${name}!`;
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"
// console.log(greeting("Akihiro")); // => "Hello, Akihiro!"
// console.log(greeting("Ken")); // => "Hello, Ken!"


// //2
// function average(num1, num2) {
//     return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200
// console.log(average(10, 30)); // => 40
// console.log(average(10000, 30000)); // =>20000 

// //3
// /**
//  * @param {"春"|"夏"|"秋"|"冬"}  season- 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} sensible - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// let actual;
// let expected;

// function describeTheWeather(season, sensible) {
//     // ここにコードを書きましょう
//     let spring = "春暖かい";
//     let summer = "夏暑い";
//     let fall = "秋涼しい";
//     let winter = "冬寒い";

//     if (season === "春" || season === "夏" ||season === "秋" ||season === "冬" ){
//         if (sensible === "暖かい" || sensible === "暑い" || sensible === "涼しい" || sensible === "寒い" ) {
//             if (season + sensible === spring ||season + sensible === summer || season + sensible === fall || season + sensible === winter) {
//                 return "この季節の平均的な気温です。";
//             } else {
//                 return "この季節には珍しい気温です。";
//             }
//         } else {
//             return "2つ目の引数に「暖かい、暑い、涼しい、寒い」いずれかを入れてください。";
//         }
//     } else {
//         return "1つ目の引数に「春、夏、秋、冬」いずれかを入れてください。";
//     }
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください

// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("暑い", "寒い");
// expected = "1つ目の引数に「春、夏、秋、冬」いずれかを入れてください。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "普通");
// expected = "2つ目の引数に「暖かい、暑い、涼しい、寒い」いずれかを入れてください。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("今の季節なに？", "秋かな？");
// expected = "1つ目の引数に「春、夏、秋、冬」いずれかを入れてください。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }


// *** soma ichihara 市原 壮馬 ***

// // 一問目
// /**
//  *  @param {string} name - 人の名前
//  *  @returns {string} nameの人の名前にあいさつ文を付けたもの
//  */

// // 変数の定義
// let name;

// // 関数の宣言
// function greeting (name){
//     return `Hello, ${name}!`;
// }


// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// let actual = greeting("Kana");
// let expected = "Hello, Kana!";

// if (actual === expected){
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test Failed. Try Agein!");
//     console.log("actual  :", actual);
//     console.log("expected:", expected);
// }




// // 二問目
// /**
//  * @param {number} num1 - 一つ目の数値
//  * @param {number} num2 - 二つ目の数値
//  * @returns {number} 二つの数値の平均値
//  */

// // 変数の定義
// let num1, num2;

// // 関数の宣言
// function average(num1, num2){
//     return (num1 + num2) / 2 ;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// actual = average(100,200);
// expected = 150;

// if (actual === expected){
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test Failed. Try Agein!");
//     console.log("actual  :", actual);
//     console.log("expected:", expected);
// }




// // 三問目
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} tem - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// // 変数の定義
// let season;
// let tem;

// // 関数の宣言
// function describeTheWeather(season, tem) {
//     if (season === "春"){                           //ここから春
//         if (tem === "暖かい"){
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     } else if (season === "夏"){                    //ここから夏
//         if (tem === "暑い"){
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     } else if (season === "秋"){                    //ここから秋
//         if (tem === "涼しい"){
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         } 
//     } else if (season === "冬"){                    //ここから冬
//         if (tem === "寒い"){
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     }
//   }
  
//   // テスト
//   actual = describeTheWeather("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   // さらにテストを書いて、コードが正しいことを確認してください

//   actual = describeTheWeather("夏", "暑い");
//   expected = "この季節の平均的な気温です。";

//   if (actual === expected){
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test Failed. Try Agein!");
//     console.log("actual  :", actual);
//     console.log("expected:", expected);
//   }


// *** beppuzono fumiya 別府園 史宅 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // 課題1

// function greeting(name) {
//     return `Hello, ${name}!`;
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"


// // 課題2

// function average(num1, num2) {
//     return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// // 課題3

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temperature) {
//     // ここにコードを書きましょう
//     if (season === "春") {
//         if (temperature === "暖かい") {
//             return "この季節の平均的な気温です。";
//         } else return "この季節には珍しい気温です。";
//     } else if (season === "夏") {
//         if (temperature === "暑い") {
//             return "この季節の平均的な気温です。";
//         } else return "この季節には珍しい気温です。";
//     } else if (season === "秋") {
//         if (temperature === "涼しい") {
//             return "この季節の平均的な気温です。";
//         } else return "この季節には珍しい気温です。";
//     } else if (season === "冬") {
//         if (temperature === "寒い") {
//             return "この季節の平均的な気温です。";
//         } else return "この季節には珍しい気温です。";
//     }
// }
  
// // テスト
// let actual = describeTheWeather("春", "暖かい");
// let expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください

// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// // 課題3別バージョン

// function describeTheWeather2(season, temperature) {
//     if (season === "春" && temperature === "暖かい" ||
//         season === "夏" && temperature === "暑い"   ||
//         season === "秋" && temperature === "涼しい" ||
//         season === "冬" && temperature === "寒い") {
//         return "この季節の平均的な気温です。";
//     } else return "この季節には珍しい気温です。";
// }


// // テスト
// actual = describeTheWeather2("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather2("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather2("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather2("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather2("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather2("秋", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather2("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather2("冬", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** tatsuya tempaku 天白 竜也 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //問1
// function greeting(name){
//   return `Hello, ${name}!`;
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"


// //問2
// function average(num1,num2){
//   return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// //問3
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// function describeTheWeather(season,temperature) {
//   if (season === "春" && temperature === "暖かい"){
//     return "この季節の平均的な気温です。";
//   } else if (season === "夏" && temperature === "暑い"){
//     return "この季節の平均的な気温です。";
//   } else if (season === "秋" && temperature === "涼しい"){
//     return "この季節の平均的な気温です。";
//   } else if (season === "冬" && temperature === "寒い"){
//     return "この季節の平均的な気温です。";
//   } else {
//     return "この季節には珍しい気温です。";
//   }
// }

// // テスト
// let actual = describeTheWeather("春", "暖かい");
// let expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "ちょうどいい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** haruka takahashi 高橋 悠 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //1
// function greeting(name){
//   return `Hello, ${name}!`;
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //2
// function average( num1, num2 ){
//   return ( num1 + num2 ) / 2 ;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// //3
// let actual;    //テスト用変数の宣言
// let expected;  //テストの期待値用変数の宣言

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"}  temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
// */

// function describeTheWeather(season, temperature) {

//   if (season === "春"){

//     if (temperature === "暖かい") {
//       return "この季節の平均的な気温です。";
//     } else if (temperature === "寒い" || temperature === "暑い" || temperature === "涼しい") {
//       return "この季節には珍しい気温です。";
//     } else {
//       return "気温は「暑い、寒い、暖かい、涼しい」から選んでください。"
//     }

//   } else if (season === "夏") {

//     if (temperature === "暑い") {
//       return "この季節の平均的な気温です。";
//     } else if (temperature === "寒い" || temperature === "暖かい" || temperature === "涼しい") {
//       return "この季節には珍しい気温です。";
//     } else {
//       return "気温は「暑い、寒い、暖かい、涼しい」から選んでください。"
//     }

//   } else if (season === "秋") {

//     if (temperature === "涼しい") {
//       return "この季節の平均的な気温です。";
//     } else if (temperature === "寒い" || temperature === "暑い" || temperature === "暖かい") {
//       return "この季節には珍しい気温です。";
//     } else {
//       return "気温は「暑い、寒い、暖かい、涼しい」から選んでください。"
//     }

//   } else if (season === "冬") {

//     if (temperature === "寒い") {
//       return "この季節の平均的な気温です。";
//     } else if (temperature === "暖かい" || temperature === "暑い" || temperature === "涼しい") {
//       return "この季節には珍しい気温です。";
//     } else {
//       return "入力値は「暑い、寒い、暖かい、涼しい」から選んでください。"
//     }

//   } else {
//     return "季節は「春夏秋冬」から選んでください。"
//   }

// }


// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください

// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("なつ", "暑い");
// expected = "季節は「春夏秋冬」から選んでください。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "あつい");
// expected = "気温は「暑い、寒い、暖かい、涼しい」から選んでください。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("なつ", "あつい");
// expected = "季節は「春夏秋冬」から選んでください。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", 25);
// expected = "気温は「暑い、寒い、暖かい、涼しい」から選んでください。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** tomohisa yoshida 吉田 知永 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function greeting(name){
//     return `"Hello, ${name}!"`;
// }

// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// function average(num1, num2){
//     return (num1 + num2) / 2
// }

// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temperature) {
//     // ここにコードを書きましょう
//     if(season === "春" && temperature === "暖かい"){
//         return "この季節の平均的な気温です。"
//     }else if(season === "春" && temperature === !"暖かい"){
//         return "この季節には珍しい気温です。";
//     }else if(season === "夏" && temperature === "暑い") {
//         return "この季節の平均的な気温です。";
//     }else if(season === "夏" && temperature === !"暑い"){
//         return "この季節には珍しい気温です。";
//     }else if(season === "秋" && temperature === "涼しい"){
//         return "この季節の平均的な気温です。";
//     }else if(season === "秋" && temperature === !"涼しい"){
//         return "この季節には珍しい気温です。";
//     }else if(season === "冬" && temperature === "寒い"){
//         return "この季節の平均的な気温です。";
//   　}else{
//     return "この季節には珍しい気温です。";
//     }
//   }
  
//   // テスト
//   let actual = describeTheWeather("春", "暖かい");
//   let expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   // さらにテストを書いて、コードが正しいことを確認してください
//   actual = describeTheWeather("冬", "寒い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("冬", "暖かい");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "暖かい");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "暑い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }


// *** shigeo mizuki 水木 茂雄 ***

// 'use strict'
// // １行目に記載している 'use strict'　は削除しないでください

// function greeting(name) {
//     return "Hello, " + name + "!";
// }
// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// function average(numA, numB) {
//     return (numA + numB) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} 冬 - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"}  寒い　- 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temperature) {
//     // ここにコードを書きましょう
//     if (season === "春" && temperature === "暖かい") {
//         return "この季節の平均的な気温です。";
//     } else if (season === "夏" && temperature === "暑い") {
//         return "この季節の平均的な気温です。";
//     } else if (season === "秋" && temperature === "涼しい") {
//         return "この季節の平均的な気温です。";
//     } else if (season === "冬" && temperature === "寒い") {
//         return "この季節の平均的な気温です。";
//     } else {
//         return "この季節には珍しい気温です。"
//     }
// }

// // テスト
// let actual = describeTheWeather("春", "暖かい");
// let expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }


// *** honoka tsutsumi 堤 帆乃香 ***

// //課題1
// function greeting(name) {
//   return ("Hello," + " " + name + "!");
// }

// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"


// //課題2
// function average(num1, num2) {
//   return ((num1 + num2) / 2);
// }

// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// //課題3
// /**
// * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
// * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
// * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
// */
// function describeTheWeather(season, temp) {
//   if (season === "春" && temp === "暖かい") {
//       return "この季節の平均的な気温です。";
//   } else if (season === "夏" && temp === "暑い") {
//       return "この季節の平均的な気温です。";
//   } else if (season === "秋" && temp === "涼しい") {
//       return "この季節の平均的な気温です。";
//   } else if (season === "冬" && temp === "寒い") {
//       return "この季節の平均的な気温です。";
//   } else {
//       return "この季節には珍しい気温です。"
//   }
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください
// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** masaki yamamiba 山見場 正樹 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// let  actual;
// let expected;
// // 1.
// // テスト
// function greeting(name) {
//   return `Hello. ${name}!`;
// }
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //2.

// function average(num1, num2) {
//   return ((num1 + num2) / 2); 
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200
// //3.

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temp) {
//   if (season === "春" && temp === "暖かい") {
//     return "この季節の平均的な気温です。";
//   } else if (season === "春" || temp !== "暖かい") {
//     return "この季節には珍しい気温です。";
//   } else if (season === "夏" && temp === "暑い") {
//     return "この季節の平均的な気温です。";
//   } else if (season === "夏" || temp !== "暖かい") {
//     return "この季節には珍しい気温です。";
//   } else if (season === "秋" && temp === "涼しい") {
//     return "この季節の平均的な気温です。";
//   } else if (season === "秋" || temp !== "暖かい") {
//     return "この季節には珍しい気温です。";   
//   } else if (season === "冬" && temp !== "寒い") {
//    return "この季節の平均的な気温です。";
//   } else if (season === "冬" || temp !== "暖かい") {
//    return "この季節には珍しい気温です。"; 
//   }
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }
// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// // さらにテストを書いて、コードが正しいことを確認してください


// *** yudai maruyama 丸山 佑大 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください


// // テスト
// const greeting = name => {
//   return `Hello, ${name}!`;
// }

// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"



// const average = (num1, num2) => {
//   return (num1 + num2) / 2;
// }
// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200



// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// let actual;
// let expected;

// function describeTheWeather(season, temp) {
//   if (season === "春") {
//     if (temp === "暖かい") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else if (season === "夏") {
//     if (temp === "暑い") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else if (season === "秋") {
//     if (temp === "涼しい") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else if (season === "冬") {
//     if (temp === "寒い") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   }
//   // ここにコードを書きましょう
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** yoshihiro ito 伊藤 嘉洋 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// function greeting(name) {
//   return "Hello, " + name + "!"
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// function average(num1, num2) {
//   return (num1 + num2) / 2
// }

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// //季節と気温が一致しているか判断し結果を返す
// function describeTheWeather(season, temperature) {
//   // ここにコードを書きましょう
//   if (season === "春" && temperature === "暖かい") {
//     return "この季節の平均的な気温です。"
//   } else if (season === "夏" && temperature === "暑い") {
//     return "この季節の平均的な気温です。"
//   } else if (season === "秋" && temperature === "涼しい") {
//     return "この季節の平均的な気温です。"
//   } else if (season === "冬" && temperature === "寒い") {
//     return "この季節の平均的な気温です。"
//   } else {
//     return "この季節には珍しい気温です。"
//   }
// }

// // テスト
// let actual = describeTheWeather("春", "暖かい");
// let expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください
// //春・暖かい
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("春・暖かい:OK! Test PASSED.");
// } else {
//   console.error("春・暖かい:Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// //春・暑い
// actual = describeTheWeather("春", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("春・暑い:OK! Test PASSED.");
// } else {
//   console.error("春・暑い:Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// //春・涼しい
// actual = describeTheWeather("春", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("春・涼しい:OK! Test PASSED.");
// } else {
//   console.error("春・涼しい:Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// //春・寒い
// actual = describeTheWeather("春", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("春・寒い:OK! Test PASSED.");
// } else {
//   console.error("春・寒い:Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

