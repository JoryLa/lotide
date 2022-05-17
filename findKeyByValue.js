const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestTeamBySport = {
  hockey: 'Vancouver Canucks',
  baseball: 'Toronto Blue Jays',
  basketball: 'Toronto Raptors'
};
assertEqual(findKeyByValue(bestTeamBySport, 'Vancouver Canucks'), 'hockey');
assertEqual(findKeyByValue(bestTeamBySport, 'Toronto Maple Leafs'), 'hockey');
assertEqual(findKeyByValue(bestTeamBySport, 'Vancouver Canucks'), undefined);
assertEqual(findKeyByValue(bestTeamBySport, 'Toronto Maple Leafs'), undefined);
assertEqual(findKeyByValue(bestTeamBySport, 'Toronto Raptors'), 'basketball');