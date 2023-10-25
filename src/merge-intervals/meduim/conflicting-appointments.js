/**
 * Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
 *
 * Appointments: [[1,4], [2,5], [7,9]]
 * Output: false
 * Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
 *
 * Appointments: [[6,7], [2,4], [8,12]]
 * Output: true
 * Explanation: None of the appointments overlap, therefore a person can attend all of them.
 *
 * Appointments: [[4,5], [2,3], [3,6]]
 * Output: false
 * Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
 */

// Time complexity - O(n * log(n))
// Space Complexity - O(n)
export function test(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let minStart = intervals[0][0];
  let maxEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start <= maxEnd) {
      return false;
    } else {
      minStart = start;
      maxEnd = end;
    }
  }

  return true;
}

// Test cases
console.log(
  test([
    [1, 4],
    [2, 5],
    [7, 9],
  ]),
); // false

console.log(
  test([
    [6, 7],
    [2, 4],
    [8, 12],
  ]),
); // true

console.log(
  test([
    [4, 5],
    [2, 3],
    [3, 6],
  ]),
); // false
