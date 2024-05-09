/**
  Given an array of distinct positive integers candidates and a target integer target,
  return a list of all unique combinations of candidates where the chosen numbers sum to target.
  You may return the combinations in any order.

  The same number may be chosen from candidates an unlimited number of times.
  Two combinations are unique if the frequency of at least one of the chosen numbers is different.

  Input: candidates = [2, 3, 6, 7], target = 7
  Output: [[2, 2, 3], [7]]
  Explanation: The elements in these two combinations sum up to 7.

  Input: candidates = [2, 4, 6, 8], target = 10
  Output: [[2,2,2,2,2], [2,2,2,4], [2,2,6], [2,4,4], [2,8], [4,6]]
  Explanation: The elements in these six combinations sum up to 10.
 */

// time complexity: O(N^(T/M+1)), N - total number of elements, T - target value, M - the smallest value among the elements
// space complexity: O(T/M), T - target value, M - the smallest value among the elements
export function test(nums, target) {
  const combinations = [];

  const backtrack = (start, end, target, currentCombination) => {
    // we found a soluton
    if (target === 0) {
      combinations.push([...currentCombination]);
      return;
    }

    for (let i = start; i < end; i++) {
      // If the current candidate is greater than the remaining target, move on to the next, because we cannnot form a combination with a such candidate.
      if (nums[i] > target) {
        continue;
      }

      // Add the current candidate to the current combination
      currentCombination.push(nums[i]);
      // Recursively call the function with the updated combination and remaining target
      backtrack(i, end, target - nums[i], currentCombination);
      // Backtrack by removing the last added candidate from the combination
      currentCombination.pop();
    }
  };

  backtrack(0, nums.length, target, []);
  return combinations;
}

// Test cases
console.log(test([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(test([2, 4, 6, 8], 10)); // [[2,2,2,2,2], [2,2,2,4], [2,2,6], [2,4,4], [2,8], [4,6]]

// -----------------------------------------------------------------------------------------------------------------------
// Now find all UNIQUE combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.
export function test1(nums, target) {
  const combinations = [];

  const backtrack = (start, end, target, currentCombination) => {
    if (target < 0) return;

    // we found a soluton
    if (target === 0) {
      combinations.push([...currentCombination]);
      return;
    }

    for (let i = start; i < end; i++) {
      // If the current candidate is greater than the remaining target, move on to the next, because we cannnot form a combination with a such candidate.
      if (nums[i] > target || (i > start && nums[i] == nums[i - 1])) {
        continue;
      }

      // Add the current candidate to the current combination
      currentCombination.push(nums[i]);
      // Recursively call the function with the updated combination and remaining target
      backtrack(i + 1, end, target - nums[i], currentCombination);
      // Backtrack by removing the last added candidate from the combination
      currentCombination.pop();
    }
  };

  nums.sort();
  backtrack(0, nums.length, target, []);
  return combinations;
}

// Test cases
console.log(test1([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6], [1,2,5], [1,7], [2,6]]
console.log(test1([2, 5, 2, 1, 2], 5)); // [[1,2,2], [5]]
