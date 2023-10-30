/**
 * Given a binary tree, populate an array to represent the averages of all of its levels.
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
  const averages = [];

  while (queue.length > 0) {
    let levelSum = 0.0;
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.value;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    averages.push(levelSum / levelSize);
  }

  return averages;
}

// Test cases
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(`Level order traversal: `, test(root)); // [1, 2.5, 5.5]

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.left.right = new TreeNode(2);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);
console.log(`Level order traversal: `, test(root1)); // [12, 4, 6.5]
