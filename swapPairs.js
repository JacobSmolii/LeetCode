// 24. Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head.

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

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

var swapPairs = function (head) {
  if (!head.next) return head;
  let rest = new ListNode();
  let tail = rest;

  while (head && head.next) {
    let tmp = head.next.next; // save third pointer of the input list
    let first = head;
    let second = head.next;

    tail.next = second;
    second.next = first;

    tail = tail.next.next;
    tail.next = null; // closing the tale to avoid concantenating rest of the list

    head = tmp; // iterating through the list
  }
  if (head) tail.next = head;

  return rest.next;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

printList(swapPairs(l1));
