/**
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 *
 * Given a string sentence containing English letters (lower or upper-case), return true if sentence is a pangram, or false otherwise.
 *
 * Note: The given sentence might contain other characters like digits or spaces, your solution should handle these too.
 */

// Time complexity - O(n)
// Space Complexity - O(1)
export function test(str) {
  const K = 26;
  const set = new Set();

  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      const value = char.toLowerCase();
      if (!set.has(value)) set.add(value);
    }
  }

  return set.size === K;
}

// Test cases
console.log(test('TheQuickBrownFoxJumpsOverTheLazyDog')); // true
console.log(test('Cwm fjord bank glyphs vext quiz')); // true
console.log(test('The quick brown fox jumps over the lazy dog')); // true
console.log(test('This is not a pangram')); // false
