// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function printList(list) {
  while (list) {
    // console.log(list.val);
    process.stdout.write(`${list.val} -> `);
    list = list.next;
  }
}

var deleteDuplicates = function (head) {
  if (head == null) return null;
  let list = new ListNode(head.val);
  //   list.val = null;
  let tail = list;

  while (head) {
    if (head.val != tail.val) {
      tail.next = head;
      tail = tail.next;
    }

    head = head.next;
    tail.next = null;
  }
  return list;
};

let l1 = new ListNode(0);
l1.next = new ListNode(0);
l1.next.next = new ListNode(0);
l1.next.next.next = new ListNode(0);
l1.next.next.next.next = new ListNode(0);

printList(deleteDuplicates(l1));
