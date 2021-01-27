// 1592. Rearrange Spaces Between Words
// You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

// Return the string after rearranging the spaces.

// Example 1:

// Input: text = "  this   is  a sentence "
// Output: "this   is   a   sentence"
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.
// Example 2:

// Input: text = " practice   makes   perfect"
// Output: "practice   makes   perfect "
// Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.
// Example 3:

// Input: text = "hello   world"
// Output: "hello   world"

var reorderSpaces = function (text) {
  let space = 0;
  let totalSpace = 0;
  let extraSpace = 0;
  let word = 0;
  let str = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] == ' ') totalSpace++;
    if (text[i] >= 'a' && text[i] <= 'z' && (text[i - 1] == ' ' || i == 0))
      word++;
  }
  if (totalSpace % (word - 1) == 1) extraSpace = 1;
  space = Math.floor(totalSpace / (word - 1));

  text = text.replace(/\s+/g, ' ');
  text = text.replace(/^\s+|\s+$/g, '');

  for (let i = 0; i < text.length; i++) {
    if (text[i] >= 'a' && text[i] <= 'z') str += text[i];
    if (text[i - 1] >= 'a' && text[i - 1] <= 'z' && text[i] == ' ')
      str = str + ' '.repeat(space);
  }

  if (word == 1 && totalSpace > 0) {
    for (let count = 0; count < totalSpace; count++) str += ' ';
  } else if (extraSpace || word == 1) str += ' ';
  else str += ' ';

  return str;
};

let text = '  this   is  a sentence ';
// let text = '  hello';
// let text = 'h';
console.log(reorderSpaces(text));
