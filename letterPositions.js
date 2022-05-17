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

 
const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!results[letter]) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};


const str = 'hello';
const result1 = letterPositions(str);
console.log(result1);
assertArraysEqual(letterPositions("hello").l, [2, 3]);