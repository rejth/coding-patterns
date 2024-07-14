import _isEqual from 'lodash/isEqual.js';

/**
 * Constraints:
 * 1. "intervals" is sorted in ascending order.
 * 2. "intervals" does not have any overlapping intervals.
 * 3. We don't need to modify "intervals" in-place. We can make a new array and return it.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @returns {number[][]}
 */
function insertInterval(intervals, newInterval) {
  if (newInterval.length === 0) return intervals;

  const merged = [];
  let i = 0;

  // Add all intervals that are before the new interval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i++;
  }

  // Merge all intervals that overlap with the new interval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  // Insert the new interval
  merged.push(newInterval);

  // Add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
}

const testCases = [
  {
    input: [
      [
        [1, 3],
        [6, 9],
      ],
      [],
    ],
    expected: [
      [1, 3],
      [6, 9],
    ],
    scenario: 'Inserting empty interval',
  },
  {
    input: [
      [
        [2, 4],
        [6, 9],
      ],
      [1, 3],
    ],
    expected: [
      [1, 4],
      [6, 9],
    ],
    scenario: '1. Inserting an interval in the start of the array',
  },
  {
    input: [
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
    ],
    expected: [
      [1, 5],
      [6, 9],
    ],
    scenario: '2. Inserting an interval in the middle of the array',
  },
  {
    input: [
      [
        [2, 4],
        [6, 9],
      ],
      [1, 5],
    ],
    expected: [
      [1, 5],
      [6, 9],
    ],
    scenario: '3. Inserting an interval in the middle of the array',
  },
  {
    input: [
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
    ],
    expected: [
      [1, 2],
      [3, 10],
      [12, 16],
    ],
    scenario: '4. Inserting an interval in the middle of the array',
  },
];

testCases.forEach((testCase) => {
  const output = insertInterval(...testCase.input);

  console.assert(
    _isEqual(output, testCase.expected),
    `Test case "${testCase.scenario}" failed.\n
    Input was ${testCase.input}\n
    Expected ${JSON.stringify(testCase.expected)}\n
    Got ${JSON.stringify(output)}.`,
  );
});
