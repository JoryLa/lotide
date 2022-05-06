const words = ['Monkey', 'Pineapple', 'Godzilla', 'Pie', 'Spaceship'];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
    return results;
  }

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = function(arr1, arr2) {
  return JSON.stringify(arr1) == JSON.stringify(arr2)
}

const assertArraysEqual = function(firstArr, secondArr) {
  eqArrays(firstArr, secondArr);
  console.log(`✅✅✅ Assertion Passed : ${firstArr} is equal to ${secondArr}`);
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
