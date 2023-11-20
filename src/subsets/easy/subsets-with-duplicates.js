/**
 * Given a set of numbers that might contain duplicates.
 * Find all of its distinct subsets.
 *
 * Input: [1, 3, 3]
 * Output: [], [1], [3], [1,3], [3,3], [1,3,3]
 *
 * Input: [1, 5, 3, 3]
 * Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]
 */

// Time complexity - O(n * 2^n)
// Space Complexity - O(n * 2^n)
export function test(array) {
  array.sort((a, b) => a - b);

  const subsets = [[]];
  let start = 0;
  let end = 0;

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    start = 0;

    if (i > 0 && current === array[i - 1]) {
      start = end + 1;
    }

    end = subsets.length - 1;

    for (let j = start; j < end + 1; j++) {
      const set = [...subsets[j]];
      set.push(current);
      subsets.push(set);
    }
  }

  return subsets;
}

// Test cases
console.log(test([1, 3, 3])); // [], [1], [3], [1,3], [3,3], [1,3,3]
console.log(test([1, 5, 3, 3])); // [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3]
