/**
 * Given an unsorted array of numbers.
 * Find the top ‘K’ frequently occurring numbers in it.
 *
 * Input: [1, 3, 5, 12, 11, 12, 11], K = 2
 * Output: [12, 11]
 * Explanation: Both '11' and '12' appeared twice.
 *
 * Input: [5, 12, 11, 3, 11], K = 2
 * Output: [11, 5] or [11, 12] or [11, 3]
 * Explanation: Only '11' appeared twice, all other numbers appeared once.
 */
import { Heap } from '../Heap.js';

// Time complexity - O(n * log(n))
// Space Complexity - O(n)
export function test(array, k) {
  const map = array.reduce((previous, current) => {
    const frequency = previous.get(current);
    previous.set(current, (frequency ?? 0) + 1);
    return previous;
  }, new Map());

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((n) => n[0]);
}

// Time complexity - O(n + n * log(k))
// Space Complexity - O(n)
export function test1(array, k) {
  const minHeap = new Heap((a, b) => a[1] - b[1]);

  // O(n)
  const frequencyMap = array.reduce((previous, current) => {
    const value = previous.get(current);
    previous.set(current, (value ?? 0) + 1);
    return previous;
  }, new Map());

  // O(n)
  const frequencyEntries = [...frequencyMap.entries()];

  // O(k * log(k))
  for (let i = 0; i < k; i++) {
    minHeap.push(frequencyEntries[i]);
  }

  // O((n - k) * log(k))
  for (let i = k; i < frequencyEntries.length; i++) {
    const [num, count] = frequencyEntries[i];
    const smallestCount = minHeap.peak()[1];
    if (count > smallestCount) {
      minHeap.pop();
      minHeap.push([num, count]);
    }
  }

  // O(k)
  return minHeap.heap.map((n) => n[0]);
}

// Test cases
console.log(test([1, 3, 5, 12, 11, 12, 11], 2)); // [12, 11]
console.log(test([5, 12, 11, 3, 11], 2)); // [11, 5] or [11, 12] or [11, 3]
