/**
 * Given a string, sort it based on the decreasing frequency of its characters.
 *
 * Input: "Programming"
 * Output: "rrggmmPiano"
 * Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.
 *
 * Input: "abcbab"
 * Output: "bbbaac"
 * Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.
 */
import { Heap } from '../Heap.js';

// Time complexity - O(n * log(n))
// Space Complexity - O(n)
export function test(string) {
  const maxHeap = new Heap((a, b) => b[1] - a[1]);

  // O(n)
  const frequencyMap = string.split('').reduce((previous, current) => {
    const value = previous.get(current);
    previous.set(current, (value ?? 0) + 1);
    return previous;
  }, new Map());

  // O(n)
  const entries = [...frequencyMap.entries()];

  // O(n * log(n))
  for (let i = 0; i < entries.length; i++) {
    maxHeap.push(entries[i]);
  }

  // O(n)
  return maxHeap.heap.map(([str, count]) => str.repeat(count)).join('');
}

// Test cases
console.log(test('Programming')); // "rrggmmPiano"
console.log(test('abcbab')); // "bbbaac"
