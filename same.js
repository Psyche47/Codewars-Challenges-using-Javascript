/*
Write a function same, which accepts two arrays. The function
should return true if every value in the arrays has it's 
correponding value squared in the second array. The frequency
of values must be the same.
*/

function sameArray(arr1, arr2) {
  // Complexity O(n * n)
  if (arr1.length !== arr2.length) {
    return false;
  }
  let arrLen = arr1.length;
  for (let i = 0; i < arrLen; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function sameWithObj(arr1, arr2) {
  // Complexity O(n)
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let element of arr1) {
    frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
  }

  for (let element of arr2) {
    frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameArray([1, 4, 3], [1, 9, 4])); // -> false
console.log(sameArray([1, 4, 3], [1, 16, 9])); // -> true
console.log(sameWithObj([1, 4, 3], [1, 9, 4])); // -> false
console.log(sameArray([1, 4, 3], [1, 16, 9])); // -> true
