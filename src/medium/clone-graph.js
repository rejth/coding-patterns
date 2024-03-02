class Node {
  constructor(value = 0, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors;
  }
}

export function test(node) {
  if (!node || node.value <= 0) return null;
  if (!node.neighbors.length) return node;

  const queue = [node];
  const visited = new Set();
  const adjacentList = [];

  while (queue.length > 0) {
    const current = queue.shift();
    const value = current.value;
    const index = value - 1;

    if (!visited.has(value)) {
      visited.add(value);

      for (const child of current.neighbors) {
        queue.push(child);
        const copy = new Node(child.value);
        copy.neighbors = child.neighbors;

        if (adjacentList[index]) {
          adjacentList[index].push(copy);
        } else {
          adjacentList[index] = [copy];
        }
      }
    }
  }

  const clone = new Node(node.value);
  clone.neighbors = adjacentList[node.value - 1];

  return clone;
}

export function test1(node) {
  if (!node) return null;

  const queue = [node];
  const visited = new Map();
  const newNode = new Node(node.value);

  visited.set(node, newNode);

  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        const newNeighbor = new Node(neighbor.value);
        visited.set(neighbor, newNeighbor);
        queue.push(neighbor);
      }

      const newNeighbor = visited.get(neighbor);
      visited.get(current).neighbors.push(newNeighbor);
    }
  }

  return newNode;
}

function printGraph(node) {
  const printed = new Set();
  const queue = [node];

  while (queue.length) {
    let current = queue.shift();

    if (!printed.has(current.value)) {
      console.log(current.value + '-->' + current.neighbors.map((n) => n.value).join(' '));
      for (let n of current.neighbors) {
        queue.push(n);
      }
      printed.add(current.value);
    }
  }
}

// Test cases
let node1 = new Node(1);
let node2 = new Node(2);
node1.neighbors = [node2];
node2.neighbors = [node1];

console.log('initial graph: ');
printGraph(node1);
console.log('deep copy: ');
printGraph(test1(node1));

// --------------------------------------------------------------------------------------------

let node3 = new Node(1);
let node4 = new Node(2);
let node5 = new Node(3);
let node6 = new Node(4);
node3.neighbors = [node4, node6];
node4.neighbors = [node3, node5];
node5.neighbors = [node4, node6];
node6.neighbors = [node3, node5];

console.log('initial graph: ');
printGraph(node3);
console.log('deep copy: ');
printGraph(test1(node3));

// --------------------------------------------------------------------------------------------

let node7 = new Node(1);

console.log('initial graph: ');
printGraph(node7);
console.log('deep copy: ');
printGraph(test1(node7));
