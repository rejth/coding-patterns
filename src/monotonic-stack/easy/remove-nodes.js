/**
 * Given the head node of a singly linked list.
 * Modify the list such that any node that has a node with a greater value to its right gets removed.
 * The function should return the head of the modified list.
 *
 * Input: 5 -> 3 -> 7 -> 4 -> 2 -> 1
 * Output: 7 -> 4 -> 2 -> 1
 * Explanation: 5 and 3 are removed as they have nodes with larger values to their right.
 *
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 * Output: 5
 * Explanation: 1, 2, 3, and 4 are removed as they have nodes with larger values to their right.
 *
 * Input: 5 -> 4 -> 3 -> 2 -> 1
 * Output: 5 -> 4 -> 3 -> 2 -> 1
 * Explanation: None of the nodes are removed as none of them have nodes with larger values to their right.
 */

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(head) {
  const stack = [];
  let current = head;

  while (current) {
    while (stack.length > 0 && current.value > stack[stack.length - 1].value) {
      stack.pop();
    }

    if (stack.length > 0) {
      stack[stack.length - 1].next = current;
    }

    stack.push(current);
    current = current.next;
  }

  return stack.length > 0 ? stack[0] : null;
}

// Creating the linked list 5 -> 3 -> 7 -> 4 -> 2 -> 1
let head = new ListNode(5);
head.next = new ListNode(3);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(2);
head.next.next.next.next.next = new ListNode(1);
head = test(head);

// Printing the modified list: 7 -> 4 -> 2 -> 1
let node = head;
let output = '';
while (node) {
  output += node.value;
  if (node.next) output += ' -> ';
  node = node.next;
}
console.log(output);

let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);
head1 = test(head1);

// Printing the modified list: 7 -> 4 -> 2 -> 1
let node1 = head1;
let output1 = '';
while (node1) {
  output1 += node1.value;
  if (node1.next) output1 += ' -> ';
  node1 = node1.next;
}
console.log(output1);

let head2 = new ListNode(5);
head2.next = new ListNode(4);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(2);
head2.next.next.next.next = new ListNode(1);
head2 = test(head2);

// Printing the modified list: 7 -> 4 -> 2 -> 1
let node2 = head2;
let output2 = '';
while (node2) {
  output2 += node2.value;
  if (node2.next) output2 += ' -> ';
  node2 = node2.next;
}
console.log(output2);
