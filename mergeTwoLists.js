// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a sorted list.
// The list should be made by splicing together the nodes of the first two lists.

function ListNode(val, next) {
  this.val = val === undefined ? null : val;
  this.next = next === undefined ? null : next;
}

function printList(list) {
  while (list) {
    console.log(list.val);
    list = list.next;
  }
}

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  let tail = head;

  while (l1 && l2) {
    // printList(head);
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 ? l1 : l2;
  tail = tail.next;

  return head.next;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

printList(mergeTwoLists(l1, l2));
