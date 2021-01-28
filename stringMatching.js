// 1408. String Matching in an Array
// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
//  Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.

var stringMatching = function (words) {
  //   let rest = [];

  //   for (let i = 0; i < words.length; i++) {
  //     for (let j = 0; j < words.length; j++) {
  //       if (i == j) continue;
  //       if (words[j].includes(words[i])) {
  //         rest.push(words[i]);
  //         break;
  //       }
  //     }
  //   }
  //   return rest;

  return words.filter((w) => words.some((h) => h !== w && h.includes(w)));
};

// let words = ['mass', 'as', 'hero', 'superhero'];
let words = ['leetcoder', 'leetcode', 'od', 'hamlet', 'am'];

console.log(stringMatching(words));
