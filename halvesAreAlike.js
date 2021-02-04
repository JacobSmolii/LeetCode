// 1704. Determine if String Halves Are Alike
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.
// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
// Example 3:

// Input: s = "MerryChristmas"
// Output: false
// Example 4:

// Input: s = "AbCdEfGh"
// Output: true

// Constraints:

// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

var halvesAreAlike = function (s) {
  let vowels = 'aeiouAEIOU';
  let half = Math.floor(s.length / 2);
  let count1 = 0;
  let count2 = 0;

  for (let i = 0, j = half; i < half && j < s.length; i++, j++) {
    if (vowels.includes(s[i])) count1++;
    if (vowels.includes(s[j])) count2++;
  }
  if (count1 == count2) return true;
  return false;
};
let s = 'book';
console.log(halvesAreAlike(s));
