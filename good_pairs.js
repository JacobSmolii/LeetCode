// 1512. Number of Good Pairs

// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// function similar to the factorial but you need to do '+' instead of '*'
function totalNum(num) {
  let rest = 0;
  while (--num > 0) {
    rest += num;
  }
  return rest;
}

var numIdenticalPairs = function (nums) {
  let rest = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], 0);
    map.set(nums[i], map.get(nums[i]) + 1);
  }

  for (let [key, value] of map.entries()) {
    rest += totalNum(value);
  }

  return rest;
};

// const nums = [1, 2, 3, 1, 1, 3];
const nums = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums));
