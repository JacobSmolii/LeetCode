// 61. Rotate List
// Given the head of a linked list, rotate the list to the right by k places.

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

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

var rotateRight = function (head, k) {
  let first = head; // will go to the last node of the list
  let tail = head; // will go to the k - 1 node from the end of the list
  let len = 1;

  if (k > 0) {
    while (first.next) {
      len++;
      first = first.next;
    }
    if (k % len) {
      len = len - ((k % len) + 1);
      while (len--) {
        tail = tail.next;
      }
      first.next = head; // we made it cyrcle linked list
      head = tail.next; // we made tail.next pointer as a head, so it starts now from 4->5->1->2->3 ->... (its also cyrcle list)
      tail.next = null; // we know that the tail stays on 3 node, so we break our cyrcle list by saying tail.next = null; (3-> null)
    }
  }
  return head; // and now the head points to 4->5->1->2->3->null;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
// l1.next.next.next = new ListNode(4);
// l1.next.next.next.next = new ListNode(5);

let k = 1;

printList(rotateRight(l1, k));
