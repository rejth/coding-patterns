/**
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * You can assume that K is less than or equal to the length of the given string.
 *
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 *
 * Input: String="araaci", K=1
 * Output: 2
 * Explanation: The longest substring with no more than '1' distinct characters is "aa".
 *
 * Input: String="cbbebi", K=3
 * Output: 5
 * Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 */

// Time complexity - O(n)
// Space Complexity - O(k)
export function test(str, k) {
  let windowStart = 0;
  let maxLength = 0;

  const characters = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    const frequency = characters.get(char);
    characters.set(char, (frequency || 0) + 1);

    while (characters.size > k) {
      const char = str[windowStart];
      const frequency = characters.get(char);
      characters.set(char, frequency - 1);
      if (characters.get(char) === 0) characters.delete(char);
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// Test cases
console.log(test('araaci', 2)); // 4 (araa)
console.log(test('araaci', 1)); // 2 (aa)
console.log(test('cbbebi', 3)); // 5 (cbbeb)
