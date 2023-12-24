import { MinHeap } from '../MinHeap.js';

/**
 * Given an unsorted array of numbers, find the ‘K’ largest numbers in it.
 *
 * Input: [3, 1, 5, 12, 2, 11], K = 3
 * Output: [5, 12, 11]
 *
 * Input: [5, 12, 11, -1, 12], K = 3
 * Output: [12, 11, 12]
 */

// Time complexity - O(k * log(k) + (n - k) * log(k)) ~ O(n * log(k))
// Space Complexity - O(k)
export function test(array, k) {
  const minHeap = new MinHeap();

  // O(k * log(k))
  for (let i = 0; i < k; i++) {
    minHeap.push(array[i]);
  }

  // O((n - k) * log(k))
  for (let i = k; i < array.length; i++) {
    if (array[i] > minHeap.getMin()) {
      minHeap.pop();
      minHeap.push(array[i]);
    }
  }

  return minHeap.heap;
}

// Test cases
console.log(test([3, 1, 5, 12, 2, 11], 3)); // [5, 11, 12]
console.log(test([5, 12, 11, -1, 12], 3)); // [11, 12, 12]
