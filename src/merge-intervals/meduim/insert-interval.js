/**
 * Given a list of non-overlapping intervals sorted by their start time.
 * Insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
 *
 * Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
 * Output: [[1,3], [4,7], [8,12]]
 * Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
 *
 * Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
 * Output: [[1,3], [4,12]]
 * Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
 *
 * Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
 * Output: [[1,4], [5,7]]
 * Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(intervals, newInterval) {
  const newIntervals = [];
  let i = 0;
  let j = 0;
  let inserted = false;

  while (i < intervals.length + 1) {
    const [start, end] = intervals[j];
    if (start <= newInterval[0]) {
      newIntervals.push([start, end]);
      i++;
    } else {
      if (!inserted) newIntervals.push(newInterval);
      newIntervals.push([start, end]);
      inserted = true;
      i += 2;
    }
    j++;
  }

  const mergedInterval = [];
  let minStart = newIntervals[0][0];
  let maxEnd = newIntervals[0][1];

  for (let i = 0; i < newIntervals.length; i++) {
    const [start, end] = newIntervals[i];

    if (start <= maxEnd) {
      maxEnd = Math.max(end, maxEnd);
    } else {
      mergedInterval.push([minStart, maxEnd]);
      minStart = start;
      maxEnd = end;
    }
  }

  mergedInterval.push([minStart, maxEnd]);
  return mergedInterval;
}

// Test cases
console.log(
  test(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 6],
  ),
); // [[1,3], [4,7], [8,12]]

console.log(
  test(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 10],
  ),
); // [[1,3], [4,12]]

console.log(
  test(
    [
      [2, 3],
      [5, 7],
    ],
    [1, 4],
  ),
); // [[1,4], [5,7]]
