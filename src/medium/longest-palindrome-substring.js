function test(s) {
  let longest = '';

  const expandFromCenter = (char, left, right) => {
    let str = '';

    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      str = left === right ? s[left] : `${s[left]}${str}${s[right]}`;
      left--;
      right++;
    }

    return str || '';
  };

  for (let i = 0; i < s.length; i++) {
    const substringOdd = expandFromCenter(s, i, i);
    longest = longest.length >= substringOdd.length ? longest : substringOdd;

    const substringEven = expandFromCenter(s, i, i + 1);
    longest = longest.length >= substringEven.length ? longest : substringEven;
  }

  return longest;
}

console.log(test('babad')); // "bab"
console.log(test('cbbd')); // "bb"
console.log(test('racecar')); // "racecar"
console.log(test('noon')); // "noon"
console.log(test('apple')); // "pp"
console.log(test('abccccdd')); // "cccc"
