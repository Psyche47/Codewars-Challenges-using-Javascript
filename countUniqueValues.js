/*
Implement a function called countUniqueValues which appects
a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always
be sorted.
*/
function countUniqueValues(arr) {
  let arrLength = arr.length;
  if (arrLength === 0) return 0;
  let i = 0;
  for (let j = 1; j < arrLength; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8])); // -> 8
console.log(countUniqueValues([])); // -> 0
