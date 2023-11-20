/**
 * Given a sorted array of numbers, find if a given number ‘key’ is present in the array.
 * Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order.
 * You should assume that the array can have duplicates.
 *
 * Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.
 *
 * Input: [4, 6, 10], key = 10
 * Output: 2
 *
 * Input: [1, 2, 3, 4, 5, 6, 7], key = 5
 * Output: 4
 *
 * Input: [10, 6, 4], key = 10
 * Output: 0
 *
 * Input: [10, 6, 4], key = 4
 * Output: 2
 */

// Time complexity - O(log(n))
// Space Complexity - O(1)
export function test(array, key) {
  let start = 0;
  let end = array.length - 1;

  const isAscending = array[start] < array[end];

  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleValue = array[middleIndex];

    if (middleValue === key) return middleIndex;

    if (isAscending) {
      if (key > middleValue) {
        start = middleIndex + 1;
      } else {
        end = middleIndex - 1;
      }
    } else {
      if (key > middleValue) {
        end = middleIndex - 1;
      } else {
        start = middleIndex + 1;
      }
    }
  }

  return undefined;
}

// Test cases
console.log(test([4, 6, 10], 10)); // 2
console.log(test([1, 2, 3, 4, 5, 6, 7], 5)); // 4
console.log(test([10, 6, 4], 10)); // 0
console.log(test([10, 6, 4], 4)); // 2
