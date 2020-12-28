// 454. 4Sum II
// Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

// To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

// Example:

// Input:
// A = [ 1, 2]
// B = [-2,-1]
// C = [-1, 2]
// D = [ 0, 2]

// Output:
// 2

// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

var fourSumCount = function (A, B, C, D) {
  let m1 = new Map();
  let rest = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      let tmp = A[i] + B[j];
      if (!m1.has(tmp)) {
        m1.set(tmp, 1);
      } else m1.set(tmp, m1.get(tmp) + 1);
    }
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      let tmp = (C[i] + D[j]) * -1; // we gonna check
      if (m1.has(tmp)) {
        rest += m1.get(tmp) || 0;
      }
    }
  }

  return rest;
};

let A = [-1, -1];
let B = [-1, 1];
let C = [-1, 1];
let D = [1, -1];

console.log(fourSumCount(A, B, C, D));
