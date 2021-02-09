// 530. Minimum Absolute Difference in BST
// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

// Example:

// Input:

//    1
//     \
//      3
//     /
//    2

// Output:
// 1

// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// var getMinimumDifference = function (root) {
//     function recur(n) {
//       if (!n) return;
//       arr.push(n.val);
//       return recur(n.left) || recur(n.right);
//     }

//     let arr = [];
//     let min = Infinity;
//     recur(root);
//     arr.sort((a, b) => a - b);

//     for (let i = 1; i < arr.length; i++) {
//       min = Math.min(min, arr[i] - arr[i - 1]);
//     }

//     console.log(min);

//     return min;

// };

var getMinimumDifference = function (root) {
  let prev = Infinity;
  let min = Infinity;

  function recur(n) {
    if (!n) return;

    recur(n.left);

    min = Math.min(min, Math.abs(n.val - prev));
    prev = n.val;

    recur(n.right);
  }
  recur(root);

  return min;
};

let p = new TreeNode(2);
p.left = new TreeNode(1);
p.right = new TreeNode(3);
// p.left.left = new TreeNode(1);
// p.left.right = new TreeNode(3);

console.log(getMinimumDifference(p));
