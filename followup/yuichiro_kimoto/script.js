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


  function evenOrOdd(array, isEven) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if ((isEven && num % 2 === 0) || (!isEven && num % 2 !== 0)) {
            result.push(num);
        }
    }
    return result;
}