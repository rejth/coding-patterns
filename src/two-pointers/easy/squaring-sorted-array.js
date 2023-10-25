/**
 * Given a sorted array.
 * Create a new array containing squares of all the numbers of the input array in the sorted order.
 *
 * Input: [-2, -1, 0, 2, 3]
 * Output: [0, 1, 4, 4, 9]
 */

// Time complexity - O(n * log(n))
// Space Complexity - O(n)
function test(array) {
  return array.map((el) => el * el).sort((a, b) => a - b);
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test2(array) {
  const len = array.length;
  const result = new Array(len);

  let i = 0;
  let j = len - 1;
  let highestSquareIdx = len - 1;

  while (i <= j) {
    const leftSquare = array[i] * array[i];
    const rightSquare = array[j] * array[j];

    if (rightSquare > leftSquare) {
      result[highestSquareIdx] = rightSquare;
      j--;
    } else {
      result[highestSquareIdx] = leftSquare;
      i++;
    }

    highestSquareIdx--;
  }

  return result;
}

// Test cases
console.log(test([-2, -1, 0, 2, 3])); // [0, 1, 4, 4, 9]
console.log(test([-3, -1, 0, 1, 2])); // [0, 1, 1, 4, 9]
