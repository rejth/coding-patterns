/**
 * Given two 2D arrays of item-value pairs, named items_1 and items_2.
 *
 * item[i] = [value_i, weight_i], where each value_i in these arrays is unique within its own array and is paired with a weight_i.
 * Combine these arrays such that if an item appears in both, its values are summed up.
 * The final merged array should be sorted based on the value_i.
 *
 * Input: items1 = [[1,2],[4,3]], items2 = [[2,1],[4,3],[3,4]]
 * Expected Output: [[1,2],[2,1],[3,4],[4,6]]
 * Justification: Item 1 has value 2 in items1 and doesn't exist in items2, item 2 has value 1 in items2, item 4 is summed up.
 *
 * Input: items1 = [[5,5]], items2 = [[5,10]]
 * Expected Output: [[5,15]]
 * Justification: Item 5 exists in both arrays, so their values are summed.
 *
 * Input: items1 = [[1,1],[2,2]], items2 = [[3,3]]
 * Expected Output: [[1,1],[2,2],[3,3]]
 * Justification: All items are unique across items1 and items2, so they remain unchanged.
 */

/**
 * Algorithm and complexity:
 *
 * Time complexity - O(n * log(n))
 * Space complexities - O(n)
 */
export function test(items1, items2) {
  const weights = new Map();

  items1.forEach(([value, weight]) => {
    weights.set(value, weight);
  });

  items2.forEach(([value, weight]) => {
    weights.set(value, (weights.get(value) || 0) + weight);
  });

  const result = [];
  for (const element of weights.entries()) {
    result.push(element);
  }

  return result.sort((a, b) => a[0] - b[0]);
}

// Test cases
console.log(test([[5, 5]], [[5, 10]])); // [[5,15]]

console.log(
  test(
    [
      [1, 2],
      [4, 3],
    ],
    [
      [2, 1],
      [4, 3],
      [3, 4],
    ],
  ),
); // [[1,2],[2,1],[3,4],[4,6]]

console.log(
  test(
    [
      [1, 1],
      [2, 2],
    ],
    [[3, 3]],
  ),
); // [[1,1],[2,2],[3,3]]
