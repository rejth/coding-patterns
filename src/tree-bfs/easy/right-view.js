/**
 * Given a binary tree, return an array containing nodes in its right view.
 * The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
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
  const rightNodes = [];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (i === levelSize - 1) {
        rightNodes.push(node.value);
      }

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return rightNodes;
}

// Test cases
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const result = test(root);
process.stdout.write('Tree right view: ');
for (let i = 0; i < result.length; i++) {
  process.stdout.write(`${result[i]} `);
}

const root1 = new TreeNode(12);
root1.left = new TreeNode(7);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(9);
root1.right.left = new TreeNode(10);
root1.right.right = new TreeNode(5);
root1.left.left.left = new TreeNode(3);

const result1 = test(root1);
process.stdout.write('Tree right view: ');
for (let i = 0; i < result1.length; i++) {
  process.stdout.write(`${result1[i]} `);
}
