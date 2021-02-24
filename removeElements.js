// 203. Remove Linked List Elements
// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeElements = function (head, val) {
  if (!head) return null;

  let cur = head.next;
  let prev = head;

  while (cur) {
    if (cur.val === val) {
      cur = cur.next;
      prev.next = cur;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  if (head.val === val) return head.next;
  return head;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);

// let l1 = new ListNode(1);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(6);
// l1.next.next.next = new ListNode(3);
// l1.next.next.next.next = new ListNode(4);
// l1.next.next.next.next.next = new ListNode(5);

let val = 1;
console.log(removeElements(l1, val));
