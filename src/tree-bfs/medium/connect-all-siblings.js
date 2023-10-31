/**
 * Given a binary tree, connect each node with its level order successor.
 * The last node of each level should point to the first node of the next level.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
  // tree traversal using 'next' pointer
  print_tree() {
    process.stdout.write("Traversal using 'next' pointer: ");
    let current = this;
    while (current !== null) {
      process.stdout.write(`${current.value} `);
      current = current.next;
    }
  }
}

// Time complexity - O(n)
// Space Complexity - O(n)
// We will use a Queue to keep track of all the nodes of a level before we jump onto the next level.
export function test(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let previousNode = null;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (previousNode) {
        previousNode.next = currentNode;
      }

      previousNode = currentNode;

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    if (previousNode && queue.length > 0) {
      previousNode.next = queue[0];
    }
  }

  return root;
}

// Test cases
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
test(root).print_tree();
