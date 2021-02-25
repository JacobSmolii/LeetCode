// 143. Reorder List
// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reorderList1 = function (head) {
  //   let map = new Map();
  //   for (let i = 0; head; i++) {
  //     map.set(i, head);
  //     head = head.next;
  //   }
  //   console.log(map.length);
  //   for ([key, val] of map) {
  //     val.next = null;
  //   }
  //   let tail = head;
  //   for (let i = 0; i < map.length / 2; i++) {
  //     if (head == null) {
  //       head = map[i];
  //       tail = map[i];
  //     } else {
  //       tail.next = map[i];
  //     }
  //     tail.next = map[map.length - i - 1];
  //   }
  //   console.log(head);
  //   console.log(map.length);
};

var reorderList = function (head) {
  function travers(list = head) {
    while (list.next && list.next.next) {
      list = list.next;
    }

    let node = list.next;
    list.next = null;
    return node;
  }

  let len = 0;
  let tmp = head;

  while (tmp) {
    len++;
    tmp = tmp.next;
  }

  let tail = head;

  for (let i = 1; i < len / 2; i++) {
    let tmp = tail.next;

    tail.next = travers();
    tail = tail.next;

    tail.next = tmp;
    tail = tail.next;
  }

  return head;
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
// l.next.next.next.next = new ListNode(5);

console.log(reorderList(l));
