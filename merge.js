// 88. Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;
  m--;
  n--;

  while (n >= 0 && m >= 0) {
    if (nums2[n] >= nums1[m]) {
      nums1[last--] = nums2[n--];
    } else {
      nums1[last--] = nums1[m--];
    }
  }
  while (n >= 0) nums1[last--] = nums2[n--];
  return nums1;
};

// let nums1 = [4, 5, 6, 0, 0, 0];
// let m = 3;
// let nums2 = [1, 2, 3];
// let n = 3;

let nums1 = [1];
let m = 1;
let nums2 = [];
let n = 0;

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// let nums1 = [4, 0, 0, 0, 0, 0];
// let m = 1;
// let nums2 = [1, 2, 3, 5, 6];
// let n = 5;

console.log(merge(nums1, m, nums2, n));
