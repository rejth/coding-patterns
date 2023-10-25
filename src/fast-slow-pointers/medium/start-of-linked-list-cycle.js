/**
 * Given the head of a Singly LinkedList that contains a cycle.
 * Write a function to find the starting node of the cycle.
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Time complexity - O(n)
// Space Complexity - O(1)
export function test(head) {
  let fast = head;
  let slow = head;
  let cycleLength = 0;

  const calculateCycleLength = (slow) => {
    let len = 0;
    let current = slow;

    while (current.next) {
      current = current.next;
      len++;
      if (current === slow) break;
    }

    return len;
  };

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    // found the cycle
    if (fast === slow) {
      cycleLength = calculateCycleLength(slow);
      break;
    }
  }

  let p1 = head;
  let p2 = head;
  // move pointer 2 ahead 'cycleLength' nodes
  while (cycleLength > 0) {
    p2 = p2.next;
    cycleLength--;
  }
  // increment both pointers until they meet at the start of the cycle
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // As pointer 2 is ‘K’ nodes ahead of pointer 1,
  // which means, pointer 2 must have completed one loop in the cycle when both pointers meet.
  // Their meeting point will be the start of the cycle
  return p1;
}

// Test cases
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${test(head).value}`); // 3

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${test(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${test(head).value}`);
