/**
 * Determine if an input string containing only the characters '(', ')', '{', '}', '[', and ']' is valid.
 * A string is considered valid if:
 */

/**
 * 1. Open brackets must be closed by the closed brackets of the same type
 * 2. Open brackets must be closed in the correct order
 * 3. Each close bracket must have a corresponding open bracket of the same type
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function test(brackets) {
  const bracketsMap = { '(': ')', '{': '}', '[': ']' };
  const stack = [];

  for (const item of brackets) {
    if (bracketsMap[item]) {
      stack.push(item);
    } else if (item !== bracketsMap[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(test('[[')); // false
console.log(test('(]')); // false
console.log(test('()')); // true
console.log(test('{[]}')); // true
console.log(test('[{]}')); // false
