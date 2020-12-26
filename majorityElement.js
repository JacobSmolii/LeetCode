// 169. Majority Element

// Given an array of size n, find the majority element. The majority element
// is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist
//  in the array.

var majorityElement = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]]++;
    else map[nums[i]] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] > Math.floor(nums.length / 2)) return nums[i];
  }
};

let nums = [3, 2, 3];
console.log(majorityElement(nums));
