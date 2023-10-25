/**
 * Given an array of integers nums, return the number of good pairs.
 *
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */

// Time complexity - O(n^2)
// Space Complexity - O(n)
export function test(array) {
  const pairs = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        pairs.push([array[i], array[j]]);
      }
    }
  }

  return pairs.length;
}

// Time complexity - O(n * log(n))
// Space Complexity - O(1)
export function test2(array) {
  let pairs = 0;
  let i = 0;

  array.sort((a, b) => a - b);

  while (i < array.length) {
    if (i === array.length - 1) break;
    if (array[i] === array[i + 1]) {
      let j = i;
      while (array[j] === array[j + 1]) {
        pairs++;
        j++;
      }
    }

    i++;
  }

  return pairs;
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test3(array) {
  let pairs = 0;
  let map = {};

  for (let n of array) {
    map[n] = (map[n] || 0) + 1;
    // every new occurrence of a number can be paired with every previous occurrence
    // so if a number has already appeared 'p' times, we will have 'p-1' new pairs
    pairs += map[n] - 1;
  }

  return pairs;
}

// Test cases
console.log(test3([1, 2, 3, 1, 1, 3])); // 4
console.log(test3([1, 1, 1, 1])); // 6
console.log(test3([1, 2, 3])); // 0
