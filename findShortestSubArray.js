// 697. Degree of an Array
// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation:
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

var findShortestSubArray = function (nums) {
  let map = new Map(); // key: elem ; val: ++
  let positionMap = new Map(); // keep track of the first found position of the element
  let mostFreq = 0;
  let minLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!positionMap.has(nums[i])) {
      positionMap.set(nums[i], i);
    }

    if (!map.has(nums[i])) map.set(nums[i], 0);
    map.set(nums[i], map.get(nums[i]) + 1);

    if (map.get(nums[i]) > mostFreq) {
      mostFreq = map.get(nums[i]);
      minLen = i - positionMap.get(nums[i]) + 1;
    } else if (map.get(nums[i]) == mostFreq) {
      // this else if we need to find out the min len of subarray of the posible options
      let tmp = i - positionMap.get(nums[i]) + 1;
      minLen = Math.min(tmp, minLen);
    }
  }
  return minLen;
};

// let nums = [1, 2, 2, 3, 4, 1];
let nums = [2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2];
// let nums = [1, 2, 2, 3, 1];

console.log(findShortestSubArray(nums));
