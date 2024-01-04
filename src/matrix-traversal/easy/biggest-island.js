/**
 * Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water).
 * Find the biggest island in it. Write a function to return the area of the biggest island.
 *
 * An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water).
 * Each cell is considered connected to other cells horizontally or vertically (not diagonally).
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

  let biggestIslandSize = 0;

  const visitAllAdjacentCells = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= columns) return 0;
    if (matrix[i][j] === 0) return 0;

    // mark a cell visited
    matrix[i][j] = 0;
    let size = 1;

    size += visitAllAdjacentCells(i, j + 1); // right cell
    size += visitAllAdjacentCells(i, j - 1); // left cell
    size += visitAllAdjacentCells(i + 1, j); // lower cell
    size += visitAllAdjacentCells(i - 1, j); // upper cell

    return size;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 1) {
        biggestIslandSize = Math.max(biggestIslandSize, visitAllAdjacentCells(i, j));
      }
    }
  }

  return biggestIslandSize;
}

// Test cases
console.log(
  test([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ]),
); // 5
