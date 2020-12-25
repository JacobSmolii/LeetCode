// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting
// and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// Follow up: Could you write an algorithm with O(log n) runtime complexity?

var searchRange = function (nums, target) {
  // implementing the binary search. To do that you need always keep in mind about
  // mid position, and most important if the number greater, less or equal to your target;

  function findStart_position(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] == target) {
        if (mid == 0 || nums[mid - 1] != target) {
          return mid;
        }
        right = mid - 1;
      } else if (nums[mid] > target) {
        right--; // or left = mid - 1;
      } else {
        // if nums[mid] < target
        left++; // or left = mid + 1
      }
    }
  }

  function findEnd_position(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] == target) {
        if (mid == nums.length - 1 || nums[mid + 1] != target) {
          return mid;
        }
        left = mid + 1;
      } else if (nums[mid] < target) {
        left++; // or left = mid + 1
      } else {
        // if (nums[mid] > target)
        right--; // or left = mid - 1;
      }
    }
  }

  let left = findStart_position(nums, target);
  let right = findEnd_position(nums, target);
  if (left == undefined || right == undefined) return [-1, -1];
  return [left, right];
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
// let nums = [10, 11, 11, 11, 14, 15];
// let target = 11;
// let nums = [5, 7, 7, 8, 8, 10];
// let target = 6;

// let nums = [6, 6];
// let target = 6;

console.log(searchRange(nums, target));
