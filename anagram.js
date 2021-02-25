/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as cinema, formed from iceman.
*/
function anagram(char1, char2) {
  if (char1.length !== char2.length) {
    return false;
  }
  let lookup = {};

  for (let element of char1) {
    lookup[element] ? (lookup[element] += 1) : (lookup[element] = 1);
  }
  console.log(lookup);

  for (let element of char2) {
    if (!lookup[element]) {
      return false;
    } else {
      lookup[element] -= 1;
    }
  }
  return true;
}

console.log(anagram("rat", "car")); // -> false
console.log(anagram("cinema", "iceman")); // -> true
