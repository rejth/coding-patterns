export class OrderedSet {
  constructor(comparator = (a, b) => b - a) {
    this.set = [];
    this.comparator = comparator;
  }

  get length() {
    return this.set.length;
  }

  // O(n)
  add(value) {
    const index = this.set.findIndex((item) => this.comparator(value, item) < 0);
    if (index === -1) this.set.push(value);
    // Remove 0 elements before index, and insert a new value right after the index
    else this.set.splice(index, 0, value);
  }

  // O(1)
  first() {
    if (!this.length) return undefined;
    return this.set[0];
  }

  // O(1)
  last() {
    if (!this.length) return undefined;
    return this.set[this.length - 1];
  }

  // O(1)
  shift() {
    if (!this.length) return undefined;
    return this.set.shift();
  }

  // O(1)
  pop() {
    if (!this.length) return undefined;
    return this.set.pop();
  }

  // O(1)
  findElementByIndex(index) {
    if (!this.length) return undefined;
    return this.set[index];
  }

  // O(n)
  findIndex(value) {
    return this.set.findIndex((item) => item === value);
  }
}

// const orderedSet = new OrderedSet();
// orderedSet.add(5);
// orderedSet.add(1);
// orderedSet.add(2);
// orderedSet.add(10);
//
// console.log(orderedSet.set);
//
// console.log(orderedSet.findElementByIndex(1)); // Find 2nd element in descending order
// console.log(orderedSet.findIndex(2)); // Elements less than 2 in descending order
