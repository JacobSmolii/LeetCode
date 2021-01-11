// 1290. Convert Binary Number in a Linked List to Integer
// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var getDecimalValue = function (head) {
  let num = 0;

  while (head) {
    num = num * 2 + head.val; // every number start from the left we multiply by 2 and add val of the node. Doing this we end at the right and got the decimal number
    head = head.next;
  }
  return num;
};

let l1 = new ListNode(1);
l1.next = new ListNode(0);
l1.next.next = new ListNode(1);
// l1.next.next.next = new ListNode(1);
// l1.next.next.next.next = new ListNode(0);
// l1.next.next.next.next.next = new ListNode(1);

console.log(getDecimalValue(l1));
