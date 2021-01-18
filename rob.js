// 198. House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

var rob = function (nums) {
  // create an array where you will be storing the sum prev amount of money
  if (nums[0] == undefined) return 0;
  let rest = 0;
  let arr = [];
  arr[0] = 0;
  arr.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    let tmp = arr[i - 1] + nums[i]; // sum from arr[i - 1] of sums and next elem of the input array

    arr.push(Math.max(tmp, arr[i]));
  }
  return arr[arr.length - 1]; // we always store the bigest sum at the end of the array;
};

// let nums = [2, 1, 1, 2];
// let nums = [2, 7, 9, 3, 1];
// let nums = [6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3];
let nums = [0, 3, 2, 0];

console.log(rob(nums));
