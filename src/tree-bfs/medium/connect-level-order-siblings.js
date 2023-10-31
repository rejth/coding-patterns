/**
 * Given a binary tree, connect each node with its level order successor.
 * The last node of each level should point to a null node.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;

    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;

      while (current !== null) {
        process.stdout.write(`${current.value} `);
        if (nextLevelRoot === null) {
          if (current.left) {
            nextLevelRoot = current.left;
          } else if (current.right) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
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
    let previousNode = null;
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (previousNode) {
        previousNode.next = node;
      }

      previousNode = node;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
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
console.log(test(root));
console.log(test(root).left.left);
//
root.print_level_order();
