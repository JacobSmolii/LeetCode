// 1338. Reduce Array Size to The Half
// Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed
// Example 1:

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
// Example 2:

// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.
// Example 3:

// Input: arr = [1,9]
// Output: 1
// Example 4:

// Input: arr = [1000,1000,3,7]
// Output: 1
// Example 5:

// Input: arr = [1,2,3,4,5,6,7,8,9,10]
// Output: 5

// Constraints:

// 1 <= arr.length <= 10^5
// arr.length is even.
// 1 <= arr[i] <= 10^5

var minSetSize = function (arr) {
  // sort
  // count the frequency
  // sort count arr
  // substract from the len current count of frequency
  arr = arr.sort((a, b) => a - b);
  let len = arr.length;
  let count = 1;
  let tmp = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] == arr[i - 1]) count++;
    else {
      tmp.push(count);
      count = 1;
    }
  }
  tmp.push(count);

  tmp = tmp.sort((a, b) => b - a);
  let rest = 0;
  count = 0;
  for (let i = 0; i < tmp.length; i++) {
    if (len - count - tmp[i] > len / 2) {
      count += tmp[i];
      rest++;
    } else {
      rest++;
      break;
    }
  }

  return rest;
};

// let arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = [1000, 1000, 3, 7];
let arr = [9, 77, 63, 22, 92, 9, 14, 54, 8, 38, 18, 19, 38, 68, 58, 19];
console.log(minSetSize(arr));
