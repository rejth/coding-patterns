/**
 * Given an integer array nums.
 * Return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Input: nums= [1, 2, 3, 4]
 * Output: false
 * Explanation: There are no duplicates in the given array.
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function containsDuplicate(list) {
  return list.length !== [...new Set(list)].length;
}

// Time complexity - O(n * log(n)) because of sorting
// Space Complexity - O(1), because in-place sorting algorithm is used
export function containsDuplicate2(list) {
  list.sort((a, b) => a - b);
  for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i + 1]) return true;
  }
  return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 2, 3, 1])); // true

console.log(containsDuplicate2([1, 2, 3, 4])); // false
console.log(containsDuplicate2([1, 2, 3, 1])); // true
