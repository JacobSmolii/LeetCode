// 700. Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function print(n) {
  if (n) {
    console.log(n.val);
    print(n.left);
    print(n.right);
  }
}

var searchBST = function (root, val) {
  let rest = null;

  function recur(node, val) {
    if (!node) return;
    if (rest) return rest;
    if (node.val == val) return node;

    rest = recur(node.left, val);
    if (rest) return rest;
    rest = recur(node.right, val);
    if (rest) return rest;
  }

  rest = recur(root, val);
  return rest ? rest : null;
};

// let root = [4, 2, 7, 1, 3];
// let root = new TreeNode(4);
// root.left = new TreeNode(2);
// root.right = new TreeNode(7);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
// let val = 2;

let root = new TreeNode(8);
root.left = new TreeNode(2);
root.right = new TreeNode(22);
root.right.right = new TreeNode(63);
root.right.right.right = new TreeNode(84);
let val = 63;

console.log(searchBST(root, val));
