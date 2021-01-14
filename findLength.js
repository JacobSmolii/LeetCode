// 718. Maximum Length of Repeated Subarray
// Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

// Example 1:

// Input:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// Output: 3
// Explanation:
// The repeated subarray with maximum length is [3, 2, 1].

var findLength = function (A, B) {
  let rest = 0;
  let map = new Array(A.length);

  for (let i = 0; i < A.length; i++) {
    map[i] = new Array(B.length);
    for (let j = 0; j < B.length; j++) {
      if (A[i] == B[j]) {
        if (i == 0 || j == 0) map[i][j] = 1;
        else map[i][j] = map[i - 1][j - 1] + 1;
        rest = Math.max(rest, map[i][j]);
      }
    }
  }
  return rest;
};

let A = [5, 14, 53, 80, 48];

let B = [50, 47, 3, 80, 83];

console.log(findLength(A, B));
