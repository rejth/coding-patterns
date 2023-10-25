/**
 * Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place.
 * The relative order of the elements should be kept the same, and you should not use any extra space.
 * So the solution has constant space complexity i.e., O(1).
 *
 * Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.
 *
 * Input: [2, 3, 3, 3, 6, 9, 9]
 * Output: 4
 * Explanation: The first four elements after moving element will be [2, 3, 6, 9].
 */

// Time complexity - O(n)
// Space Complexity - O(1)
// TODO: doesn't work properly
export function test(array) {
  let i = 0;
  let j = i;
  let uniqueSubArrayLength = 0;

  while (i < array.length) {
    if (j === array.length - 1) return uniqueSubArrayLength;

    while (array[i] === array[j + 1]) {
      j++;
    }

    if (array[i] !== array[j + 1]) {
      array[i + 1] = array[j + 1];
      uniqueSubArrayLength++;
    }

    i++;
  }

  return uniqueSubArrayLength;
}

// Time complexity - O(n)
// Space Complexity - O(1)
function test2(array) {
  let nextNonDuplicate = 1;
  let i = 0;

  while (i < array.length) {
    if (array[nextNonDuplicate - 1] !== array[i]) {
      array[nextNonDuplicate] = array[i];
      nextNonDuplicate++;
    }

    i++;
  }

  return nextNonDuplicate;
}

// Test cases
console.log(test([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(test([2, 2, 2, 11])); // 2
console.log(test([1, 1, 2, 2, 3, 3, 4, 4])); // 4

console.log(test2([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(test2([2, 2, 2, 11])); // 2
console.log(test2([1, 1, 2, 2, 3, 3, 4, 4])); // 4
