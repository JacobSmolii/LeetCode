// 55. Jump Game
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:

// 1 <= nums.length <= 3 * 104
// 0 <= nums[i] <= 105

var canJump = function (nums) {
  let len = nums.length;
  let index = len - 1;

  if (nums[0] == 0 && len > 1) return false;

  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] + i >= index) index = i;

    if (index == 0) return true;
  }
  return false;
};

let nums = [3, 2, 1, 0, 4];
// let nums = [0, 2, 3];
// let nums = [1, 0, 1, 0];

// let nums = [3, 0, 8, 2, 0, 0, 1];
// let nums = [2, 3, 1, 1, 4];
// let nums = [2, 5, 0, 0];
// let nums = [1, 3, 2];
// let nums = [2, 0, 0];
// let nums = [2, 0];
// let nums = [1];
// let nums = [0];

console.log(canJump(nums));
