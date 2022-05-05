



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr1, arr2) {
   return JSON.stringify(arr1) == JSON.stringify(arr2)
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
