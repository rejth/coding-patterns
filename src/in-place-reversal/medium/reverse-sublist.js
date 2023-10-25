/**
 * Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
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
export function test(head, p, q) {
  if (q <= p) return head;

  let current = head;
  let previous = null;
  let i = 0;

  // find the last node of the first part of Linked List before p position
  while (current.next && i < p - 1) {
    previous = current;
    current = current.next;
    i++;
  }

  // we are interested in three parts of the LinkedList,
  // the part before index 'p', the part between 'p' and 'q', and the part after index 'q'
  const last_node_of_first_part = previous;
  // after reversing the LinkedList 'current' will become the last node of the sub-list
  const last_node_of_sub_list = current;

  // reverse the second part between 'p' and 'q'
  while (current.next && i < q) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }

  // connect the reversed second part with the first part
  if (last_node_of_first_part) {
    // 'previous' is now the first node of the sub-list
    last_node_of_first_part.next = previous;
  } else {
    // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
    head = previous;
  }

  // connect with the last part
  last_node_of_sub_list.next = current;
  return head;
}

// Test cases
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

process.stdout.write('Nodes of original LinkedList are: ');
head.print();
const result = test(head, 3, 4);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print();
