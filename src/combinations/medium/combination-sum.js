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
  const stack = [[0, 0, []]]; // [startIndex, currentSum, currentCombination]

  while (stack.length > 0) {
    const [startIndex, currentSum, currentCombination] = stack.pop();

    if (currentSum === target) {
      combinations.push([...currentCombination]);
      continue;
    }

    for (let i = startIndex; i < nums.length; i++) {
      const sum = currentSum + nums[i];
      // if a new sum of the elements is less than the target, we will try adding more numbers to the stack
      if (sum <= target) {
        stack.push([i, sum, [...currentCombination, nums[i]]]);
      }
    }
  }

  return combinations;
}

// Test cases
console.log(test([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(test([2, 4, 6, 8], 10)); // [[2,2,2,2,2], [2,2,2,4], [2,2,6], [2,4,4], [2,8], [4,6]]
