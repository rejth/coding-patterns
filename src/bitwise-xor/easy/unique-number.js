/**
 * In a non-empty array of integers, every number appears twice except for one
 * Find that single unique number.
 *
 * Input: 1, 4, 2, 1, 3, 2, 3
 * Output: 4
 *
 * Input: 7, 9, 7
 * Output: 9
 */

// Time complexity - O(n)
// Space Complexity - O(1)
export function test(nums) {
  let unique = nums[0];

  for (let i = 1; i < nums.length; i++) {
    unique = unique ^ nums[i];
  }

  return unique;
}

// Test cases
console.log(test([1, 4, 2, 1, 3, 2, 3])); // 4
console.log(test([7, 9, 7])); // 9
