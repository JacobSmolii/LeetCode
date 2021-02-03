// 443. String Compression
// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// Follow up:
// Could you solve it using only O(1) extra space?
// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
// Example 4:

// Input: chars = ["a","a","a","b","b","a","a"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","3","b","2","a","2"].
// Explanation: The groups are "aaa", "bb", and "aa". This compresses to "a3b2a2". Note that each group is independent even if two groups have the same character.

// Constraints:

// 1 <= chars.length <= 2000
// chars[i] is a lower-case English letter, upper-case English letter, digit, or symbol.

var compress1 = function (chars) {
  //   let c = chars[0];
  //   if (chars.length == 1) return 1;
  //   let cLen = 1;
  //   let s = '';
  //   for (let i = 1; i < chars.length; i++) {
  //     if (chars[i] != chars[i - 1] || i == chars.length - 1) {
  //       s += c;
  //       if (i == chars.length - 1) {
  //         if (chars[i] == chars[i - 1]) cLen++;
  //         else {
  //           c = chars[i];
  //           cLen = 1;
  //         }
  //       }
  //       if (cLen > 1) s += cLen;
  //       c = chars[i];
  //       cLen = 1;
  //     } else cLen++;
  //   }
  //   chars = [];
  //   for (let i = 0; i < s.length; i++) chars.push(s[i]);
  //   return s.length;
};

var compress = function (chars) {
  let cLen = 1;
  let c = chars[0];

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] == chars[i - 1]) {
      chars.splice(i, 1); // here i delete the same char, but I always keep the first one;
      cLen++;
      i--;
    } else {
      if (cLen > 1) {
        let j = i;
        while (cLen >= 1) {
          // insertion. I use j just because when the number '> 9' it should insert at the right position
          chars.splice(j, 0, (cLen % 10).toString());
          cLen = Math.floor(cLen / 10);
          i++;
        }
      }
      c = chars[i];
      cLen = 1;
    }
  }
  if (cLen > 1) {
    cLen = cLen.toString();
    for (let i = 0; i < cLen.length; i++) {
      let tmp = Number(cLen[i]);
      chars.push(tmp.toString());
    }
  }
  console.log(chars);
  return chars.length;
};

// let chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
// let chars = ['c'];
// let chars = ['a', 'a', 'a', 'b', 'b', 'a', 'a'];
// let chars = ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'c'];
let chars = [
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
];

console.log(compress(chars));
