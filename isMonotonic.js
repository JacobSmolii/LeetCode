// 896. Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

// Example 1:

// Input: [1,2,2,3]
// Output: true
// Example 2:

// Input: [6,5,4,4]
// Output: true
// Example 3:

// Input: [1,3,2]
// Output: false

var isMonotonic = function (A) {
  let increasing = 0;
  let decreasing = 0;

  for (let i = 1; i < A.length; i++) {
    if (A[i] == A[i - 1]) continue;
    if (A[i] > A[i - 1]) increasing = 1;
    if (A[i] < A[i - 1]) decreasing = 1;
  }
  if (increasing && decreasing) return false;
  else return true;
};

let nums = [1, 1, 0];

console.log(isMonotonic(nums));
