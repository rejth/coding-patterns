/**
 * Topological Sort is used to find a linear ordering of elements that have dependencies on each other.
 * For example, if event ‘B’ is dependent on event ‘A’, ‘A’ comes before ‘B’ in topological ordering.
 *
 * This pattern defines an easy way to understand the technique for performing topological sorting of a set of elements and then solves a few problems using it.
 *
 * A topological ordering is possible only when the graph has no directed cycles, i.e. if the graph is a Directed Acyclic Graph (DAG).
 * If the graph has a cycle, some vertices will have cyclic dependencies which makes it impossible to find a linear ordering among vertices.
 *
 * Input: Vertices=4, Edges=[3, 2], [3, 0], [2, 0], [2, 1]
 * Output: Following are the two valid topological sorts for the given graph:
 * 1) 3, 2, 0, 1
 * 2) 3, 2, 1, 0
 *
 * Input: Vertices=5, Edges=[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]
 * Output: Following are all valid topological sorts for the given graph:
 * 1) 4, 2, 3, 0, 1
 * 2) 4, 3, 2, 0, 1
 * 3) 4, 3, 2, 1, 0
 * 4) 4, 2, 3, 1, 0
 * 5) 4, 2, 0, 3, 1
 */

// V is the total number of vertices and E is the total number of edges in the graph.
// Time complexity - O(V + E)
// Space Complexity - O(V + E)
export function test(vertices, edges) {
  const topologicalOrder = [];

  // create an adjacent list representing the graph, where the key (the index in array) is the parent vertex value and the value is the array of children vertices
  const graph = new Array(vertices).fill([]);

  // calculate the income degree of each child vertex
  const inDegree = new Array(vertices).fill(0);

  edges.forEach((edge) => {
    let [parent, child] = edge;
    graph[parent].push(child);
    inDegree[child]++;
  });

  // find the sources vertices (with 0 in-degree)
  const sources = [];
  inDegree.forEach((degree, vertex) => {
    if (degree === 0) {
      sources.push(vertex);
    }
  });

  // for each source, add it to the result and subtract one from all of its children's in-degrees.
  // If a child's in-degree becomes zero, add it to sources queue
  while (sources.length > 0) {
    const source = sources.shift();
    const children = graph[source];

    topologicalOrder.push(source);

    children.forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  if (topologicalOrder.length !== vertices) {
    return [];
  }

  return topologicalOrder;
}

// Test cases
console.log(
  test(5, [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
  ]),
); // 4, 2, 3, 0, 1
console.log(
  test(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ]),
); // 3, 2, 0, 1 or 3, 2, 1, 0
console.log(
  test(7, [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
  ]),
); // 6, 5, 4, 3, 0, 1, 2
