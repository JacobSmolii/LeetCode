// 637. Average of Levels in Binary Tree
// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var averageOfLevels = function (root) {
  function recur(n = root, depth = 0) {
    if (!n) return;
    if (!total[depth]) total[depth] = 0;
    total[depth] += n.val;

    if (!count[depth]) count[depth] = 0;
    count[depth]++;

    depth++;
    return recur(n.left, depth) || recur(n.right, depth);
  }

  let total = [];
  let count = [];
  let rest = [];
  recur();

  for (let i = 0; i < total.length; i++) {
    rest.push(total[i] / count[i]);
  }

  return rest;
};

let p = new TreeNode(3);
p.left = new TreeNode(9);
p.right = new TreeNode(20);
p.right.left = new TreeNode(15);
p.right.right = new TreeNode(7);

console.log(averageOfLevels(p));
