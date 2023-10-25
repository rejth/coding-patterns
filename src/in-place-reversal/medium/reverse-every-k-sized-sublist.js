/**
 * Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
 *
 * If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
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
// Space Complexity - O(1)
export function test(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let current = head;
  let previous = null;

  while (true) {
    const lastNodeOfPreviousPart = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const lastNodeOfSublist = current;
    let i = 0;

    // reverse 'k' nodes
    while (current && i < k) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i++;
    }

    // connect with the previous part
    if (lastNodeOfPreviousPart) {
      lastNodeOfPreviousPart.next = previous;
    } else {
      head = previous;
    }

    // connect with the next part
    lastNodeOfSublist.next = current;

    if (!current) {
      break;
    }

    previous = lastNodeOfSublist;
  }

  return head;
}

// Test cases
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

process.stdout.write('Nodes of original LinkedList are: ');
head.print();
const result = test(head, 3);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print();
