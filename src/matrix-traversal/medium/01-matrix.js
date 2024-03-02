/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const rows = mat.length;
  const columns = mat[0].length;

  /**
   * directions - [up, down, left, right], where each element is [dx, dy] subarray
   * [dx, dy], where dx is the change in the row coordinate, and dy is the change in the column coordinate.
   */
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]); // [row, column, distance]
      } else {
        mat[i][j] = Infinity; // Initialize other cells with a large value
      }
    }
  }

  while (queue.length > 0) {
    const [row, column, distance] = queue.shift();

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newColumn = column + dy;

      // Check if the new position is within bounds
      if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns) {
        if (mat[newRow][newColumn] > distance + 1) {
          mat[newRow][newColumn] = distance + 1;
          queue.push([newRow, newColumn, distance + 1]);
        }
      }
    }
  }

  return mat;
};

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
); // [[0,0,0],[0,1,0],[0,0,0]]

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]),
); // [[0,0,0],[0,1,0],[1,2,1]]
