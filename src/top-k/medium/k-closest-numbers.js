/**
 * Given a sorted number array and two integers ‘K’ and ‘X’.
 * Find ‘K’ closest numbers to ‘X’ in the array.
 * Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.
 *
 * Input: [5, 6, 7, 8, 9], K = 3, X = 7
 * Output: [6, 7, 8]
 *
 * Input: [2, 4, 5, 6, 9], K = 3, X = 6
 * Output: [4, 5, 6]
 *
 * Input: [2, 4, 5, 6, 9], K = 3, X = 10
 * Output: [5, 6, 9]
 */

import { Heap } from '../Heap.js';

/**
 * 1. iterate through the array and build a Hash Map, where a key is Element, value - |X - Element|
 * 2. iterate over K keys of the Hash Map and populate the Max Heap
 * 3. iterate over N - K keys of the Hash Map and on each step do:
 *    a. if a value of the current [key, value] element is less than the max value of the Heap:
 *      - pop the max [key, value] element out of the Heap
 *      - push the current [key, value] to the Heap
 * 4. so we have K the smallest [key, value] elements in the Heap
 * 5. return only keys
 *
 * time complexity ~ O(n + n * log(k))
 * space complexity - O(n)
 */
export function test(array, K, X) {
  const maxHeap = new Heap((a, b) => b[1] - a[1]);

  // O(n)
  const map = array.reduce((previous, current) => {
    previous.set(current, Math.abs(X - current));
    return previous;
  }, new Map());

  // O(n)
  const entries = [...map.entries()];

  // O(k * log(k))
  for (let i = 0; i < K; i++) {
    maxHeap.push(entries[i]);
  }

  // O((n - k) * log(k))
  for (let i = K; i < entries.length; i++) {
    const [key, value] = entries[i];
    const [, maxValue] = maxHeap.peak();
    if (value < maxValue) {
      maxHeap.pop();
      maxHeap.push([key, value]);
    }
  }

  // O(k + log(k))
  return maxHeap.heap.map((el) => el[0]).sort((a, b) => a - b);
}

// Test cases (the results are not sorted properly)
console.log(test([5, 6, 7, 8, 9], 3, 7)); // [6, 7, 8]
console.log(test([2, 4, 5, 6, 9], 3, 6)); // [4, 5, 6]
console.log(test([2, 4, 5, 6, 9], 3, 10)); // [5, 6, 9]

/**
 * 1. since X might not be present in the sorted array, we will have to find the closest Y element to X
 * 2. find the closest Y element to X using Binary Search
 * 3. now the K closest elements to Y are the adjacent elements to Y in the array
 * 4. we can go in both directions to find the closest adjacent elements
 * 5. iterate over K elements in both directions and push them in a Min Heap sorted by their absolute difference from X.
 * 6. return top K element from the Heap
 *
 * time complexity - O(log(n) + k * log(k))
 * space complexity - O(n)
 */
export function test1(array, K, X) {
  if (array.length < K) return [];

  const minHeap = new Heap((a, b) => a[1] - b[1]);

  const binarySearch = () => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      const value = array[middle];

      if (Math.abs(value - X) <= 1) return middle;

      if (X > value) start = middle + 1;
      else end = middle - 1;
    }
  };

  // O(log(n))
  const closestIndexToX = binarySearch();

  // O(k * log(k))
  let count = K;
  for (let i = closestIndexToX; i < array.length && count > 0; i++) {
    const current = array[i];
    minHeap.push([current, Math.abs(current - X)]);
    count--;
  }

  // O(k * log(k))
  count = K;
  for (let i = closestIndexToX - 1; i >= 0 && count > 0; i--) {
    const current = array[i];
    minHeap.push([current, Math.abs(current - X)]);
    count--;
  }

  // O(k * log(k))
  return minHeap
    .getTopKElements(K)
    .map((el) => el[0])
    .sort((a, b) => a - b);
}

// Test cases
console.log(test1([5, 6, 7, 8, 9], 3, 7)); // [6, 7, 8]
console.log(test1([2, 4, 5, 6, 9], 3, 6)); // [4, 5, 6]
console.log(test1([2, 4, 5, 6, 9], 3, 10)); // [5, 6, 9]
