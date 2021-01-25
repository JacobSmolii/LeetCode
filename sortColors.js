// 75. Sort Colors
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
// Example 3:

// Input: nums = [0]
// Output: [0]
// Example 4:

// Input: nums = [1]
// Output: [1]

// Follow up:
// Could you solve this problem without using the library's sort function?
// Could you come up with a one-pass algorithm using only O(1) constant space?

// var sortColors = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 0) arr.unshift(0);
//     else if (nums[i] == 2) arr.push(2);
//     else arr.splice(arr.length / 2, 0, 1);
//   }
//   return arr;
// };

var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  let i = 0;
  while (i <= right) {
    if (nums[i] == 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
      i++;
    } else if (nums[i] == 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
    } else i++;
  }
  return nums;
};

let nums = [2, 0, 2, 1, 1, 0];
let nums = [2, 0, 2, 1, 1, 0, 2, 0, 2, 1, 1, 0];
// let nums = [1, 1, 2];
// let nums = [2];
console.log(sortColors(nums));
