class Heap {
  /**
   * Create a Heap
   * @param {function} compareFunction - compares child and parent element
   * to see if they should swap.  If return value is less than 0 it will
   * swap to prioritize the child.
   */
  constructor(compareFunction) {
    this.store = [];
    this.compareFunction = compareFunction;
  }

  peak() {
    return this.store[0];
  }

  size() {
    return this.store.length;
  }

  pop() {
    if (this.size() < 2) {
      return this.store.pop();
    }
    const result = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return result;
  }

  push(val) {
    this.store.push(val);
    this.heapifyUp(this.size() - 1);
  }

  heapifyUp(child) {
    while (child) {
      const parent = Math.floor((child - 1) / 2);

      if (this.shouldSwap(child, parent)) {
        [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]];
        child = parent;
      } else {
        return child;
      }
    }
  }

  heapifyDown(parent) {
    while (true) {
      let [child, child2] = [1, 2].map((x) => parent * 2 + x).filter((x) => x < this.size());
      if (this.shouldSwap(child2, child)) {
        child = child2;
      }

      if (this.shouldSwap(child, parent)) {
        [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]];
        parent = child;
      } else {
        return parent;
      }
    }
  }

  shouldSwap(child, parent) {
    return child && this.compareFunction(this.store[child], this.store[parent]) < 0;
  }
}

/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function (servers, tasks) {
  const ans = new Array(tasks.length).fill(0);

  // sorted by server capacity and index in ascending order
  const availableServers = new Heap((a, b) => {
    return a.weight - b.weight || a.index - b.index;
  });
  // sorted by the time to become available, server capacity and index in ascending order
  const usedServers = new Heap((a, b) => {
    return a.availableTime - b.availableTime || a.weight - b.weight || a.index - b.index;
  });

  for (let i = 0; i < servers.length; i++) {
    availableServers.push({ index: i, weight: servers[i], availableTime: 0 });
  }

  for (let i = 0; i < tasks.length; i++) {
    // find all the servers that are available and add them to the free servers heap
    while (usedServers.size() > 0 && usedServers.peak().availableTime <= i) {
      availableServers.push(usedServers.pop());
    }

    // get the free server with the smallest weight or smallest index or the usedServer with the smallest available time
    const server = availableServers.pop() || usedServers.pop();
    ans[i] = server.index;

    // A server that is assigned task i at second i will be free again at second i + tasks[i].
    server.availableTime = i + tasks[i];
    usedServers.push(server);
  }

  return ans;
};

console.log(assignTasks([3, 3, 2], [1, 2, 3, 2, 1, 2])); // [2,2,0,2,1,2]
console.log(assignTasks([5, 1, 4, 3, 2], [2, 1, 2, 4, 5, 2, 1])); // [1,4,1,4,1,3,2]
