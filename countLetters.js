const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }

};

/* Empty object so that assert function can access elements of our string.
  * Loops through each letter/element in the sentence param (ie a string).{
  * If letters/elements  in sentence(string) param are true within the
  * Loops through each letter/element in the sentence param (ie a string).{ /* If letters/elements  in sentence(string) param are
    true  within the lettersToCount param (ie an object of letters(keys) and values(true or false(all true))), move onto inner conditional
  * Inner conditional: If
  */

const countLetters = function(sentence) {
  const results = {};
  let onlyLetters = sentence.split(' ').join('');
  for (const letter of onlyLetters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const str = 'we all live in a yellow submarine';

const result1 = countLetters(str);
console.log(result1);
assertEqual(result1, str);
