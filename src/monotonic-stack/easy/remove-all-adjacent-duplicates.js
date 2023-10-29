/**
 * Given a string S.
 * Remove all adjacent duplicate characters recursively to generate the resultant string.
 *
 * Input: s = "abccba"
 * Output: ""
 * Explanation: First, we remove "cc" to get "abba".
 * Then, we remove "bb" to get "aa". Finally, we remove "aa" to get an empty string.
 *
 * Input: s = "foobar"
 * Output: "fbar"
 * Explanation: We remove "oo" to get "fbar".
 *
 * Input: s = "abcd"
 * Output: "abcd"
 * Explanation: No adjacent duplicates so no changes.
 */

// Time complexity - approximately ~ O(1)
// Space Complexity - O(1)
export function test(str) {
  const zipped = str.replace(/(.+)\1+/g, '');
  if (zipped === str) return zipped;
  return test(zipped);
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test2(str) {
  const map = {};

  for (const s of str) {
    map[s] = (map[s] || 0) + 1;
  }

  return Object.entries(map).reduce((acc, [key, value]) => {
    if (value > 1) acc += '';
    else acc += key;
    return acc;
  }, '');
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test3(str) {
  const stack = [];

  for (const s of str) {
    if (stack.length > 0 && s === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s);
    }
  }

  return stack.join('');
}

console.log(test('abccba')); // ""
console.log(test('foobar')); // "fbar"
console.log(test('abcd')); // "abcd"

console.log(test2('abccba')); // ""
console.log(test2('foobar')); // "fbar"
console.log(test2('abcd')); // "abcd"

console.log(test3('abccba')); // ""
console.log(test3('foobar')); // "fbar"
console.log(test3('abcd')); // "abcd"
