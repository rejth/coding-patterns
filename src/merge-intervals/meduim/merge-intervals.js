/**
 * Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
 *
 * Intervals: [[1,4], [2,5], [7,9]]
 * Output: [[1,5], [7,9]]
 * Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].
 *
 * Intervals: [[6,7], [2,4], [5,9]]
 * Output: [[2,4], [5,9]]
 * Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
 *
 * Intervals: [[1,4], [2,6], [3,5]]
 * Output: [[1,6]]
 * Explanation: Since all the given intervals overlap, we merged them into one.
 */

// Time complexity - O(n * log(n))
// Space Complexity - O(n)
export function test(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let minStart = intervals[0][0];
  let maxEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    // overlapping condition
    if (start <= maxEnd) {
      maxEnd = Math.max(end, maxEnd);
      // non-overlapping condition
    } else {
      mergedIntervals.push([minStart, maxEnd]);
      minStart = start;
      maxEnd = end;
    }
  }

  mergedIntervals.push([minStart, maxEnd]);
  return mergedIntervals;
}

// Test cases
console.log(
  test([
    [1, 4],
    [2, 5],
    [7, 9],
  ]),
); // [[1,5], [7,9]]

console.log(
  test([
    [6, 7],
    [2, 4],
    [5, 9],
  ]),
); // [[2,4], [5,9]]

console.log(
  test([
    [1, 4],
    [2, 6],
    [3, 5],
  ]),
); // [[1,6]]
