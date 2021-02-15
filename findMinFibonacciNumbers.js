// 1414. Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
// Given an integer k, return the minimum number of Fibonacci numbers whose sum is equal to k. The same Fibonacci number can be used multiple times.

// The Fibonacci numbers are defined as:

// F1 = 1
// F2 = 1
// Fn = Fn-1 + Fn-2 for n > 2.
// It is guaranteed that for the given constraints we can always find such Fibonacci numbers that sum up to k.

// Example 1:

// Input: k = 7
// Output: 2
// Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ...
// For k = 7 we can use 2 + 5 = 7.
// Example 2:

// Input: k = 10
// Output: 2
// Explanation: For k = 10 we can use 2 + 8 = 10.
// Example 3:

// Input: k = 19
// Output: 3
// Explanation: For k = 19 we can use 1 + 5 + 13 = 19.

// Constraints:

// 1 <= k <= 10^9

var findMinFibonacciNumbers = function (k) {
  function fibonacci(n) {
    let first = 0;
    let second = 1;

    // for (let i = 2; i < n; i++) {
    //   first = first + second;
    //   second = second + first;
    //   console.log(first, second);
    // }

    while (true) {
      if (first > n) return second;
      if (second > n) return first;
      first = first + second;
      if (first > n) return second;
      if (second > n) return first;
      second = second + first;
      if (first > n) return second;
      if (second > n) return first;
    }
  }

  let rest = 0;

  while (k > 0) {
    k -= fibonacci(k);
    rest++;
  }

  return rest;
};

let k = 1;
console.log(findMinFibonacciNumbers(k));
