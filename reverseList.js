// 206. Reverse Linked List

// Reverse a singly linked list.

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

var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    let tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }
  return prev;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

printList(reverseList(l1));
