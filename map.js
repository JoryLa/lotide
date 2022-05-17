const words = ['Monkey', 'Pineapple', 'Godzilla', 'Pie', 'Spaceship'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);



const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed : [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : [${actual}] !== [${expected}]`);
  }

};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(words, results1);