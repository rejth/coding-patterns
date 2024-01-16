/**
 * You are given an array of integers nums and an integer target.
 * Your task is to find two distinct indices i and j such that the sum of nums[i] and nums[j] is equal to the target.
 * You can assume that each input will have exactly one solution, and you may not use the same element twice.
 *
 * Input: [3, 2, 4], 6
 * Expected Output: [1, 2]
 * Justification: nums[1] + nums[2] gives 2 + 4 which equals 6.
 *
 * Input: [-1, -2, -3, -4, -5], -8
 * Expected Output: [2, 4]
 * Justification: nums[2] + nums[4] yields -3 + (-5) which equals -8.
 *
 * Input: [10, 15, 20, 25, 30], 45
 * Expected Output: [1, 4]
 * Justification: nums[1] + nums[3] gives 15 + 30, which equals 45.
 */

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function test(nums, target) {
  const indices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in indices) return [indices[complement], i];
    indices[nums[i]] = i;
  }
}

console.log(test([3, 2, 4], 6)); // [1, 2]
console.log(test([-1, -2, -3, -4, -5], -8)); // [2, 4]
console.log(test([10, 15, 20, 25, 30], 45)); // [2, 3]
