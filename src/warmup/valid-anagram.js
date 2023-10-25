/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

// Time complexity - O(n * log(n))
// Space Complexity - O(n)
export function test(str1, str2) {
  const a = str1.split('').sort((a, b) => a.localeCompare(b));
  const b = str2.split('').sort((a, b) => a.localeCompare(b));
  return a.join('') === b.join('');
}

// Time complexity - O(n)
// Space Complexity - O(1)
export function test2(s, t) {
  if (s.length !== t.length) return false;

  const freqMap = {};
  for (let i = 0; i < s.length; i++) {
    freqMap[s[i]] = (freqMap[s[i]] || 0) + 1;
    freqMap[t[i]] = (freqMap[t[i]] || 0) - 1;
  }

  for (const char in freqMap) {
    if (freqMap[char] !== 0) return false;
  }

  return true;
}

// Test cases
console.log(test2('listen', 'silent')); // true
console.log(test2('rat', 'car')); // false
console.log(test2('hello', 'world')); // false
console.log(test2('paper', 'repaap')); // false
