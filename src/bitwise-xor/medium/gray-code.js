/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const code = [0];

  for (let i = 0; i < n; i++) {
    const addition = 1 << i; // Calculate the prefix value for the mirrored numbers
    console.log(addition);

    for (let j = code.length - 1; j >= 0; j--) {
      // Prefix the mirrored sequence with 1s and append to the original sequence
      code.push(code[j] + addition);
    }
  }

  return code;
};

console.log(grayCode(6));
