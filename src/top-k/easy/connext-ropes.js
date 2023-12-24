/**
 * Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost.
 * The cost of connecting two ropes is equal to the sum of their lengths.
 *
 * Input: [1, 3, 11, 5]
 * Output: 33
 * Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). So the total cost is 33 (4+9+20)
 *
 * Input: [3, 4, 5, 6]
 * Output: 36
 * Explanation: First connect 3+4(=7), then 5+6(=11), 7+11(=18). Total cost is 36 (7+11+18)
 *
 * Input: [1, 3, 11, 5, 2]
 * Output: 42
 * Explanation: First connect 1+2(=3), then 3+3(=6), 6+5(=11), 11+11(=22). Total cost is 42 (3+6+11+22)
 */
import { Heap } from '../Heap.js';

// Time complexity - O(n * log(n))
// Space Complexity - O(n)
export function test(ropes) {
  /**
   * sums = [7, 11, 18]
   * while Min Heap length > 0:
   * 1. pop the min element from the Min Heap =>  [4, 5, 6]
   * 2. sum it with the next popped min element => [5, 6]
   * 3. push the result to Mean Heap => [5, 6, 7]
   * 4. push the result to sums
   * 5. repeat => [7, 11]
   * 6. repeat => [18]
   */

  const minHeap = new Heap((a, b) => a - b);
  let sum = 0;

  // O(n * log(n))
  ropes.forEach((n) => minHeap.push(n));

  while (minHeap.length > 0) {
    const smallest = minHeap.pop();

    if (minHeap.length === 0) {
      break;
    }

    const length = smallest + minHeap.pop();
    minHeap.push(length);
    sum += length;
  }

  return sum;
}

// Test cases
console.log(test([1, 3, 11, 5])); // 33
console.log(test([3, 4, 5, 6])); // 36
console.log(test([1, 3, 11, 5, 2])); // 42
