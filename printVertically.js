// 1324. Print Words Vertically
// Given a string s. Return all the words vertically in the same order in which they appear in s.
// Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
// Each word would be put on only one column and that in one column there will be only one word.

// Example 1:

// Input: s = "HOW ARE YOU"
// Output: ["HAY","ORO","WEU"]
// Explanation: Each word is printed vertically.
//  "HAY"
//  "ORO"
//  "WEU"
// Example 2:

// Input: s = "TO BE OR NOT TO BE"
// Output: ["TBONTB","OEROOE","   T"]
// Explanation: Trailing spaces is not allowed.
// "TBONTB"
// "OEROOE"
// "   T"
// Example 3:

// Input: s = "CONTEST IS COMING"
// Output: ["CIC","OSO","N M","T I","E N","S G","T"]

// Constraints:

// 1 <= s.length <= 200
// s contains only upper case English letters.
// It's guaranteed that there is only one space between 2 words.

var printVertically = function (s) {
  s = s.split(' ');

  let len = 0;
  let rest = [];

  for (let word of s) {
    len = Math.max(len, word.length);
  }

  for (let i = 0; i < len; i++) {
    let word = '';
    s.map((item) => {
      if (i > item.length - 1) word += ' ';
      else word += item[i];
    });
    rest.push(word);
  }

  for (let i = 0; i < rest.length; i++) {
    rest[i] = rest[i].trimEnd();
  }

  //   for (let word of rest) {
  //     word.trimEnd();
  //     let i = 0;
  //   }

  //   rest.map((word) => (word = word.trimEnd()));

  return rest;
};

// let s = 'HOW ARE Y';
let s = 'TO BE OR NOT TO BE';
console.log(printVertically(s));
