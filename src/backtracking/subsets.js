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
export function test(nums) {
  const subsets = [];

  const backtrack = (start, end, currentSubset) => {
    subsets.push([...currentSubset]);

    for (let i = start; i < end; i++) {
      currentSubset.push(nums[i]);
      backtrack(i + 1, end, currentSubset);
      currentSubset.pop();
    }
  };

  backtrack(0, nums.length, []);
  return subsets;
}

// Test cases
console.log(test([1, 3])); // [], [1], [3], [1,3]
console.log(test([1, 5, 3])); // [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

// -----------------------------------------------------------------------------------------------------------------------
// Now find all UNIQUE subsets
export function test1(nums) {
  const subsets = [];

  const backtrack = (start, end, currentSubset) => {
    subsets.push([...currentSubset]);

    for (let i = start; i < end; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }

      currentSubset.push(nums[i]);
      backtrack(i + 1, end, currentSubset);
      currentSubset.pop();
    }
  };

  nums.sort();
  backtrack(0, nums.length, []);
  return subsets;
}

// Test cases
console.log(test1([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(test1([0])); // [[],[0]]
