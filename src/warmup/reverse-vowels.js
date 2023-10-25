/**
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

// Time complexity - O(n)
// Space Complexity - O(n)
export function test(s) {
  let res = '';
  const vowels = [];
  const regExp = /^[aeiou]+$/i;

  for (const char of s) {
    if (char.match(regExp)) vowels.push(char);
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(regExp)) res += vowels.pop();
    else res += s[i];
  }

  return res;
}

// The best solution
// Time complexity - O(n)
// Space Complexity - O(n)
export function test2(s) {
  let i = 0;
  let j = s.length - 1;
  const regExp = /^[aeiou]+$/i;

  let result = s.split('');

  while (i < j) {
    while (i < j && !s[i].match(regExp)) {
      i++;
    }
    while (i < j && !s[j].match(regExp)) {
      j--;
    }
    // swap the values of first and last if both are vowels
    [result[i], result[j]] = [result[j], result[i]];
    i++;
    j--;
  }

  return result.join('');
}

// Test cases
console.log(test2('hello')); // "holle"
console.log(test2('AEIOU')); // "UOIEA"
console.log(test2('DesignGUrus')); // "DusUgnGires"
