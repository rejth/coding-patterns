/**
 * Given an array of integers temperatures representing daily temperatures.
 * Your task is to calculate how many days you have to wait until a warmer temperature.
 * If there is no future day for which this is possible, put 0 instead.
 *
 * Input: temperatures = [70, 73, 75, 71, 69, 72, 76, 73]
 * Output: [1, 1, 4, 2, 1, 1, 0, 0]
 * Explanation: The first day's temperature is 70 and the next day's temperature is 73 which is warmer.
 * So for the first day, you only have to wait for 1 day to get a warmer temperature.
 * Hence, the first element in the result array is 1. The same process is followed for the rest of the days.
 *
 * Input: temperatures = [73, 72, 71, 70]
 * Output: [0, 0, 0, 0]
 * Explanation: As we can see, the temperature is decreasing every day.
 * So, there is no future day with a warmer temperature.
 * Hence, all the elements in the result array are 0.
 *
 * Input: temperatures = [70, 71, 72, 73]
 * Output: [1, 1, 1, 0]
 * Explanation: For the first three days, the next day is warmer.
 * But for the last day, there is no future day with a warmer temperature.
 * Hence, the result array is [1, 1, 1, 0].
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(nums) {
  const stack = [];
  const days = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    while (stack.length > 0 && n > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      days[index] = i - index;
    }
    stack.push(i);
  }

  return days;
}

console.log(test([70, 73, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(test([73, 72, 71, 70])); // [0, 0, 0, 0]
console.log(test([70, 71, 72, 73])); // [1, 1, 1, 0]
console.log(test([70, 70, 71, 71, 72, 72, 73, 73])); // [2, 1, 2, 1, 2, 1, 0, 0]
