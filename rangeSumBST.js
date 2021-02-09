// 938. Range Sum of BST
// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23

// Constraints:

// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var rangeSumBST = function (root, low, high) {
  function recur(n) {
    if (!n) return;
    if (n.val >= low && n.val <= high) sum += n.val;
    recur(n.left, low, high);
    recur(n.right, low, high);
  }

  let sum = 0;
  recur(root);
  return sum;
};

let p = new TreeNode(2);
p.left = new TreeNode(1);
p.right = new TreeNode(3);
p.left.left = new TreeNode(1);
p.left.right = new TreeNode(3);

console.log(rangeSumBST(p, 2, 3));
