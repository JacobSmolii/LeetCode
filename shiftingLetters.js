// 848. Shifting Letters

// We have a string S of lowercase letters, and an integer array shifts.

// Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

// Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

// Return the final string after all such shifts to S are applied.

// Example 1:

// Input: S = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation:
// We start with "abc".
// After shifting the first 1 letters of S by 3, we have "dbc".
// After shifting the first 2 letters of S by 5, we have "igc".
// After shifting the first 3 letters of S by 9, we have "rpl", the answer.
// Note:

// 1 <= S.length = shifts.length <= 20000
// 0 <= shifts[i] <= 10 ^ 9

var shiftingLetters = function (S, shifts) {
  let len = S.length - 1;
  S = S.split('');

  let totalSum = 0;
  for (let i = len; i >= 0; i--) {
    totalSum += shifts[i];
    if (totalSum > 26) totalSum %= 26;
    let letter = S[i].charCodeAt();

    if (letter + totalSum > 122) {
      letter = letter + totalSum - 26;
    } else {
      letter = letter + totalSum;
    }

    letter = String.fromCharCode(letter);
    S[i] = letter;
  }
  return S.join('');
};

// let S = 'xrdofd'; // "surjgj"
// let shifts = [70, 41, 71, 72, 73, 84];

// let S = 'ruu'; // rul
// let shifts = [26, 9, 17];

let S = 'bad'; // jyh
let shifts = [10, 20, 30];

console.log(shiftingLetters(S, shifts));
