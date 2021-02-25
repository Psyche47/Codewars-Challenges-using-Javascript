/*
Write a function called maxSubarraySum which accepts an array of integers and number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/

function maxSubarraySumNaive(arr, num) {
  // Complexity O(n*n)
  let arrLength = arr.length;
  if (arrLength < num) return null;
  let max = -Infinity;
  for (let i = 0; i < arrLength - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

function maxSubarraySumImproved(arr, num) {
  // Complexity O(n)
  let arrLength = arr.length;
  if (arrLength < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arrLength; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log(tempSum, maxSum);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumNaive([1, 2, 3, 5, 4, 5, 3, 5, 7, 1, 2, 3], 3)); // -> 15
console.log(maxSubarraySumImproved([1, 2, 3, 5, 4, 5, 3, 5, 7, 1, 2, 3], 3)); // -> 15
