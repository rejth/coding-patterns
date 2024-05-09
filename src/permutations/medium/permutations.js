/**
  Given a set of distinct numbers, find all of its permutations.

  Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

  {1, 2, 3} {1, 3, 2} {2, 1, 3} {2, 3, 1} {3, 1, 2} {3, 2, 1}

  If a set has distinct elements it will have permutations.

  Input: [1,3,5]
  Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
 */

// time complexity: O(N * N!), N - total number of elements
// space complexity: O(N * N!), N - total number of elements
export function test(nums) {
  const permutationQueue = [[]];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const n = permutationQueue.length;

    for (let j = 0; j < n; j++) {
      const frontPermutation = permutationQueue.shift();

      for (let k = 0; k < frontPermutation.length + 1; k++) {
        const newPermutation = [...frontPermutation];
        newPermutation.splice(k, 0, currentNumber);

        if (newPermutation.length === nums.length) {
          result.push(newPermutation);
        } else {
          permutationQueue.push(newPermutation);
        }
      }
    }
  }

  return result;
}

// Test cases
console.log(test([1, 3, 5])); // [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
