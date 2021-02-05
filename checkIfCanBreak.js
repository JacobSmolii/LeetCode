// 1433. Check If a String Can Break Another String
// Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.

// A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.
// Example 1:

// Input: s1 = "abc", s2 = "xya"
// Output: true
// Explanation: "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".
// Example 2:

// Input: s1 = "abe", s2 = "acd"
// Output: false
// Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.
// Example 3:

// Input: s1 = "leetcodee", s2 = "interview"
// Output: true

// Constraints:

// s1.length == n
// s2.length == n
// 1 <= n <= 10^5
// All strings consist of lowercase English letters.

var checkIfCanBreak = function (s1, s2) {
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  let len = s1.length;
  let c1 = 0;
  let c2 = 0;

  for (let i = 0; i < len; i++) {
    if (s1[i] >= s2[i]) c1++;
    else break;
  }

  for (let i = 0; i < len; i++) {
    if (s2[i] >= s1[i]) c2++;
    else break;
  }
  console.log(c1, c2, len);

  return c1 < len && c2 < len ? false : true;

  //   for (let i = 0; i < len; i++) {
  //     if (s1[i] >= s2[i]) continue;
  //     else c1 = true;
  //   }

  //   for (let i = 0; i < len; i++) {
  //     if (s2[i] >= s1[i]) continue;
  //     else c2 = true;
  //   }

  //   return c1 && c2 ? false : true;
};

let s1 = 'abc'; // true
let s2 = 'xya';

// let s1 = 'szy'; // true
// let s2 = 'cid';

// let s1 = 'leetcodee'; // true
// let s2 = 'interview';

// let s1 = 'abe'; // false
// let s2 = 'acd';

// let s1 = 'ixzhsdka'; // false
// let s2 = 'aauramvg';

console.log(checkIfCanBreak(s1, s2));
