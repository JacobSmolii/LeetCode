// 707. Design Linked List
// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

var Node = function (val) {
  this.val = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.length = 0;
  this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let tmp = this.head;
  let rest = -1;
  let i = 0;

  while (tmp) {
    if (i++ == index) {
      rest = tmp.val;
      break;
    }
    tmp = tmp.next;
  }
  return rest;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.length++;
    // this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  let tmp = this.head;

  if (!this.head) {
    this.head = newNode;
    this.length++;
  } else {
    while (tmp.next) tmp = tmp.next;
    tmp.next = newNode;
    this.length++;
  }
};

/**
 * Add a node of value val before the index-th node in the linked list.
 * If index equals to the length of linked list, the node will be appended to the end of linked list.
 * If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index == 0) this.addAtHead(val);
  else if (index == this.length) this.addAtTail(val);
  else {
    let tmp = this.head;
    let newNode = new Node(val);
    let i = 1;
    while (tmp.next) {
      if (i++ == index) break;
      tmp = tmp.next;
    }
    newNode.next = tmp.next;
    tmp.next = newNode;
    this.length++;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index - 1 > this.length) return;
  else if (index == 0 && this.head) {
    this.head = this.head.next ? this.head.next : null;
  } else {
    let tmp = this.head;
    let i = 0;

    while (tmp) {
      if (i++ == index - 1) break;
      tmp = tmp.next;
    }
    tmp.next = tmp.next ? tmp.next.next : null;
    console.log(tmp);
  }
};

var obj = new MyLinkedList();

obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
console.log(obj.get(1));
obj.deleteAtIndex(0); // now the linked list is 1->3
console.log(obj.get(0));

// obj.addAtHead(2);
// obj.deleteAtIndex(1);
// obj.addAtHead(2);
// obj.addAtHead(7);
// obj.addAtHead(3);
// obj.addAtHead(2);
// obj.addAtHead(5);
// obj.addAtTail(5);
// console.log(obj.get(5));
// obj.deleteAtIndex(6);
// obj.deleteAtIndex(4);

// console.log(obj.get(0)); // return 2

console.log(obj);
