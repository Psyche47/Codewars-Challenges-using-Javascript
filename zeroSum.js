/*
Write a function called sumZero which accepts a sorted array
of integers. The function should find the first pair where
the sum is 0. Return an array that includes both values that
sum to zero or undefined if a pair does not exist.
*/

let sumZeroNaive = (arr) => {
  let arrlen = arr.length;
  for (let i = 0; i < arrlen; i++) {
    // Complexity O(n*n)
    for (let j = i + 1; j < arrlen; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

let sumZeroImproved = (arr) => {
  let left = 0,
    sum;
  let right = arr.length - 1;
  while (left < right) {
    //  Complexity O(n)
    sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZeroNaive([-4, -3, -2, -1, 0, 1, 2])); // -> [ -2, 2 ]
console.log(sumZeroNaive([-4, -3, -2, -1, 0, 23])); // -> undefined
console.log(sumZeroImproved([-4, -3, -2, -1, 0, 1, 2])); // -> [ -2, 2 ]
console.log(sumZeroImproved([-4, -3, -2, -1, 0, 23])); // -> undefined
