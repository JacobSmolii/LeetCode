// 442. Find All Duplicates in an Array
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

var findDuplicates = function (nums) {
  let rest = [];

  for (let i = 0; i < nums.length; i++) {
    let ind = Math.abs(nums[i]);
    if (nums[ind - 1] < 0) rest.push(Math.abs(nums[i]));
    else nums[ind - 1] *= -1;
  }

  return rest;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// let nums = [1, 1];

console.log(findDuplicates(nums));
