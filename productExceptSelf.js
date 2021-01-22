// 238. Product of Array Except Self
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

var productExceptSelf = function (nums) {
  let len = nums.length;
  let arr = [];
  arr.push(1);

  // we need to create the answer array and multiply all the previus numbers
  // so it will be [1, 1, 2, 6]
  for (let i = 1; i < len; i++) {
    arr.push(nums[i - 1] * arr[i - 1]);
  }

  let tmp = 1;
  // here we multiple the tmp with the last el of nums[] and then multiply with the previus nums[] from the last elem
  for (let i = len - 1; i > 0; i--) {
    tmp = tmp * nums[i];
    arr[i - 1] = tmp * arr[i - 1];
  }
  return arr;
};

let nums = [1, 2, 3, 4];
// let nums = [0, 0];
// let nums = [];
console.log(productExceptSelf(nums));
