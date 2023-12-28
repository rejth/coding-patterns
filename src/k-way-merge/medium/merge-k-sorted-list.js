/**
 * Given an array of ‘K’ sorted LinkedLists.
 * Merge them into one sorted list.
 *
 * Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
 * Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]
 *
 * Input: L1=[5, 8, 9], L2=[1, 7]
 * Output: [1, 5, 7, 8, 9]
 */

import { Heap } from '../../top-k/Heap.js';

/**
 * 1. declare a result array to keep sorted elements from all N arrays
 * 2. declare a hash map to track from which array an element came from (key - element, value - index of array)
 * 2. iterate over the N arrays and push the first element from each array to the Min Heap
 * 3. update hash map
 * 4. remove the smallest element from the Heap and push to the result array
 * 5. take the index (from hash map) of array the element came from
 * 6. take the next element from the corresponding array and push to the Heap
 * 7. update hash map
 * 8. repeat steps 4-7 until the Heap length > 0
 *
 * hash map 1 = { 1: [], 2: [0], 3: [2], 6: [0, 1], 4: [] }
 * hash map 2 = {1: [], 2: [], 3: [1], 6: [1, 1], 4: []}
 * min heap = [6, 6]
 * result =  [1, 2, 3, 3, 4]
 *
 * time complexity - O(N * log(K)), N - the overall number of elements, K - the number of input arrays
 * space complexity - O(N), N - the overall number of elements
 */
export function test(lists) {
  const result = [];
  const minHeap = new Heap((a, b) => a - b);

  const listIndexByValue = {};
  const elementIndexByValue = {};

  // O(K * log(K))
  lists.forEach((list, index) => {
    const smallest = list[0];
    minHeap.push(smallest);
    listIndexByValue[smallest] = [index];
    elementIndexByValue[smallest] = [0];
  });

  // O(N * log(K))
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

    result.push(smallest);
  }

  return result;
}

// Test cases
console.log(
  test([
    [2, 6, 8],
    [3, 6, 7],
    [1, 3, 4],
  ]),
); // [1, 2, 3, 3, 4, 6, 6, 7, 8]
console.log(
  test([
    [5, 8, 9],
    [1, 7],
  ]),
); // [1, 5, 7, 8, 9]
