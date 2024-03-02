/**
 * You have an array of length n, which was initially sorted in ascending order.
 * This array was then rotated x times. It is given that 1 <= x <= n.
 *
 * Rotating a sorted list means shifting its elements by a certain number of positions.
 * The rotation is done in a circular manner, so the elements that are shifted off from one end of the list reappear at the opposite end.
 * This operation can be performed in both left and right directions.
 * For example, if you rotate [1, 2, 3, 4] array 3 times, the resultant array is [2, 3, 4, 1].
 *
 * Your task is to find the minimum element from this array. Note that the array contains unique elements.
 * It's worth noting that if a list is already sorted, rotating it doesn't change its sorted order.
 * It just changes the starting point.
 *
 * You must write an algorithm that runs in O(log n) time.
 *
 * Input: [8, 1, 3, 4, 5]
 * Expected Output: 1
 * Justification: The smallest number in the array is 1.
 *
 * Input: [4, 5, 7, 8, 0, 2, 3]
 * Expected Output: 0
 * Justification: The smallest number in the array is 0.
 *
 * Input: [7, 9, 12, 3, 4, 5]
 * Expected Output: 3
 * Justification: In this rotated array, the smallest number present is 3.
 */

/**
 * Time complexity - O(log(n))
 * Space complexity - O(1)
 */
export function test(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[end]) {
      // the smallest value is somewhere to the right
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      // the smallest value is somewhere to the left
      end = mid;
    } else {
      // handle the case where there are duplicates
      end--;
    }
  }

  return nums[start];
}

// Test cases
console.log(test([3, 1, 2])); // 1
console.log(test([8, 1, 3, 4, 5])); // 1
console.log(test([4, 9, 7, 8, 0, 2, 3])); // 0
console.log(test([7, 9, 12, 3, 4, 5])); // 3
