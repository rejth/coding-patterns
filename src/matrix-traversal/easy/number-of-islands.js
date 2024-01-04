/**
 * Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water).
 * Count the number of islands in it.
 *
 * An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water).
 * Each cell is considered connected to other cells horizontally or vertically (not diagonally).
 */

/**
 * Algorithm and complexity:
 * 1. Once we find a cell with the value '1' (i.e., land), we have found an island.
 * 2. Using that cell as the root node, we will perform a Depth First Search (DFS) to find all of its connected land cells.
 * 3. During our DFS traversal, we will find and mark all the horizontally and vertically connected land cells.
 * 4. We need to have a mechanism to mark each land cell visited to ensure that each land cell is visited only once.
 * 5. To mark a cell visited, we can just update the given input matrix. Whenever we see a '1', we will make it '0'.
 *
 * Time complexity - O(N * M), N - the number of matrix rows, M - the number of matrix columns
 * Space complexity - O(N * M) because of DFS recursion stack
 */
export function test(matrix) {
  let islands = 0;

  const rows = matrix.length;
  const columns = matrix[0].length;

  const visit_all_adjacent_islands_dfs = (row, column) => {
    if (row < 0 || row >= rows || column < 0 || column >= columns) return;
    if (matrix[row][column] === 0) return;

    // mark the cell visited by making it a water cell
    matrix[row][column] = 0;

    // recursively visit all adjacent cells (horizontally & vertically)
    visit_all_adjacent_islands_dfs(row, column + 1); // right cell
    visit_all_adjacent_islands_dfs(row, column - 1); // left cell
    visit_all_adjacent_islands_dfs(row + 1, column); // upper cell
    visit_all_adjacent_islands_dfs(row - 1, column); // lower cell
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 1) {
        islands++; // we have found a separate island
        visit_all_adjacent_islands_dfs(i, j);
      }
    }
  }

  return islands;
}

// Test cases
console.log(
  test([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
); // 1
console.log(
  test([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ]),
); // 3
