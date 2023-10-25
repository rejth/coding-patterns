/**
 * Given an array of numbers sorted in ascending order and a target sum.
 * Find a pair in the array whose sum is equal to the given target.
 *
 * Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
 *
 * Input: [1, 2, 3, 4, 6], target=6
 * Output: [1, 3]
 * Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(array, target) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    const sum = array[i] + array[j];
    if (sum === target) return [i, j];
    else if (sum > target) j--;
    else i++;
  }
}

// Test cases
console.log(test([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(test([2, 5, 9, 11], 11)); // [0, 2]
