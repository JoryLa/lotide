

const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2)
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed : [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : [${actual}] !== [${expected}]`);
  }

};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);