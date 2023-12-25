/**
 * Given an array, find the sum of all numbers between the K1’th and K2’th the smallest elements of that array.
 *
 * Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
 * Output: 23
 * Explanation: The 3rd smallest number is 5 and 6th smallest number 15. The sum of numbers coming
 * between 5 and 15 is 23 (11+12).
 *
 * Input: [3, 5, 8, 7], and K1=1, K2=4
 * Output: 12
 * Explanation: The sum of the numbers between the 1st smallest number (3) and the 4th smallest
 * number (8) is 12 (5+7).
 */

import { Heap } from '../Heap.js';

/**
 * Time complexity - O(N * log(N))
 * Space complexity - O(1)
 */
export function test(array, K1, K2) {
  if (K2 <= K1) return undefined;
  array.sort((a, b) => a - b);
  return array.slice(K1, K2 - 1).reduce((acc, current) => (acc += current), 0);
}

// Test cases
console.log(test([1, 3, 12, 5, 15, 11], 3, 6)); // 23
console.log(test([3, 5, 8, 7], 1, 4)); // 12

/**
 * Basically we don't even have to search for K2'th the smallest element.
 * We just need to sort the array, find K1'th the smallest element and take X element between K1 and K2:
 * 1. initialize a Max Heap
 * 2. iterate over first K2 elements of the array and push each element to the Heap
 * 3. iterate over N - K2 elements of the array and do:
 *    - if a number is less than the max element of the Heap, pop the max element and push the number to the Heap
 * 4. after that, we will have K2 the smallest elements in the Heap,
 *    and the first element in the Heap will be K2'th the smallest element.
 *    That means, K1'th the smallest element will be the K1'th element from the end of the Heap
 * 5. so we need to take X elements from K2'th the smallest element till K1'th,
 * where X = K2 - K1 - 1, because we need the elements between K1 and K2 excluding K1 and K2
 *
 * time complexity -
 * space complexity - O(k)
 */

/**
 * Time complexity - O(N * log(K2))
 * Space complexity - O(K2)
 */
export function test1(array, K1, K2) {
  if (K2 <= K1) return undefined;

  const maxHeap = new Heap((a, b) => b - a);

  // O(K2 * log(K2))
  for (let i = 0; i < K2; i++) {
    maxHeap.push(array[i]);
  }

  // O((N - K2) * log(K2))
  for (let i = K2; i < array.length; i++) {
    if (array[i] < maxHeap.peak()) {
      maxHeap.pop();
      maxHeap.push(array[i]);
    }
  }

  // The first element in the Heap is K2'th the smallest element
  // That means, K1'th the smallest element will be the K1'th element from the end of the Heap
  // So we will take elements from index = 1 to index = heap.length - K1
  return maxHeap.heap.slice(1, maxHeap.length - K1).reduce((acc, current) => (acc += current), 0);
}

// Test cases
console.log(test1([1, 3, 12, 5, 15, 11], 3, 6)); // 23
console.log(test1([3, 5, 8, 7], 1, 4)); // 12
