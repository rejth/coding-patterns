/**
 * Given ‘M’ sorted arrays.
 * Find the K’th the smallest number among all the arrays.
 *
 * Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
 * Output: 4
 * Explanation: The 5th smallest number among all the arrays is 4, this can be verified from
 * the merged list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]
 *
 * Input: L1=[5, 8, 9], L2=[1, 7], K=3
 * Output: 7
 * Explanation: The 3rd smallest number among all the arrays is 7.
 */

import { Heap } from '../../top-k/Heap.js';

/**
 * time complexity - O(K * log(M)), K - the number of smallest elements, M - the number of input arrays
 * space complexity - O(M), M - the number of input arrays
 */
export function test(lists, K) {
  const minHeap = new Heap((a, b) => a - b);
  let count = 0;

  const listIndexByValue = {};
  const elementIndexByValue = {};

  // O(K * log(M))
  lists.forEach((list, index) => {
    const smallest = list[0];
    minHeap.push(smallest);
    listIndexByValue[smallest] = [index];
    elementIndexByValue[smallest] = [0];
  });

  // O(K * log(M))
  while (minHeap.length > 0) {
    const smallest = minHeap.pop();
    const listIndex = listIndexByValue[smallest].shift();
    const nextValueIndex = elementIndexByValue[smallest].shift() + 1;

    if (nextValueIndex < lists[listIndex].length) {
      const nextSmallest = lists[listIndex][nextValueIndex];
      minHeap.push(nextSmallest);

      listIndexByValue[nextSmallest] = (listIndexByValue[nextSmallest] || []).concat(listIndex);
      elementIndexByValue[nextSmallest] = (elementIndexByValue[nextSmallest] || []).concat(nextValueIndex);
    }

    count++;

    if (count === K) return smallest;
  }
}

// Test cases
console.log(
  test(
    [
      [2, 6, 8],
      [3, 6, 7],
      [1, 3, 4],
    ],
    5,
  ),
); // 4
console.log(
  test(
    [
      [5, 8, 9],
      [1, 7],
    ],
    3,
  ),
); // 7
