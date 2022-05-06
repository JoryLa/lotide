const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }

};

const tail = function(array){
  return array.slice(1);
}

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs'); 

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); 
assertEqual(words.length, 3);

const num = tail([16,3,6]);
assertEqual(num.length, 2);
assertEqual(num[0], 3);
assertEqual(num[1], 6);
