/**
 * You have a string that represents encodings of substrings, where each encoding is of the form k[encoded_string],
 * where k is a positive integer, and encoded_string is a string that contains letters only.
 *
 * Your task is to decode this string by repeating the encoded_string k times and return it.
 * It is given that k is always a positive integer.
 *
 * Input: "3[a3[c]]"
 * Expected Output: "acccacccaccc"
 * Justification: The inner 3[c] is decoded as ccc, and then a is appended to the front, forming acc.
 * This is then repeated 3 times to form acccacccaccc.
 *
 * Input: "2[b3[d]]"
 * Expected Output: "bdddbddd"
 * Justification: The inner 3[d] is decoded as ddd, and then b is appended to the front, forming bddd.
 * This is then repeated 2 times to form bddd bddd.
 *
 * Input: "4[z]"
 * Expected Output: "zzzz"
 * Justification: The 4[z] is decoded as z repeated 4 times, forming zzzz.
 */

/**
 * Problem clarification:
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function test(encoded) {
  /*
    1th group - ([0-9]+), count to repeat
    2th group - (\[), open bracket
    3th group - ([a-zA-z0-9[\]]+)
    4th group - (]), close bracket
  */
  const regexp = /([0-9]+)(\[)([a-zA-z0-9[\]]+)(])/g;
  const replacer = (_match, $1, _$2, $3) => $3.replaceAll(regexp, replacer).repeat(+$1);
  return encoded.replaceAll(regexp, replacer);
}

console.log(test('3[a]2[bc]')); // "aaabcbc"
console.log(test('3[a3[c]]')); // "acccacccaccc"
console.log(test('2[b3[d]]')); // "bdddbddd"
console.log(test('4[z]')); // "zzzz"

// ---------------------------------------------------------------------------

function test2(encoded) {
  const stack = [];
  let decoded = '';
  let num = 0;

  for (const s of encoded) {
    if (!isNaN(s)) {
      if (s === '0') num = Number(num + s);
      else num = +s;
    } else if (s === '[') {
      stack.push(num);
      stack.push(decoded);
      num = 0;
      decoded = '';
    } else if (s === ']') {
      const prevDecoded = stack.pop();
      const count = stack.pop();
      decoded = prevDecoded + decoded.repeat(count);
    } else {
      decoded += s;
    }
  }

  return decoded;
}

console.log(test2('3[a]2[bc]')); // "aaabcbc"
console.log(test2('3[a3[c]]')); // "acccacccaccc"
console.log(test2('2[b3[d]]')); // "bdddbddd"
console.log(test2('10[z]')); // "zzzzzzzzzz"
