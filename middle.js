const middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    let evenArr = [2];
    evenArr[0] = arr[(arr.length / 2) - 1];
    evenArr[1] = arr[(arr.length / 2)];
    return evenArr;
  } else if (arr.length % 2 === 1) {
    let oddArr = [1];
    oddArr[0] = arr[(arr.length - 1) / 2];
    return oddArr;
  }
};

module.exports = middle;

/* take array
 * check to see how long it is
 *

// middle funciton takes in an array and returns the middle-most element(s) of the given array.

/*
  1 or 2 elements
    middle([1]) // => []
    middle([1, 2]) // => []
*/

/*
  odd # of elements
    middle([1, 2, 3]) // => [2]
    middle([1, 2, 3, 4, 5]) // => [3]
*/

/*
  even # of elements
    middle([1, 2, 3, 4]) // => [2, 3]
    middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/


