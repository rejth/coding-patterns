/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(x) {
  let sqrt;

  while (sqrt > 0) {
    sqrt = x / 2;
  }

  return sqrt;
}

// Test cases
console.log(test(8)); // 2
console.log(test(4)); // 2
console.log(test(2)); // 1
