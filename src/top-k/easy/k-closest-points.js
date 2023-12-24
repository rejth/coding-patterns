/**
 * Given an array of points in a 2D plane.
 * Find ‘K’ closest points to the origin.
 *
 * Input: points = [[1,2],[1,3]], K = 1
 * Output: [[1,2]]
 * Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
 * The Euclidean distance between (1, 3) and the origin is sqrt(10).
 * Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
 *
 * Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
 * Output: [[1, 3], [2, -1]]
 */
import { Heap } from '../Heap.js';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  compare(point) {
    return this.calculateDistance() - point.calculateDistance();
  }

  calculateDistance() {
    return this.x * this.x + this.y * this.y;
  }
}

// Time complexity - O(n * log(k))
// Space Complexity - O(k)
export function test(points, k) {
  /**
   * The closest point to the origin is a point that has the smallest Euclidean distance
   * The Euclidean distance of a point P(x,y) from the origin can be calculated through the following formula:
   * sqrt(x^2 + y^2)
   *
   * Basically, we need to find the smallest point in the array of points
   */
  const maxHeap = new Heap((a, b) => b.compare(a));

  // O(k * log(k))
  for (let i = 0; i < k; i++) {
    const [x, y] = points[i];
    maxHeap.push(new Point(x, y));
  }

  // O((n - k) * log(k))
  for (let i = k; i < points.length; i++) {
    const [x, y] = points[i];
    const point = new Point(x, y);
    const distance = point.calculateDistance();
    const largestDistance = maxHeap.peak().calculateDistance();

    if (distance < largestDistance) {
      maxHeap.pop();
      maxHeap.push(point);
    }
  }

  return maxHeap.heap.map((point) => [point.x, point.y]);
}

// Test cases
console.log(
  test(
    [
      [1, 2],
      [1, 3],
    ],
    1,
  ),
); // [[1, 2]]
console.log(
  test(
    [
      [1, 3],
      [3, 4],
      [2, -1],
    ],
    2,
  ),
); // [[1, 3], [2, -1]]
