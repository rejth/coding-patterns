/**
 * There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’.
 * Each task can have some prerequisite tasks which need to be completed before it can be scheduled.
 * Given the number of tasks and a list of prerequisite pairs, find out if it is possible to schedule all the tasks.
 *
 * Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
 * Output: true
 * Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs
 * to finish before '2' can be scheduled. One possible scheduling of tasks is: [0, 1, 2]
 *
 * Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
 * Output: false
 * Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.
 *
 * Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
 * Output: true
 * Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5]
 */

// Time complexity - O(V + E)
// Space Complexity - O(V + E)
export function test(vertices, edges) {
  const topologicalOrder = new Set();

  // the graph, where a key (array index) is the parent vertex, a value - a list of child vertices
  const adjacentList = new Array(vertices).fill(null).map(() => []);
  // the list of income degrees (the number of parents) of each vertex
  const inDegree = new Array(vertices).fill(0);

  edges.forEach(([parent, child]) => {
    adjacentList[parent].push(child);
    inDegree[child]++;
  });

  const sources = [];
  inDegree.forEach((degree, vertex) => {
    if (degree === 0) {
      sources.push(vertex);
    }
  });

  // we perform a topological sorting using Breadth First Search to get all the vertices in a topological order
  while (sources.length > 0) {
    const parent = sources.shift();
    topologicalOrder.add(parent);

    const children = adjacentList[parent];
    children.forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  // if a topological order set has less element than the initial number of vertices, that means the graph has a cycle.
  // if the graph has a cycle, it is not possible to schedule all the tasks.
  return topologicalOrder.size === vertices;
}

// Test cases
console.log(
  test(3, [
    [0, 1],
    [1, 2],
  ]),
); // True
console.log(
  test(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ]),
); // False
console.log(
  test(5, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ]),
); // True
