/**
 * You are given a list of daily temperatures.
 * Your task is to return an answer array such that answer[i] is the number of days you would have to wait until a warmer temperature for each of the days.
 * If there is no future day for which this is possible, put 0 instead.
 *
 * Input: [45, 50, 40, 60, 55]
 * Expected Output: [1, 2, 1, 0, 0]
 * Justification: The next day after the first day is warmer (50 > 45).
 * Two days after the second day, the temperature is warmer (60 > 50).
 * The next day after the third day is warmer (60 > 40).
 * There are no warmer days after the fourth and fifth days.
 */

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function test(temperatures) {
  // Monotonically Decreasing Stack for days for which we have not found a warmer day yet
  const stack = [];
  const days = new Array(temperatures.length).fill(0);

  const getStackTop = () => stack[stack.length - 1];

  temperatures.forEach((t, index) => {
    while (stack.length > 0 && temperatures[getStackTop()] < t) {
      // When a warmer day is found,
      // the days are popped from the stack and the difference in days is calculated.
      const idx = stack.pop();
      days[idx] = index - idx;
    }

    // The stack keeps track of the days for which a warmer day has not yet been found.
    stack.push(index);
  });

  return days;
}

const example1 = [45, 50, 40, 60, 55];
const example2 = [80, 75, 85, 90, 60];
const example3 = [32, 32, 32, 32, 32];
const example4 = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(test(example1)); // [1, 2, 1, 0, 0]
console.log(test(example2)); // [2, 1, 1, 0, 0]
console.log(test(example3)); // [0, 0, 0, 0, 0]
console.log(test(example4)); // [1, 1, 4, 2, 1, 1, 0, 0]
