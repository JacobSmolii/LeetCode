// 695. Max Area of Island
// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

var maxAreaOfIsland = function (grid) {
  function recur(i, j, row, col) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] == 0) return;
    if (grid[i][j] == 1) current++;

    grid[i][j] = 0;
    recur(i, j + 1, row, col);
    recur(i, j - 1, row, col);
    recur(i + 1, j, row, col);
    recur(i - 1, j, row, col);
  }

  let rest = 0;
  let current = 0;
  for (let i = 0; i < grid.length; i++) {
    let row = grid.length;
    let col = grid[i].length;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        current = 0;
        recur(i, j, row, col);
        rest = Math.max(rest, current);
      }
    }
  }
  return rest;
};

let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

// let grid = [
//   [0, 1],
//   [1, 1],
// ];

console.log(maxAreaOfIsland(grid));
