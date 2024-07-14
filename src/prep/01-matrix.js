import _isEqual from 'lodash/isEqual.js';

/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 */

/**
 * Constraints:
 */

/**
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
function test(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const queue = [];
  /**
   * DIRECTIONS - [up, down, left, right], where each element is [dx, dy] subarray
   * [dx, dy], where "dx" is the change in the column coordinate, and "dy" is the change in the row coordinate.
   */
  const DIRECTIONS = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j, 0]); // [row, column, distance]
      } else {
        matrix[i][j] = Infinity;
      }
    }
  }

  while (queue.length > 0) {
    const [row, column, distance] = queue.shift();

    for (const [dx, dy] of DIRECTIONS) {
      const newRow = row + dy;
      const newColumn = column + dx;
      // The distance between two adjacent cells is 1
      const newDistance = distance + 1;

      // Specify the matrix boundaries to not go outside the matrix
      if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns) {
        if (matrix[newRow][newColumn] > newDistance) {
          matrix[newRow][newColumn] = newDistance;
          queue.push([newRow, newColumn, newDistance]);
        }
      }
    }
  }

  return matrix;
}

const testCases = [
  {
    input: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    expected: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    scenario: 'Scenario 1',
  },
  {
    input: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    expected: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ],
    scenario: 'Scenario 2',
  },
];

testCases.forEach(({ input, expected, scenario }) => {
  const output = test(input);
  console.assert(
    _isEqual(output, expected),
    `Test case "${scenario}" failed.\n
    Input was ${input}\n
    Expected ${JSON.stringify(expected)}\n
    Got ${JSON.stringify(output)}.`,
  );
});
