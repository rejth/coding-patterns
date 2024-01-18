/**
 * Given a list of strings, the task is to group the anagrams together.
 * An anagram is a word or phrase formed by rearranging the letters of another, such as "cinema", formed from "iceman".
 *
 * Input: ["dog", "god", "hello"]
 * Output: [["dog", "god"], ["hello"]]
 * Justification: "dog" and "god" are anagrams, so they are grouped together.
 * "hello" does not have any anagrams in the list, so it is in its own group.
 *
 * Input: ["listen", "silent", "enlist"]
 * Output: [["listen", "silent", "enlist"]]
 * Justification: All three words are anagrams of each other, so they are grouped together.
 *
 * Input: ["abc", "cab", "bca", "xyz", "zxy"]
 * Output: [["abc", "cab", "bca"], ["xyz", "zxy"]]
 * Justification: "abc", "cab", and "bca" are anagrams, as are "xyz" and "zxy".
 */

/**
 * Problem clarification:
 * Find all anagrams in the list and group them together
 *
 * Time complexity: O(n * k * log(k), n - the number of words, k - the number of letters
 * Space complexity: O(n * k), n - the number of words, k - the number of letters
 */
function test(words) {
  const anagrams = {};

  words.forEach((word) => {
    const sorted = word
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
    anagrams[sorted] = [...(anagrams[sorted] || []), word];
  });

  return Object.values(anagrams);
}

console.log(test(['dog', 'god', 'hello'])); // [["dog", "god"], ["hello"]]
console.log(test(['listen', 'silent', 'enlist'])); // [["listen", "silent", "enlist"]]
console.log(test(['abc', 'cab', 'bca', 'xyz', 'zxy'])); // [["abc", "cab", "bca"], ["xyz", "zxy"]]
