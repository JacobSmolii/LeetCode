// 240. Search a 2D Matrix II
// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

// Example 2:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

let BSsearch = function (row, low, high, target) {
  if (row[high] == target) return true;
  if (row[high] < target) return false;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (row[mid] == target) return true;
    else if (row[mid] < target) low = mid + 1;
    else high = mid;
  }
};

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let len = matrix[i].length - 1;
    if (BSsearch(matrix[i], 0, len, target)) return true;
  }
  return false;
};

let matrix = [[5]];
let target = 5;

// let matrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];
// let target = 5;
// let target = 20;

// let matrix = [
//   [3, 5, 9, 9, 9, 11],
//   [5, 8, 13, 13, 16, 17],
//   [10, 10, 14, 14, 16, 19],
//   [15, 18, 20, 24, 26, 26],
//   [20, 24, 29, 32, 37, 41],
// ];
// let target = 32;

console.log(searchMatrix(matrix, target));
