/**
 * Given a binary tree and a number ‘S’,
 * Find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
 */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(root, sum) {
  if (!root) return false;
  if (root.value === sum && !root.left && !root.right) return true;
  return test(root.left, sum - root.value) || test(root.right, sum - root.value);
}

// Test cases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${test(root, 23)}`);
console.log(`Tree has path: ${test(root, 16)}`);
