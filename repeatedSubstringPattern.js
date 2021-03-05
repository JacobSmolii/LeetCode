// 459. Repeated Substring Pattern
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:
// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Example 2:
// Input: s = "aba"
// Output: false

// Example 3:
// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// Constraints:
// 1 <= s.length <= 104
// s consists of lowercase English letters.

var repeatedSubstringPattern = function (s) {
  if (s.length < 2) return false;
  let len = s.length;
  let str = '';

  for (let i = 0; i < len / 2; i++) {
    str += s[i];
    let tmp = s.split(str).join('');

    // if (!s.split(str).join('')) return true;
    if (!tmp) return true;
  }
  return false;
};

// let s = 'abab';
// let s = 'aba';
// let s = 'abcabcabcabc';
let s = 'abaababaab';
// let s = 'ababab';

console.log(repeatedSubstringPattern(s));
