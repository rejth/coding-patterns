/**
 * We are given an unsorted array containing numbers taken from the range 1 to ‘n’.
 * The array can have duplicates, which means some numbers will be missing.
 * Find all those missing numbers.
 *
 * Input: [2, 3, 1, 8, 2, 3, 5, 1]
 * Output: 4, 6, 7
 * Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
 *
 * Input: [2, 4, 1, 2]
 * Output: 3
 *
 * Input: [2, 3, 2, 1]
 * Output: 4
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(nums) {
  const missing = [];
  const unique = new Set(nums);
  const len = nums.length;

  let i = 0;

  while (i < len) {
    const rightPosition = nums[i] - 1;
    if (nums[i] < len && nums[i] !== nums[rightPosition]) {
      [nums[i], nums[rightPosition]] = [nums[rightPosition], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < len; i++) {
    const rightPosition = nums[i] - 1;
    const missingNumber = i + 1;
    if (!unique.has(missingNumber) && nums[i] !== rightPosition) {
      missing.push(missingNumber);
    }
  }

  return missing;
}

// Test cases
console.log(test([2, 3, 1, 8, 2, 3, 5, 1])); // 4, 6, 7
console.log(test([2, 4, 1, 2])); // 3
console.log(test([2, 3, 2, 1])); // 4
