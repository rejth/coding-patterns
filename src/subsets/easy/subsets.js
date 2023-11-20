/**
 * Given a set with distinct elements, find all of its distinct subsets.
 *
 * Input: [1, 3]
 * Output: [], [1], [3], [1,3]
 *
 * Input: [1, 5, 3]
 * Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
 */

// Time complexity - O(n * 2^n)
// Space Complexity - O(n * 2^n)
export function test(array) {
  const subsets = [[]];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const n = subsets.length;

    for (let j = 0; j < n; j++) {
      const set = [...subsets[j]];
      set.push(current);
      subsets.push(set);
    }
  }

  return subsets;
}

// Test cases
console.log(test([1, 3])); // [], [1], [3], [1,3]
console.log(test([1, 5, 3])); // [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
