/**
 * Given an array nums, containing N integers.
 *
 * A 132 pattern consists of three numbers, say x, y, and z, where x < z and z < y.
 * This is often referred to as a '132' pattern because if we represent x, y, and z as 1, 3, and 2, respectively, it mimics the positional pattern in '132'.
 *
 * Return true if such a pattern exists within a given sequence of numbers. Otherwise, return false.
 *
 * Input: nums = [3, 5, 0, 3, 4]
 * Expected Output: True
 * Justification: Here, 3 < 4 and 4 < 5, forming a '132' pattern with the numbers 3, 5, and 4.
 *
 * Input: nums = [1, 2, 3, 4]
 * Expected Output: False
 * Justification: The sequence is in ascending order, and no '132' pattern is present.
 *
 * Input: nums = [9, 11, 8, 9, 10, 7, 9]
 * Expected Output: True
 * Justification: The pattern is formed with 9 < 10 and 10 < 11.
 */

/**
 * Algorithm and complexity:
 *
 * Time complexity - O()
 * Space complexities - O()
 */
export function test(nums) {
  let z = -Infinity;
  const setNums = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < z) return true;
    while (setNums.length > 0 && setNums[setNums.length - 1] < nums[i]) {
      z = setNums.pop();
    }

    setNums.push(nums[i]);
  }

  return false;
}

// Test cases
console.log(test([3, 5, 0, 3, 4])); // True

console.log(test([1, 2, 3, 4])); // False

console.log(test([9, 11, 8, 9, 10, 7, 9])); // True
