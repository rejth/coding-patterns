/**
 * Find the maximum value in a given Bitonic array.
 * An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
 * Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].
 *
 * Example 1:
 *
 * Input: [1, 3, 8, 12, 4, 2]
 * Output: 12
 * Explanation: The maximum number in the input bitonic array is "12"
 * Example 2:
 *
 * Input: [3, 8, 3, 1]
 * Output: 8
 * Example 3:
 *
 * Input: [1, 3, 8, 12]
 * Output: 12
 * Example 4:
 *
 * Input: [10, 9, 8]
 * Output: 10
 */

// Time complexity - O(log(n))
// Space Complexity - O(1)
export function test(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    // at this point we are in the descending part
    // that mean the target value could be before this part
    if (array[mid] > array[mid + 1]) {
      end = mid;
      // at this point we are in the ascending part
      // that mean the target value could be after this part
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop, 'start === end'
  return array[start];
}

// Test cases
console.log(test([1, 3, 8, 12, 4, 2])); // 12
console.log(test([3, 8, 3, 1])); // 7
console.log(test([1, 3, 8, 12])); // 12
console.log(test([10, 9, 8])); // 10
