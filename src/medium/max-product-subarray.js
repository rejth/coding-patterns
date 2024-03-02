function test(nums) {
  if (nums.length === 0) return 0;

  let maxProduct = nums[0];
  let maxCurrent = nums[0];
  let minCurrent = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];

    if (n < 0) {
      [maxCurrent, minCurrent] = [minCurrent, maxCurrent];
    }

    maxCurrent = Math.max(n, n * maxCurrent);
    minCurrent = Math.min(n, n * minCurrent);
    maxProduct = Math.max(maxProduct, maxCurrent);
  }

  return maxProduct;
}

console.log(test([2, 3, -2, 4])); // 6
console.log(test([-2, 0, -1])); // 0
console.log(test([-2, 3, 2, -4])); // 48
