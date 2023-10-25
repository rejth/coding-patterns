/**
 * Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 *
 * Input: [-3, 0, 1, 2, -1, 1, -2]
 * Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
 * Explanation: There are four unique triplets whose sum is equal to zero. smallest sum.
 */

// Time complexity - O()
// Space Complexity - O()
export function test(array) {
  const triplets = [];

  array.sort((a, b) => a - b);

  return triplets;
}

// Test cases
console.log(test([-3, 0, 1, 2, -1, 1, -2])); // [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
console.log(test([-5, 2, -1, -2, 3])); // [[-5, 2, 3], [-2, -1, 3]]
