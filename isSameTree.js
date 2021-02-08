// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if ((p && !q) || (!p && q) || p.val != q.val) return false;

  if (isSameTree(p.left, q.left) == false) return false;
  if (isSameTree(p.right, q.right) == false) return false;

  return true;
};

let p = new TreeNode(4);
p.left = new TreeNode(2);
// p.right = new TreeNode(7);
// p.left.left = new TreeNode(1);
// p.left.right = new TreeNode(3);

let q = new TreeNode(4);
q.left = new TreeNode(2);
// q.right = new TreeNode(7);
// q.left.left = new TreeNode(1);
// q.left.right = new TreeNode(3);

console.log(isSameTree(p, q));
