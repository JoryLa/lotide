const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;



//REFERENCES
/*console.assert(1 === 1);
console.assert(1 === 1.1);

const sum = function(a, b) {
  return a + b;
};

console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3);

const sumBuggy = function(a, b) {
  return a * b;
};
console.assert(sumBuggy(1, 2) === 3);*/