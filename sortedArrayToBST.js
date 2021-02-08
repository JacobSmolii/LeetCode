// 108. Convert Sorted Array to Binary Search Tree
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of
// the two subtrees of every node never differ by more than 1.

// Example:
// Given the sorted array: [-10,-3,0,5,9],
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function printBST(node) {
  if (node) {
    console.log(node.val);
    printBST(node.left);
    printBST(node.right);
  }
}

var sortedArrayToBST = function (nums) {
  var recur = function (left, right) {
    if (left >= right) return null;

    let mid = Math.floor((left + right) / 2);

    let node = new TreeNode(nums[mid]);

    node.left = recur(left, mid);
    node.right = recur(mid + 1, right);
    return node;
  };

  let left = 0;
  let right = nums.length;
  let tree = recur(left, right);

  return tree;
};

let nums = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(nums));
