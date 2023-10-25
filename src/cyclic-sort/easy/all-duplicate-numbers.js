/**
 * We are given an unsorted array containing n numbers taken from the range 1 to n.
 * The array has some numbers appearing twice.
 * Find all these duplicate numbers using constant space.
 *
 * Input: [3, 4, 4, 5, 5]
 * Output: [4, 5]
 *
 * Input: [5, 4, 7, 2, 3, 5, 3]
 * Output: [3, 5]
 */

// Time complexity - O(n * log(n))
// Space Complexity - O(1)
export function test(nums) {
  nums.sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }

  return nums.slice(0, j);
}

// Time complexity - O(n)
// Space Complexity - O(1)
export function test1(nums) {
  let i = 0;

  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  let duplicate = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicate.push(nums[i]);
    }
  }

  return duplicate;
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test2(nums) {
  const frequencyMap = {};
  let i = 0;

  while (i < nums.length) {
    const rightPosition = nums[i] - 1;
    if (nums[i] !== nums[rightPosition]) {
      [nums[i], nums[rightPosition]] = [nums[rightPosition], nums[i]];
    }
    i++;
  }

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;
  }

  return [...new Set(nums)].filter((el) => frequencyMap[el] > 1);
}

// Test cases
console.log(test([3, 4, 4, 5, 5])); // [4, 5]
console.log(test([5, 4, 7, 2, 3, 5, 3])); // [3, 5]

console.log(test1([3, 4, 4, 5, 5])); // [4, 5]
console.log(test1([5, 4, 7, 2, 3, 5, 3])); // [3, 5]

console.log(test2([3, 4, 4, 5, 5])); // [4, 5]
console.log(test2([5, 4, 7, 2, 3, 5, 3])); // [3, 5]
