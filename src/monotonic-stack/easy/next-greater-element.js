/**
 * Given two integer arrays nums1 and nums2.
 * Return an array answer such that answer[i] is the next greater number for every nums1[i] in nums2.
 * The next greater element for an element x is the first element to the right of x that is greater than x.
 * If there is no greater number, output -1 for that number.
 *
 * The numbers in nums1 are all present in nums2 and nums2 is a permutation of nums1.
 *
 * Input: nums1 = [4,2,6], nums2 = [6,2,4,5,3,7]
 * Output: [5,4,7]
 * Explanation: The next greater number for 4 is 5, for 2 is 4, and for 6 is 7 in nums2.
 *
 * Input: nums1 = [9,7,1], nums2 = [1,7,9,5,4,3]
 * Output: [-1,9,7]
 * Explanation: The next greater number for 9 does not exist, for 7 is 9, and for 1 is 7 in nums2.
 *
 * Input: nums1 = [5,12,3], nums2 = [12,3,5,4,10,15]
 * Output: [10,15,5]
 * Explanation: The next greater number for 5 is 10, for 12 is 15, and for 3 is 5 in nums2.
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (const n of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map.set(stack.pop(), n);
    }
    stack.push(n);
  }

  return nums1.map((x) => (map.has(x) ? map.get(x) : -1));
}

console.log(test([4, 2, 6], [6, 2, 4, 5, 3, 7])); // [5, 4, 7]
console.log(test([9, 7, 1], [1, 7, 9, 5, 4, 3])); // [-1, 9, 7]
console.log(test([5, 12, 3], [12, 3, 5, 4, 10, 15])); // [10, 15, 5]
