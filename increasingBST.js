// 897. Increasing Order Search Tree
// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

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

var increasingBST = function (root) {
  function recur(root) {
    if (!root) return;

    recur(root.left);
    root.left = null;
    cur.right = root;
    cur = cur.right; // iteration trough the new tree;

    recur(root.right);
  }

  let rest = new TreeNode();
  let cur = rest;

  recur(root);

  return rest.right;
};

let p = new TreeNode(2);
p.left = new TreeNode(1);
p.right = new TreeNode(3);
// p.left.left = new TreeNode(1);
// p.left.right = new TreeNode(3);

console.log(increasingBST(p));
