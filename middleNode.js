// 876. Middle of the Linked List
// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

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

var middleNode = function (head) {
  if (!head.next) return head;
  let tmp = head;
  let len = 1;

  while (tmp.next) {
    len++;
    tmp = tmp.next;
  }

  let j = 1;

  while (head.next) {
    if (j == Math.floor(len / 2)) {
      return head.next;
    }
    j++;
    head = head.next;
  }
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);
l1.next.next.next.next.next = new ListNode(6);

console.log(middleNode(l1));
