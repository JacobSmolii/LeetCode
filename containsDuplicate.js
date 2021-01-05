// 217. Contains Duplicate

// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

// Has two solutions, 1) usign hash table 2) sort the array and then check every elements lineary
var containsDuplicate = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    else map.set(nums[i], i);
  }
  return false;
};

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
