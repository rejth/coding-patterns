/**
 * Given a binary tree and a number ‘S’.
 * Find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
 */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Time complexity - O(n * n)
// Space Complexity - O(n * log(n))
function findPathsRecursively(root, sum, currentPath, paths) {
  if (!root) return;

  currentPath.push(root.value);

  if (root.value === sum && !root.left && !root.right) {
    paths.push([...currentPath]);
  } else {
    findPathsRecursively(root.left, sum - root.value, currentPath, paths);
    findPathsRecursively(root.right, sum - root.value, currentPath, paths);
  }

  currentPath.pop();
}

export function test(root, sum) {
  const allPaths = [];
  findPathsRecursively(root, sum, [], allPaths);
  return allPaths;
}

// Test cases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23;
let result = test(root, sum);

process.stdout.write(`Tree paths with sum ${sum}: `);
for (let i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}
