/**
 * We are given an unsorted array containing n+1 numbers taken from the range 1 to n.
 * The array has only one duplicate, but it can be repeated multiple times.
 * Find that duplicate number without using any extra space.
 * You are, however, allowed to modify the input array.
 *
 * Input: [1, 4, 4, 3, 2]
 * Output: 4
 *
 * Input: [2, 1, 3, 3, 5, 4]
 * Output: 3
 *
 * Input: [2, 4, 1, 4, 4]
 * Output: 4
 */

// Time complexity - O(n * log(n))
// Space Complexity - O(1)
export function test(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }

  return null;
}

// Time complexity - O(n)
// Space Complexity - O(1)
export function test2(nums) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === i + 1) {
      i++;
    } else {
      const j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else {
        return nums[i];
      }
    }
  }
}

// Time complexity - O(n)
// Space Complexity - O(1)
export function test3(nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[slow]];
  }

  return slow;
}

// Test cases
console.log(test([1, 4, 4, 3, 2])); // 4
console.log(test([2, 1, 3, 3, 5, 4])); // 3
console.log(test([2, 4, 1, 4, 4])); // 4

console.log(test2([1, 4, 4, 3, 2])); // 4
console.log(test2([2, 1, 3, 3, 5, 4])); // 3
console.log(test2([2, 4, 1, 4, 4])); // 4

console.log(test3([1, 4, 4, 3, 2])); // 4
console.log(test3([2, 1, 3, 3, 5, 4])); // 3
console.log(test3([2, 4, 1, 4, 4])); // 4
