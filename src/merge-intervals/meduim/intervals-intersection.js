/**
 * Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
 *
 * Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
 * Output: [2, 3], [5, 6], [7, 7]
 * Explanation: The output list contains the common intervals between the two lists.
 *
 * Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
 * Output: [5, 7], [9, 10]
 * Explanation: The output list contains the common intervals between the two lists.
 */

// Time complexity - O(n + m)
// Space Complexity - O(1)
export function test(arrayA, arrayB) {
  const intersected = [];
  let i = 0;
  let j = 0;

  while (i < arrayA.length && j < arrayB.length) {
    const [startA, endA] = arrayA[i];
    const [startB, endB] = arrayB[j];

    const isOverlapped =
      (startA >= startB && startA <= endB) || (startB >= startA && startB <= endA);

    if (isOverlapped) {
      const maxStart = Math.max(startA, startB);
      const minEnd = Math.min(endA, endB);
      intersected.push([maxStart, minEnd]);
    }

    if (endA < endB) i++;
    else j++;
  }

  return intersected;
}

// Test cases
console.log(
  test(
    [
      [1, 3],
      [5, 6],
      [7, 9],
    ],
    [
      [2, 3],
      [5, 7],
    ],
  ),
); // [2, 3], [5, 6], [7, 7]

console.log(
  test(
    [
      [1, 3],
      [5, 7],
      [9, 12],
    ],
    [[5, 10]],
  ),
); // [5, 7], [9, 10]
