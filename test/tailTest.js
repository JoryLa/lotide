const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [3, 6] for [16, 3, 6]", () => {
    assert.deepEqual(tail([16, 3, 6]), [3, 6]); 
  });
});


/*const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

// Checks original array.
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); 
assertEqual(words.length, 3);

const num = tail([16,3,6]);
assertEqual(num.length, 2);
assertEqual(num[0], 3);
assertEqual(num[1], 6);*/