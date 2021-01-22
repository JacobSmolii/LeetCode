// 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

var smallerNumbersThanCurrent = function (nums) {
  let tmp = [...nums].sort((a, b) => a - b);
  let map = new Map();
  let arr = [];

  for (let i = 0; i < tmp.length; i++) {
    if (!map.has(tmp[i])) map.set(tmp[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    arr.push(map.get(nums[i]));
  }
  return arr;
};

// const nums = [8, 1, 2, 2, 3];
// const nums = [7, 7, 7, 7];
// const nums = [6, 5, 4, 8];
console.log(smallerNumbersThanCurrent(nums));
