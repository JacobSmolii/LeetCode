// 993. Cousins in Binary Tree
// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.
// Example 1:

// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:

// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:

// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false
// Constraints:

// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isCousins = function (root, x, y) {
  // looking for the depth and at the same time parent of the node å
  function recur(val, n = root, parent = null, depth = 0) {
    if (!n) return;

    if (n.val == val) return [depth, parent];
    depth++;

    return (
      recur(val, n.right, n.val, depth) || recur(val, n.left, n.val, depth)
    );
  }

  const [depthX, parentX] = recur(x);
  const [depthY, parentY] = recur(y);

  console.log(depthX, parentX);
  console.log(depthY, parentY);

  if (parentX != parentY && depthX == depthY) return true;
  else return false;
};

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
p.left.right = new TreeNode(4);
p.right.right = new TreeNode(5);

let x = 4;
let y = 5;

console.log(isCousins(p, x, y));
