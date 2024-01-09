import { Heap } from '../../top-k/Heap.js';

// time complexity - O(n * log(n))
// spase complexity - O(n)
export function test(nums, limit) {
  let maxLength = 0;
  let windowStart = 0;
  const maxHeap = new Heap((a, b) => b - a);

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    const current = nums[windowEnd];
    maxHeap.push(current);

    const diff = maxHeap.peak() - maxHeap.last();

    if (diff > limit) {
      windowStart++;
      maxHeap.pop();
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  }

  return maxLength || nums.length;
}

console.log(test([10, 1, 2, 4, 7], 5)); // 3
console.log(test([4, 8, 5, 1, 7, 9], 3)); // 2
console.log(test([3, 3, 3, 3, 3], 0)); // 5
