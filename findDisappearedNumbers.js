// 448. Find All Numbers Disappeared in an Array
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

var findDisappearedNumbers = function (nums) {
  let arr = [];

  // take the value and and the index(value - 1) we negate the number
  // then we go through again and if we find the positive numb we push to the arr its index
  for (let i = 0; i < nums.length; i++) {
    let tmp = Math.abs(nums[i]);
    let ind = tmp - 1;
    nums[ind] = Math.abs(nums[ind]) * -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) arr.push(i + 1);
  }
  return arr;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// let nums = [1, 1];

console.log(findDisappearedNumbers(nums));
