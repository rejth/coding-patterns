/**
 * Given an array of n-1 integers in the range from 1 to n.
 * Find the one number that is missing from the array.
 *
 * Input: 1, 5, 2, 6, 4
 * Answer: 3
 */

// Time complexity - O(n)
// Space Complexity - O(1)
// The problem - while finding the sum of numbers from 1 to n, we can get integer overflow when n is large.
export function test1(nums) {
  const sum1 = nums.reduce((acc, n) => (acc += n), 0);

  let sum2 = 0;
  for (let i = 1; i <= nums.length + 1; i++) {
    sum2 += i;
  }

  return sum2 - sum1;
}

// Time complexity - O(n)
// Space Complexity - O(1)
export function test(nums) {
  let i = 0;
  const n = nums.length;

  while (i < n) {
    const rightPosition = nums[i] - 1;
    if (nums[i] < n && nums[i] !== nums[rightPosition]) {
      [nums[i], nums[rightPosition]] = [nums[rightPosition], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] - 1 !== i) return i + 1;
  }

  return nums;
}

// Time complexity - O(n)
// Space Complexity - O(1)
// We will not have any integer overflow problem
export function test2(nums) {
  let x1 = nums[0];
  for (let i = 1; i < nums.length; i++) {
    x1 = x1 ^ nums[i];
  }

  let x2 = 1;
  for (let i = 2; i <= nums.length + 1; i++) {
    x2 = x2 ^ i;
  }

  return x1 ^ x2;
}

// Test cases
console.log(test([1, 5, 2, 6, 4])); // 3
console.log(test([6, 3, 5, 1, 2])); // 4

console.log(test1([1, 5, 2, 6, 4])); // 3
console.log(test1([6, 3, 5, 1, 2])); // 4

console.log(test2([1, 5, 2, 6, 4])); // 3
console.log(test2([6, 3, 5, 1, 2])); // 4
console.log(test1([3, 0, 1])); // 2
