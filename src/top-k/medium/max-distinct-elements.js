/**
 * Given an array of numbers and a number ‘K’.
 * We need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.
 *
 * Input: [7, 3, 5, 8, 5, 3, 3], and K=2
 * Output: 3
 * Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have
 * to skip 5 because it is not distinct and occurred twice.
 * Another solution could be to remove one instance of '5' and '3' each to be left with three distinct numbers [7, 5, 8].
 * In this case, we have to skip 3 because it occurred twice.
 *
 * Input: [3, 5, 12, 11, 12], and K=3
 * Output: 2
 * Explanation: We can remove one occurrence of 12, after which all numbers will become distinct.
 * Then we can delete any two numbers which will leave us 2 distinct numbers in the result.
 *
 * Input: [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], and K=2
 * Output: 3
 * Explanation: We can remove one occurrence of '4' to get three distinct numbers.
 */

import { Heap } from '../Heap.js';

/**
 * 1. Build a frequency Map, where a key is a number, value is the number frequency in the array
 * 2. Iterate over the Map and keep running count of all distinct numbers:
 *    - if frequency > 1, push the element to the Min Heap
 *    - else increase the number of distinct numbers
 * 3. While K > 0 pop the least frequent element from the Heap and make it distinct:
 *    We will see if we can remove all occurrences of a number except one.
 *    If we can, we will increment our running count of distinct numbers.
 *    We have to also keep a count of how many removals we have done.
 * 4. If after removing elements from the Heap, we are still left with some deletions, we have to remove some distinct elements.
 *
 * time complexity - O(n * log(n) + k * log(n))
 * space complexity - O(n)
 */
export function test(array, K) {
  let distinct = 0;
  if (array.length < K) return distinct;

  const minHeap = new Heap((a, b) => a - b);

  // O(n)
  const frequencyMap = array.reduce((previous, current) => {
    const frequency = previous.get(current);
    previous.set(current, (frequency ?? 0) + 1);
    return previous;
  }, new Map());

  // O(n)
  const entries = [...frequencyMap.entries()];

  // O(n * log(n))
  for (let i = 0; i < entries.length; i++) {
    const [, frequency] = entries[i];
    if (frequency > 1) minHeap.push(frequency);
    else distinct++;
  }

  // O(k * log(n))
  while (minHeap.length > 0 && K > 0) {
    const frequency = minHeap.pop();
    // to make an element distinct, we need to remove all of its occurrences except one
    K -= frequency - 1;
    if (K >= 0) distinct++;
  }

  // if k > 0, this means we have to remove some distinct numbers
  if (K > 0) distinct -= K;

  return distinct;
}

// Test cases
console.log(test([7, 3, 5, 8, 5, 3, 3], 2)); // 3
console.log(test([3, 5, 12, 11, 12], 3)); // 2
console.log(test([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)); // 3
