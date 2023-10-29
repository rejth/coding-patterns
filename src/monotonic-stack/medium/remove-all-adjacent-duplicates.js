/**
 * You are given a string s and an integer k.
 * Your task is to remove groups of identical, consecutive characters from the string such that each group has exactly k characters.
 * The removal of groups should continue until it's no longer possible to make any more removals. The result should be the final version of the string after all possible removals have been made.
 *
 * Input: s = "abbbaaca", k = 3
 * Output: "ca"
 * Explanation: First, we remove "bbb" to get "aaaca". Then, we remove "aaa" to get "ca".
 *
 * Input: s = "abbaccaa", k = 3
 * Output: "abbaccaa"
 * Explanation: There are no instances of 3 adjacent characters being the same.
 *
 * Input: s = "abbacccaa", k = 3
 * Output: "abb"
 * Explanation: First, we remove "ccc" to get "abbaaa". Then, we remove "aaa" to get "abb".
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(str, k) {
  let stack = [];

  for (let s of str) {
    if (stack.length > 0 && stack[stack.length - 1][0] === s) {
      stack[stack.length - 1][1]++;
    } else {
      stack.push([s, 1]);
    }
    if (stack[stack.length - 1][1] === k) stack.pop();
  }

  let result = '';
  for (let [s, n] of stack) {
    result += s.repeat(n);
  }

  return result;
}

console.log(test('abbbaaca', 3)); // "ca"
console.log(test('abbaccaa', 3)); // "abbaccaa"
console.log(test('abbacccaa', 3)); // "abb"
