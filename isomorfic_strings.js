// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while
// preserving the order of characters. No two characters may map to the same character
// but a character may map to itself.

var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;

  // map has 2 values, so if we put both we gonna have [key, value] as a property of map
  let m1 = new Map();
  let m2 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (m1.has(s[i]) && m1.get(s[i]) != t[i]) {
      return false;
    } else {
      m1.set(s[i], t[i]);
    }
    if (m2.has(t[i]) && m2.get(t[i]) != s[i]) {
      return false;
    } else {
      m2.set(t[i], s[i]);
    }
  }
  return true;
};

let s = 'ab';
let t = 'aa';

console.log(isIsomorphic(s, t));
