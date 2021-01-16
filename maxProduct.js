// 152. Maximum Product Subarray
// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

var maxProduct = function (nums) {
  let rest = nums[0];
  let cur_max = nums[0];
  let cur_min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let tmp = cur_max;
    cur_max = Math.max(Math.max(cur_max * nums[i], cur_min * nums[i]), nums[i]);

    cur_min = Math.min(Math.min(tmp * nums[i], cur_min * nums[i]), nums[i]);

    if (cur_max > rest) rest = cur_max;
  }
  return rest;
};

// let nums = [2, 3, -2, 4];
let nums = [-4, -3, -2];

// let nums = [-2, 0, -1];
// let nums = [-3, -4, -2];
// let nums = [-2];

console.log(maxProduct(nums));
