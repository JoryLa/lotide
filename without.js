const assertArraysEqual = require('./assertArraysEqual');

const without = function(sourceArr, itemsRemArr) {  
  let copyArr = [...sourceArr];
  for (let i = 0; i < copyArr.length; i++) {
    for (let j = 0; j < itemsRemArr.length; j++) {  
      if (itemsRemArr[j] === copyArr[i]) {                   
        copyArr.splice(i, 1);                
      }
    }
  }
  return copyArr;
}



console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without(['apple', 'Oh Henry!', 'Reese Cups', 'toothbrush', 'Tootsie Roll'], ['apple', 'toothbrush', 'Tootsie Roll'])) // => ['Oh Henry!', 'Reese Cups']

//console.log(without(['😇', ['🔥', '🛑'], '🥳', ['😎', '👎', '😸'], '👍'], [['😎', '👎', '😸']])) 
// =>  ['😇', ['🔥','🛑'], '🥳', '👍']