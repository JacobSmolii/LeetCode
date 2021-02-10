// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true
// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (root) {
  function recur(n, min = null, max = null) {
    if (!n) return 1;

    if (min && n.val <= min.val) return 0;
    if (max && n.val >= max.val) return 0;

    return recur(n.left, min, n) && recur(n.right, n, max);
  }
  return recur(root);
};

let p = new TreeNode(0);
// p.left = new TreeNode(1);
p.right = new TreeNode(-1);

// let p = new TreeNode(5);
// p.left = new TreeNode(1);
// p.right = new TreeNode(4);
// p.right.left = new TreeNode(3);
// p.right.right = new TreeNode(6);

console.log(isValidBST(p));
