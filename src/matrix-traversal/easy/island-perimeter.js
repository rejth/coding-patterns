/**
You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water).
Each cell is considered connected to other cells horizontally or vertically (not diagonally).

There are no lakes on the island, so the water inside the island is not connected to the surrounding water.
A cell is a square with a side length of 1.

The given matrix has only one island.
Write a function to find the perimeter of that island.
 */

/**
 * Algorithm and complexity:
 *
 * Time complexity - O(N * M), N - the number of matrix rows, M - the number of matrix columns
 * Space complexity - O(N * M) because of DFS recursion stack
 */
export function test(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const calculateIslandSize = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= columns) return 0;
    if (matrix[i][j] === 0) return 0;

    let size = 1;
    matrix[i][j] = 0;

    size += calculateIslandSize(i, j + 1); // right cell
    size += calculateIslandSize(i, j - 1); // left cell
    size += calculateIslandSize(i + 1, j); // lower cell
    size += calculateIslandSize(i - 1, j); // upper cell

    return size;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 1) {
        const size = calculateIslandSize(i, j);
        /**
         * size * 4 - overall island perimeter
         * size - 1 - number of common (adjacent) sides the cells are connected with each other
         * (size - 1) * 2 - overall number of sides because one common side is a sum of two sides of adjacent cells
         */
        return size * 4 - (size - 1) * 2;
      }
    }
  }
}

// Test cases
console.log(
  test([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
); // 14
console.log(
  test([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
  ]),
); // 12
