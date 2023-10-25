/**
 * Given the head of a Singly LinkedList, reverse the LinkedList.
 * Write a function to return the new head of the reversed LinkedList.
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  print() {
    let temp = this;
    while (temp) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(head) {
  const values = [head.value];

  let current = head;
  while (current.next) {
    current = current.next;
    values.push(current.value);
  }

  const reversed = new Node(values.pop());
  while (values.length > 0) {
    let node = reversed;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(values.pop());
  }

  return reversed;
}

// Time complexity - O(n)
// Space Complexity - O(1)
export function test2(head) {
  let current = head;
  let previous = null;

  while (current.next) {
    const next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    // before we move to the next node, point previous to the current node
    previous = current;
    current = next; // move on the next node
  }

  return previous;
}

// Test cases
const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Reversed Linked List: ${test(head).next.next.next.next.value}`);
// console.log(`Reversed Linked List: ${test2(head).next.next.next.next.value}`);
