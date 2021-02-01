// 1446. Consecutive Characters
// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.
// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:

// Input: s = "triplepillooooow"
// Output: 5
// Example 4:

// Input: s = "hooraaaaaaaaaaay"
// Output: 11
// Example 5:

// Input: s = "tourist"
// Output: 1

var maxPower = function (s) {
  let max = 1;
  let current = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] != s[i - 1]) {
      current = 1;
    } else current++;
    max = Math.max(max, current);
  }
  return max;
};

let s = 'leetcode';
console.log(maxPower(s));