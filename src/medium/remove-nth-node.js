/**
 * Problem clarification:
 * Remove the nth node from the end of the Linked List. Return the head of the modified list.
 *
 * Algorithm:
 * 1. Iterate through the list from head to tail to count the number "N" of nodes
 * 2. Calculate the index of the node to be removed: N - n
 * 3. Iterate through the list again. Once we reach the nth node, remove it
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export function test(head, n) {
  let current = head;
  let count = 0;

  while (current) {
    current = current.next;
    count++;
  }

  const nth = count - n;
  current = head;
  count = 0;

  let previous;
  while (current) {
    if (count === nth - 1) {
      previous = current;
    } else if (previous && count === nth) {
      previous.next = current.next;
      break;
    } else if (count === nth) {
      return current.next;
    }

    current = current.next;
    count++;
  }

  return head;
}

export function test1(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let first = dummy;
  let second = dummy;

  // Move the first pointer "n" nodes ahead in the list
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  // Move both first and second pointers one step at a time until the first pointer reaches the end of the list.
  // The second pointer will now be "n" nodes from the end
  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return dummy.next;
}

// 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(test(head, 2)); // 1 -> 2 -> 3 -> 5

// 10 -> 20 -> 30 -> 40
const head1 = new Node(10);
head1.next = new Node(20);
head1.next.next = new Node(30);
head1.next.next.next = new Node(40);
console.log(test(head1, 4)); // 20 -> 30 -> 40

//  7 -> 14 -> 21 -> 28 -> 35
const head2 = new Node(7);
head2.next = new Node(14);
head2.next.next = new Node(21);
head2.next.next.next = new Node(28);
head2.next.next.next.next = new Node(35);
console.log(test(head2, 3)); // 7 -> 14 -> 28 -> 35

const head3 = new Node(1);
console.log(test(head3, 1)); // null

const head4 = new Node(1);
head4.next = new Node(2);
console.log(test(head4, 1)); // 1
