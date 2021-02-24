// 1002. Find Common Characters
// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

var commonChars = function (arr) {
  let rest = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
  }

  for (let i = 0; i < arr[0].length; i++) {
    let flag = 0;
    let char = arr[0][i];

    for (let j = 0; j < arr.length; j++) {
      if (arr[j].includes(char)) {
        let ind = arr[j].indexOf(char);
        arr[j][ind] = '';
      } else {
        flag = 1;
        break;
      }
    }
    if (flag) continue;
    else rest.push(char);
  }
  return rest;
};

let arr = ['bella', 'label', 'roller'];
// let arr = ['cool', 'lock', 'cook'];

console.log(commonChars(arr));
