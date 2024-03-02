/**
You are given a 2D matrix containing only 1s (land) and 0s (water).

An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water).
Each cell is considered connected to other cells horizontally or vertically (not diagonally).

A closed island is an island that is totally surrounded by 0s (i.e., water).
This means all horizontally and vertically connected cells of a closed island are water.
This also means that, by definition, a closed island can't touch an edge (as then the edge cells are not connected to any water cell).

Write a function to find the number of closed islands in the given matrix.
 */

/**
 * Algorithm and complexity:
 *
 * Time complexity - O(N * M), N - the number of matrix rows, M - the number of matrix columns
 * Space complexity - O(N * M) because of DFS recursion stack
 */
export function test(matrix) {
  let closedIslands = 0;

  const rows = matrix.length;
  const columns = matrix[0].length;
  const visited = Array(rows)
    .fill(false)
    .map(() => Array(columns).fill(false));

  const visitAllAdjacentCells = (i, j) => {
    // returning false since the island is touching an edge
    if (i < 0 || i >= rows || j < 0 || j >= columns) return false;
    // returning true as the island is surrounded by water
    if (matrix[i][j] === 0 || visited[i][j]) return true;

    let isClosed = true;
    visited[i][j] = true;

    // recursively visit all adjacent cells (horizontally & vertically)
    isClosed &= visitAllAdjacentCells(i, j + 1); // right cell
    isClosed &= visitAllAdjacentCells(i, j - 1); // left cell
    isClosed &= visitAllAdjacentCells(i + 1, j); // lower cell
    isClosed &= visitAllAdjacentCells(i - 1, j); // upper cell

    return isClosed;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 1 && !visited[i][j]) {
        const isClosed = visitAllAdjacentCells(i, j);
        if (isClosed) closedIslands++;
      }
    }
  }

  return closedIslands;
}

// Test cases
console.log(
  test([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
); // 1
console.log(
  test([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]),
); // 2
