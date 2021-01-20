// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

let findStart = function (arr, low, high, target) {
  let mid = 0;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) {
      if (arr[mid - 1] == undefined || arr[mid - 1] != target) return mid;
      high = mid - 1;
    } else if (arr[mid] < target) low = mid + 1;
    else if (arr[mid] > target) high = mid - 1;
  }
};

let findEnd = function (arr, low, high, target) {
  let mid = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      if (arr[mid + 1] == undefined || arr[mid + 1] != target) return mid;
      low = mid + 1;
    } else if (arr[mid] < target) low = mid + 1;
    else if (arr[mid] > target) high = mid - 1;
  }
};

// implementing the binary search. To do that you need always keep in mind about
// mid position, and most important if the number greater, less or equal to your
var searchRange = function (nums, target) {
  let start = findStart(nums, 0, nums.length - 1, target);
  let end = findEnd(nums, 0, nums.length - 1, target);
  if (start == undefined || end == undefined) return [-1, -1];
  else return [start, end];
};

// let nums = [5, 7, 7, 8, 8, 10];
// let target = 8;

// let nums = [5, 7, 7, 8, 8, 10];
// let target = 6;

let nums = [2, 2];
let target = 2;

console.log(searchRange(nums, target));
