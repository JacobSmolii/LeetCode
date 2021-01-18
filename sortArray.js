// 912. Sort an Array
// Given an array of integers nums, sort the array in ascending order.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

let partition = function (arr, low, high) {
  let pi = arr[high];
  let i = low - 1; // index of the smaller elem;

  for (let j = low; j < high; j++) {
    if (arr[j] < pi) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

let quickSort = function (arr, low, high) {
  if (low < high) {
    pi = partition(arr, low, high);

    quickSort(arr, low, high - 1);
    quickSort(arr, low + 1, high);
  }
  return arr;
};

var sortArray = function (nums) {
  let len = nums.length;
  nums = quickSort(nums, 0, len - 1);
  return nums;
};

// let nums = [5, 2, 3, 1];
let nums = [5, 1, 1, 2, 0, 0];

console.log(sortArray(nums));
