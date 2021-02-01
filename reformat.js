// 1417. Reformat The String
// Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to reformat the string.
// Example 1:

// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
// Example 2:

// Input: s = "leetcode"
// Output: ""
// Explanation: "leetcode" has only characters so we cannot separate them by digits.
// Example 3:

// Input: s = "1229857369"
// Output: ""
// Explanation: "1229857369" has only digits so we cannot separate them by characters.
// Example 4:

// Input: s = "covid2019"
// Output: "c2o0v1i9d"
// Example 5:

// Input: s = "ab123"
// Output: "1a2b3"
// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and/or digits.

var reformat = function (s) {
  let letters = [];
  let nums = [];
  let rest = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') nums.push(s[i]);
    else letters.push(s[i]);
  }

  if (nums.length == 1 && letters.length == 0) return nums.join('');
  else if (letters.length == 1 && nums.length == 0) return letters.join('');

  if (nums.length == 0 || letters.length == 0) return '';

  let i = 0;

  for (; i < nums.length && i < letters.length; i++) {
    if (letters.length > nums.length) {
      rest.push(letters[i]);
      rest.push(nums[i]);
    } else {
      rest.push(nums[i]);
      rest.push(letters[i]);
    }
  }

  while (i < nums.length) rest.push(nums[i++]);
  while (i < letters.length) rest.push(letters[i++]);

  return rest.join('');
};

// let s = 'covid2019';
let s = 'a';
console.log(reformat(s));
