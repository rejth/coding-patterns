/**
 * Design a class to efficiently find the Kth largest element in a stream of numbers.
 *
 * The class should have the following two things:
 *
 * The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
 * The class should expose a function add(int num) which will store the given number and return the Kth largest number.
 *
 * Input: [3, 1, 5, 12, 2, 11], K = 4
 * 1. Calling add(6) should return '5'.
 * 2. Calling add(13) should return '6'.
 * 2. Calling add(4) should still return '6'.
 */
import { Heap } from '../Heap.js';

/**
 * 1. iterate through the stream
 * 2. on each iteration we push element to the Min Heap
 * 3. if the Heap length is greater that K, pop the min element from the Heap
 * 4. so once we have pushed the last element, we have k the smallest elements popped
 * 5. and that means the next smallest element is the kth largest element in the heap
 *
 * time complexity - O(log(k))
 * space complexity - O(k)
 */
export class Solution {
  #minHeap;

  constructor(stream, k) {
    this.stream = stream;
    this.k = k;

    this.#minHeap = new Heap((a, b) => a - b);
    this.#populateHeap();
  }

  // Time complexity - O(log(k))
  // Space complexity - O(k)
  add(n) {
    this.#minHeap.push(n);

    if (this.#minHeap.length > this.k) {
      this.#minHeap.pop();
    }

    return this.#minHeap.peak();
  }

  #populateHeap() {
    this.stream.forEach((n) => this.add(n));
  }
}

// Test cases
const solution = new Solution([3, 1, 5, 12, 2, 11], 4); // heap - []
console.log(solution.add(6)); // 5
console.log(solution.add(13)); // 6
console.log(solution.add(4)); // 6
