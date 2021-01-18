// 905. Sort Array By Parity
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.
// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

var sortArrayByParity = function (A) {
  let j = 0;

  for (let i = 0; i < A.length; i++) {
    // two counters. j for odd numbers and i for even numbers.
    // when we found even number we do swap the counters
    if (A[j] % 2 == 0) {
      j++;
      i++;
    }

    if (A[i] % 2 == 0) {
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
      j++;
    }
  }
  return A;
};

// let nums = [3, 1, 2, 4];
// let nums = [4, 2, 1, 6, 3, 5];
let nums = [4, 2, 1, 6, 3, 5];

console.log(sortArrayByParity(nums));
