// Longest Substring without dublication

// Write a function that takes in a string and returns its longest substring without duplicate characters.
// You can assume that there will only be one longest substring without dublication.

var longestSubstring = function (str) {
  let i = 0;
  let j = 0;
  let rest = '';
  let set = new Set();

  while (i < str.length && j < str.length) {
    if (set.has(str[j])) {
      if (set.size > rest.length) {
        rest = [...set].join('');
      }
      set.clear();
      i++;
      j = i;
    } else {
      set.add(str[j]);
    }
    j++;
  }
  return rest;
};

let str = 'abcbde';
console.log(longestSubstring(str));
