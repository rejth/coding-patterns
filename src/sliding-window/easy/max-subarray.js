/**
 * Given an array of positive numbers and a positive number 'k,'
 * Find the maximum sum of any contiguous subarray of size 'k'.
 *
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */

// Time complexity - O(n * k)
// Space Complexity - O(1)
export function test(array, k) {
  let maxSum = 0;
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (k > array.length - i) break;
    sum += array[i];

    for (let j = i + 1; counter < k - 1; j++) {
      sum += array[j];
      counter++;
    }

    maxSum = sum > maxSum ? sum : maxSum;
    sum = 0;
    counter = 0;
  }

  return maxSum;
}

// Time complexity - O(n)
// Space Complexity - O(1)
export function test2(array, k) {
  let windowStart = 0;
  let windowSum = 0;
  let maxSum = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = windowSum > maxSum ? windowSum : maxSum;
      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}

// Test cases
console.log(test([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(test([2, 3, 4, 1, 5], 2)); // 7

console.log(test2([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(test2([2, 3, 4, 1, 5], 2)); // 7
