/**
 * Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
 * You should populate the values of all nodes in each level from left to right in separate sub-arrays.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Time complexity - O(n)
// Space Complexity - O(n)
// We will use a Queue to keep track of all the nodes of a level before we jump onto the next level.
export function test(root) {
  if (!root) return null;

  const queue = [root];
  const traversal = [];

  while (queue.length > 0) {
    const subArrayOnLevel = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      subArrayOnLevel.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    traversal.unshift(subArrayOnLevel);
  }

  return traversal;
}

// Test cases
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(`Level order traversal: `, test(root)); // [ [ 4, 5, 6, 7 ], [ 2, 3 ], [ 1 ] ]

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);
console.log(`Level order traversal: `, test(root1)); // [ [ 9, 10, 5 ], [ 7, 1 ], [ 12 ] ]
