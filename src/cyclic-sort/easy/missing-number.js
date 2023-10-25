/**
 * We are given an array containing n distinct numbers taken from the range 0 to n.
 * Since the array has only n numbers out of the total n+1 numbers.
 * Find the missing number.
 *
 * Input: [4, 0, 3, 1]
 * Output: 2
 *
 * Input: [8, 3, 5, 2, 4, 6, 0, 1]
 * Output: 7
 */

// Time complexity - O(n)
// Space Complexity - O(1)
export function test(nums) {
  let i = 0;
  const n = nums.length;

  while (i < n) {
    const rightPosition = nums[i];
    if (nums[i] < n && nums[i] !== nums[rightPosition]) {
      [nums[i], nums[rightPosition]] = [nums[rightPosition], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < n; i++) {
    if (nums[i] !== i) return i;
  }

  return nums;
}

// Test cases
console.log(test([4, 0, 3, 1])); // 2
console.log(test([8, 3, 5, 2, 4, 6, 0, 1])); // 7
