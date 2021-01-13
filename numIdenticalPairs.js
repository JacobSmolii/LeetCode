// 1512. Number of Good Pairs
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

function totSum(num) {
  let rest = 0;
  for (let i = 0; i < num; i++) rest += i;
  return rest;
}

var numIdenticalPairs = function (nums) {
  let rest = 0;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], 0);
    map.set(nums[i], map.get(nums[i]) + 1);
  }

  for ([key, value] of map.entries()) {
    // rest += totSum(value);
    rest += ((value - 1) * value) / 2;
  }
  return rest;
};

let nums = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums));
