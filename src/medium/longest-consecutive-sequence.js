/**
 * Given an unsorted array of integers, find the length of the longest consecutive sequence of numbers in it.
 * A consecutive sequence means the numbers in the sequence are contiguous without any gaps.
 * For instance, 1, 2, 3, 4 is a consecutive sequence, but 1, 3, 4, 5 is not.
 *
 * Input: [10, 11, 14, 12, 13]
 * Output: 5
 * Justification: The entire array forms a consecutive sequence from 10 to 14.
 *
 * Input: [3, 6, 4, 100, 101, 102]
 * Output: 3
 * Justification: There are two consecutive sequences, [3, 4] and [100,101,102]. The latter has a maximum length of 3.
 *
 * Input: [4, 3, 6, 2, 5, 8, 4, 7, 0, 1]
 * Output: 9
 * Justification: The longest consecutive sequences here are [0, 1, 2, 3, 4, 5, 6, 7, 8].
 *
 * Input: [7, 8, 10, 11, 15]
 * Output: 2
 * Justification: The longest consecutive sequences here are [7,8] and [10,11], both of length 2.
 */

/**
 * Time complexity - O(n * log(n))
 * Space complexity - O(n)
 */
export function test(nums) {
  let maxSeqLength = 1;
  let seqLength = 1;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i]) continue;
    if (nums[i + 1] - nums[i] === 1) {
      seqLength++;
    } else {
      maxSeqLength = Math.max(maxSeqLength, seqLength);
      seqLength = 1;
    }
  }

  return Math.max(maxSeqLength, seqLength);
}

// Test cases
console.log(test([10, 11, 14, 12, 13])); // 5
console.log(test([3, 6, 4, 100, 101, 102])); // 3
console.log(test([4, 3, 6, 2, 5, 8, 4, 7, 0, 1])); // 9
console.log(test([7, 8, 10, 11, 15])); // 2

// --------------------------------------------------------------------------------------------------------------------

/**
 * Time complexity - O(n)
 * Space complexity - O(n)
 */
export function test1(nums) {
  const set = new Set(nums);
  let longestSequence = 0;

  for (const n of set) {
    /**
     * The start of the sequence is the smallest number that does not have a lower number,
     * So if we find a such number, we move to the algorithm
     * Otherwise, do nothing and move to the next number
     */
    if (!set.has(n - 1)) {
      let currentNum = n;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      longestSequence = Math.max(longestSequence, currentLength);
    }
  }

  return longestSequence;
}

// Test cases
console.log(test1([10, 11, 14, 12, 13])); // 5
console.log(test1([3, 6, 4, 100, 101, 102])); // 3
console.log(test1([4, 3, 6, 2, 5, 8, 4, 7, 0, 1])); // 9
console.log(test1([7, 8, 10, 11, 15])); // 2
