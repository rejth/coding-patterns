/**
 * Given an array of positive integers and a number ‘S’.
 * Find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'.
 * Return 0 if no such subarray exists.
 *
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
 *
 * Input: [2, 1, 5, 2, 8], S=7
 * Output: 1
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
 */

// Time complexity - O(n)
// Space Complexity - O(1)
export function test(array, s) {
  if (!array.length) return 0;

  let start = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];

    while (sum >= s) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= array[start];
      start++;
    }
  }

  if (minLength === Infinity) return 0;
  return minLength;
}

// Test cases
console.log(test([2, 1, 5, 2, 3, 2], 7)); // 2 ([5, 2])
console.log(test([2, 1, 5, 2, 8], 7)); // 1 ([8])
console.log(test([3, 4, 1, 1, 6], 8)); // 3 ([3, 4, 1] or [1, 1, 6])
