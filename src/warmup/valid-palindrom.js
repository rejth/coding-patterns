/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(str) {
  const forward = str.split('').filter((el) => /[a-zA-Z0-9]/.test(el));
  const backward = forward.reverse();
  return forward.join('') === backward.join('');
}

// Time complexity - O(n)
// Space Complexity - O(n)
export function test2(str) {
  let forward = '';
  let backward = '';
  const regExp = /^[a-z0-9]+$/i;

  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(regExp)) continue;
    forward += str[i].toLowerCase();
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (!str[i].match(regExp)) continue;
    backward += str[i].toLowerCase();
  }

  return forward === backward;
}

// The best solution
// Time complexity - O(n)
// Space Complexity - O(1)
export function test3(str) {
  let i = 0;
  let j = str.length - 1;
  const regExp = /^[a-z0-9]+$/i;

  while (i < j) {
    while (i < j && !str[i].match(regExp)) {
      i++;
    }
    while (i < j && !str[j].match(regExp)) {
      j--;
    }

    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

// Test cases
console.log(test3('A man, a plan, a canal, Panama!')); // true
console.log(test3('Was it a car or a cat I saw?')); // true
