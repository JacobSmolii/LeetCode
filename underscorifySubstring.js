let underscorifySubstring = function (string, substring) {
  let words = string.split(' ');
  let flag = false;

  function leftSideCheck(str, sub) {
    for (let i = 0; i < str.length - sub.length; i++) {
      if (str.slice(i, i + sub.length) == sub) return i; // return the index from the left side where substr starts
    }
    return -1; // means that there is no match found with str and substr.
  }

  function rightSideCheck(str, sub) {
    let len = str.length;
    let subLen = sub.length;
    for (let i = 0; i <= len - subLen; i++) {
      if (str.slice(len - i - subLen, len - i) == sub)
        // slicing the peases from the right of the string
        return len - i; // return the most right position where underscore should be inserted
    }
  }

  // insert the underscore at the needed index of the string
  function insertUnderScore(str, ind, substring) {
    return str.substr(0, ind) + substring + str.substr(ind);
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].length < substring.length) continue;

    let left_index = leftSideCheck(words[i], substring);
    if (left_index >= 0) {
      words[i] = insertUnderScore(words[i], left_index, '_');
      flag = true;
    }

    let right_index = rightSideCheck(words[i], substring);
    if (right_index != undefined && right_index != left_index + 1) {
      words[i] = insertUnderScore(words[i], right_index, '_');
      flag = true;
    }
  }

  if (!flag) return str; // return main string intact, didn't do any changes

  return [...words].join(' ');
};

// let str = 'testthis is a testtest to see if testestest it works';
// let subStr = 'test';
// let str = 'ttttttttttttttbtttttctatawtatttttastvb';
// let subStr = 'ttt';
let str = 'testest';
let subStr = 'test';

console.log(underscorifySubstring(str, subStr));
