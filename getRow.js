// 119. Pascal's Triangle II

// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?
// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

let factorial = function (n) {
  if (n > 1) {
    return n * factorial(n - 1);
  }
  return 1;
};

//Here we need to use formula 'binomical theoreme' for pascal's triangle

// n	      n!
//   = ---------------
// k	(n - k)! * k!

// where n - is a row number; and k - is the index in a row (starting from 0)

var getRow = function (rowIndex) {
  let arr = [];

  for (let i = 0; i <= rowIndex; i++) {
    if (i == 0 || i == rowIndex) arr.push(1);
    else {
      let row = factorial(rowIndex);
      let ind = factorial(rowIndex - i);
      let k = factorial(i);

      k = ind * k;

      arr.push(row / k);
    }
  }
  return arr;
};

let rowIndex = 7;

console.log(getRow(rowIndex));
