/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 *
  Input: nums = [1,2,3]
  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
  Input: nums = [1]
  Output: [[1]]
 */

export function test(nums) {
  const permutations = [];

  const backtrack = (start, end) => {
    if (start === end) {
      permutations.push([...nums]);
    }

    for (let i = start; i < end; i++) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      backtrack(start + 1, end);
      [nums[i], nums[start]] = [nums[start], nums[i]];
    }
  };

  backtrack(0, nums.length);
  return permutations;
}

// Test cases
console.log(test([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(test([0, 1])); // [[0,1],[1,0]]
console.log(test([1])); // [[1]]

// -----------------------------------------------------------------------------------------------------------------------
/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 */
export function test1(nums) {
  const permutations = [];
  const visited = new Array(nums.length).fill(false);

  const backtrack = (currentPermutation, size) => {
    if (currentPermutation.length === size) {
      permutations.push([...currentPermutation]);
      return;
    }

    for (let i = 0; i < size; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }

      // Add the current number to the current permutation
      currentPermutation.push(nums[i]);
      visited[i] = true;

      // Recursively call the function with the updated permutation
      backtrack(currentPermutation, size);

      // Backtrack by removing the last added number from the permutation and making the number non visited
      currentPermutation.pop();
      visited[i] = false;
    }
  };

  nums.sort();
  backtrack([], nums.length);
  return permutations;
}

// Test cases
// console.log(test1([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
// console.log(test1([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
