/**
 * Any image can be represented by a 2D integer array (i.e., a matrix), where each cell represents the pixel value of the image.
 *
 * Flood fill algorithm takes a starting cell (i.e., a pixel) and a color.
 * The given color is applied to all horizontally and vertically connected cells with the same color as that of the starting cell.
 * Recursively, the algorithm fills cells with the new color until it encounters a cell with a different color than the starting cell.
 *
 * Given a matrix, a starting cell, and a color.
 * Flood fill the matrix.
 */

/**
 * Algorithm and complexity:
 * 1. The idea is basically to find a set (island) of adjacent cells with the value of starting cell
 * 2. Once we find a cell with the value of starting cell, we change its color and perform a search to find all
 * adjacent (vertically and horizontally) cells of the given matrix.
 *
 * Time complexity - O(N * M), N - the number of matrix rows, M - the number of matrix columns
 * Space complexity - O(N * M) because of DFS recursion stack
 */
export function test(matrix, x, y, newColor) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const currentColor = matrix[x][y];

  const visitAllAdjacentCells = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= columns) return;
    if (matrix[i][j] !== currentColor) return;

    matrix[i][j] = newColor;

    visitAllAdjacentCells(i, j + 1); // right cell
    visitAllAdjacentCells(i, j - 1); // left cell
    visitAllAdjacentCells(i + 1, j); // lower cell
    visitAllAdjacentCells(i - 1, j); // upper cell
  };

  for (let i = x; i < rows; i++) {
    for (let j = y; j < columns; j++) {
      if (matrix[i][j] === currentColor) {
        visitAllAdjacentCells(i, j);
      }
    }
  }

  return matrix;
}

// Test cases
console.log(
  test(
    [
      [0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    1,
    3,
    2,
  ),
);
/**
 * [
 *   [ 0, 2, 2, 2, 0 ],
 *   [ 0, 0, 0, 2, 2 ],
 *   [ 0, 2, 2, 2, 0 ],
 *   [ 0, 2, 2, 0, 0 ],
 *   [ 0, 0, 0, 0, 0 ]
 * ]
 */
console.log(
  test(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
    3,
    2,
    5,
  ),
);
/**
 * [
 *   [ 0, 0, 0, 0, 0 ],
 *   [ 0, 0, 0, 0, 0 ],
 *   [ 0, 0, 5, 5, 0 ],
 *   [ 0, 0, 5, 0, 0 ],
 *   [ 0, 0, 5, 0, 0 ]
 * ]
 */
