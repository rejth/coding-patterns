/**
 * Given a binary tree, populate an array to represent its zigzag level order traversal.
 * You should populate the values of all nodes of the first level from left to right.
 * Then right to left for the next level and keep alternating in the same manner for the following levels.
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
  const zigzagTraversal = [];

  // true - from the left to the right
  // false - from the right to the left
  let direction = true;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const nodesOnLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (direction) {
        nodesOnLevel.push(currentNode.value);
      } else {
        nodesOnLevel.unshift(currentNode.value);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    direction = !direction;

    zigzagTraversal.push(nodesOnLevel);
  }

  return zigzagTraversal;
}

// Test cases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);

console.log(`Zigzag traversal: ${test(root)}`);
