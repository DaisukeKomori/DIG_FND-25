//問1
// ここにコードを書きましょう
function evenOrOdd(numArray, bool) {
  const result = [];
  if (bool) {
    for (const num of numArray) {
      if (num % 2 === 0) {
        result.push(num);
      }
    }
  } else {
    for (const num of numArray) {
      if (num % 2 !== 0) {
        result.push(num);
      }
    }
  }
  return result;
}
console.log("問1");
console.log(evenOrOdd([1, 2, 3, 4, 5], true)); // [2, 4]
console.log(evenOrOdd([0, 4, 36], false)); // []
console.log(evenOrOdd([-1, -2, 4, -5, -7], false)); // [-1, -5, -7]

//問2
// ここにコードを書きましょう
function findKeys(obj, value) {
  const result = [];
  for (const key in obj) {
    if (obj[key] === value) {
      result.push(key);
    }
  }
  return result;
}
console.log("問2");
console.log(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2)); // ["b", "e"]
console.log(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello")); // ["c", "d"]

//問3
// ここにコードを書きましょう
function buildObject(keyArray, valueArray) {
  let result = {};
  let count = 0
  for (const key of keyArray) {
    result[key];
  }
  for (const value of valueArray) {
    result[keyArray[count]] = value
    count += 1
  }
  return result; 
}
console.log("問3");
console.log(buildObject(["a", "b", "c"], [1, 2, 3])); // {"a": 1, "b": 2, "c": 3}
console.log(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"])); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
console.log(buildObject(["cat", "dog", "duck"], [null, 0, NaN])); // {"cat": null, "dog": 0, "duck": NaN}
console.log(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]));  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//問4
// ここにコードを書きましょう
function add(x) {
  function innerFunc(y) {
    return x + y;
  }
  return innerFunc;
}
const addTwo = add(2);
console.log("問4");
console.log(addTwo(3)); // 5
console.log(addTwo(70)); // 72

const addOneHundred = add(100);
console.log(addOneHundred(3)); // 103

//問5
console.log("問5");
console.log(
  "fooを表示するのでsayHello()が実行されHelloが表示されます。\
  戻り値が設定されていないのでundefinedが表示されます。\
  その後barを表示するのでsayHelloAndNameが実行されてHelloHello, JavaScriptが表示されます。"
)

//問6
console.log("時間切れでここまでしかできませんでした")