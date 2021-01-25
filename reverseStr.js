// 541. Reverse String II
// Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
// Example:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Restrictions:
// The string consists of lower English letters only.
// Length of the given string and k will in the range [1, 10000]

var reverseStr = function (s, k) {
  function revStr(i, j) {
    j--;
    while (i < j) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }
  }

  // conert from str to arr of chars
  s = Array.from(s);
  let flag = 0;

  for (let i = 0; i < s.length; i++) {
    if (!flag && i + k <= s.length) {
      revStr(i, i + k);
      i = i + k - 1;
      flag = 1;
    } else if (!flag && i + k > s.length) {
      revStr(i, s.length);
      i = s.length;
    } else {
      i = i + k - 1;
      flag = 0;
    }
  }
  s = s.join('');
  return s;
};

// let s = 'abcdefg';
// let k = 2;
let s = 'abcdefg';
let k = 8;

console.log(reverseStr(s, k));
