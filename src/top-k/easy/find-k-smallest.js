import { MinHeap } from '../MinHeap.js';
import { MaxHeap } from '../MaxHeap.js';

/**
 * Given an unsorted array of numbers, find Kth the smallest number in it.
 * Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.
 *
 * Input: [1, 5, 12, 2, 11, 5], K = 3
 * Output: 5
 * Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].
 *
 * Input: [1, 5, 12, 2, 11, 5], K = 4
 * Output: 5
 * Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].
 *
 * Input: [5, 12, 11, -1, 12], K = 3
 * Output: 11
 * Explanation: The 3rd smallest number is '11', as the first two small numbers are [5, -1].
 */

// Time complexity - O(k * log(k) + (n - k) * log(k)) ~ O(n * log(k))
// Space Complexity - O(k)
export function test(array, k) {
  const maxHeap = new MaxHeap();

  // O(k * log(k))
  for (let i = 0; i < k; i++) {
    maxHeap.push(array[i]);
  }

  // O((n - k) * log(k))
  for (let i = k; i < array.length; i++) {
    if (array[i] < maxHeap.getMax()) {
      maxHeap.pop();
      maxHeap.push(array[i]);
    }
  }

  return maxHeap.getMax();
}

// Test cases
console.log(test([1, 5, 12, 2, 11, 5], 3)); // 5
console.log(test([1, 5, 12, 2, 11, 5], 4)); // 5
console.log(test([5, 12, 11, -1, 12], 3)); // 11
