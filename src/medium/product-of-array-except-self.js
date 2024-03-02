/**
 * Given an array of integers.
 * Return a new array where each element at index "i" of the new array is the product of all the numbers in the original array
 * except the one at "i".
 * You must solve this problem without using division.
 *
 * Input: [2, 3, 4, 5]
 * Expected Output: [60, 40, 30, 24]
 * Justification: For the first element: 3*4*5 = 60, for the second element: 2*4*5 = 40, for the third element: 2*3*5 = 30,
 * and for the fourth element: 2*3*4 = 24.
 *
 * Input: [1, 1, 1, 1]
 * Expected Output: [1, 1, 1, 1]
 * Justification: Every element is 1, so the product of all other numbers for each index is also 1.
 *
 * Input: [10, 20, 30, 40]
 * Expected Output: [24000, 12000, 8000, 6000]
 * Justification: For the first element: 20*30*40 = 24000, for the second element: 10*30*40 = 12000, for the third element: 10*20*40 = 8000,
 * and for the fourth element: 10*20*30 = 6000.
 */

/**
 * Problem clarification:
 * Return a new array where each element at index "i" of the new array is the product of all the numbers in the original array
 * except the one at "i".
 *
 * Time complexity: O(n * (n - 1))
 * Space complexity: O(n)
 */
function test(nums) {
  const next = {};
  const previous = {};
  const passed = [];

  nums.forEach((n, i) => {
    passed.forEach((p) => {
      if (next[p]) next[p].push(n);
      else next[p] = [n];
    });

    if (i === nums.length - 1) next[n] = [];
    previous[n] = [...passed];
    passed.push(n);
  });

  return passed.map((n) => {
    return [...next[n], ...previous[n]].reduce((result, value) => (result *= value), 1);
  }, []);
}

console.log(test([2, 3, 4, 5])); // [60, 40, 30, 24]
console.log(test([1, 1, 1, 1])); // [1, 1, 1, 1]
console.log(test([10, 20, 30, 40])); // [24000, 12000, 8000, 6000]
console.log(test([5, 9, 2, -9, -9, -7, -8, 7, -9, 10])); // [-51438240,-28576800,-128595600,28576800,28576800,36741600,32148900,-36741600,28576800,-25719120]

// ---------------------------------------------------------------------------------

function test2(nums) {
  const len = nums.length;
  // The left array will hold the product of all numbers to the left of index i
  const left = new Array(len).fill(1);
  // The right array will hold the product of all numbers to the right of index i
  const right = new Array(len).fill(1);
  const result = new Array(len).fill(1);

  // i = 1, since the value at index = 0 does not have any values left
  for (let i = 1; i < len; i++) {
    // each value in the left array is the product of its previous value and the corresponding value in the input array
    left[i] = left[i - 1] * nums[i - 1];
  }

  console.log(left);

  // i = len - 2, since the value at index = len - 1 does not have any values right
  for (let i = len - 2; i >= 0; i--) {
    // each value in the right array is the product of its previous value and the corresponding value in the input array.
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < len; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

console.log(test2([2, 3, 4, 5])); // [60, 40, 30, 24]
// console.log(test2([1, 1, 1, 1])); // [1, 1, 1, 1]
// console.log(test2([10, 20, 30, 40])); // [24000, 12000, 8000, 6000]
// console.log(test2([5, 9, 2, -9, -9, -7, -8, 7, -9, 10])); // [-51438240,-28576800,-128595600,28576800,28576800,36741600,32148900,-36741600,28576800,-25719120]
