/**
 * Given an array of strings words and two different strings that already exist in the array word1 and word2.
 * Return the shortest distance between these two words in the list.
 */

// Time complexity - O(n)
// Space Complexity - O(1)
export function test(words, word1, word2) {
  let i = -1;
  let j = -1;
  let minPath = words.length;

  words.forEach((word, index) => {
    if (word === word1) i = index;
    if (word === word2) j = index;

    if (i !== -1 && j !== -1) {
      minPath = Math.min(minPath, Math.abs(i - j));
    }
  });

  return minPath;
}

// Test cases
console.log(
  test(['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'], 'fox', 'dog'),
); // 5
console.log(test(['a', 'c', 'd', 'b', 'a'], 'a', 'b')); // 1
console.log(test(['a', 'b', 'c', 'd', 'e'], 'a', 'e')); // 4
console.log(
  test(['repeated', 'words', 'in', 'the', 'array', 'repeated', 'words'], 'repeated', 'words'),
); // 1
