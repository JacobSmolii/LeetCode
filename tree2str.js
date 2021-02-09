// 606. Construct String from Binary Tree
// You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

// The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.
// Input: Binary tree: [1,2,3,4]
//        1
//      /   \
//     2     3
//    /
//   4

// Output: "1(2(4))(3)"

// Explanation: Originallay it needs to be "1(2(4)())(3()())",
// but you need to omit all the unnecessary empty parenthesis pairs.
// And it will be "1(2(4))(3)".

// Example 2:
// Input: Binary tree: [1,2,3,null,4]
//        1
//      /   \
//     2     3
//      \
//       4

// Output: "1(2()(4))(3)"

// Explanation: Almost the same as the first example,
// except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

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

var tree2str = function (t) {
  function recur(n) {
    if (!n) return '';

    rest += `${n.val}`;
    if (n.left) {
      rest += '(';
      recur(n.left);
      rest += ')';
    }
    if (n.right) {
      if (!n.left) rest += '()';
      rest += '(';
      recur(n.right);
      rest += ')';
    }
  }

  let rest = '';
  recur(t);

  return rest;
};

// let p = new TreeNode(1);
// p.left = new TreeNode(2);
// p.right = new TreeNode(3);
// p.left.left = new TreeNode(4);
// p.left.right = new TreeNode(4);

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.left.left = new TreeNode(3);
p.left.left.left = new TreeNode(4);

console.log(tree2str(p));
