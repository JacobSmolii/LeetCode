// 146. LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.
// If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.list = new DoubleLinkedList();
};

LRUCache.prototype.push = function (key, value) {
  let newNode = new Node(key, value);

  if (!this.list.head) {
    this.list.head = newNode;
    this.list.tail = newNode;
  } else {
    this.list.tail.next = newNode;
    newNode.prev = this.list.tail;
    this.list.tail = newNode;
  }
  this.list.length++;
  return newNode;
};

LRUCache.prototype.delete = function (node) {
  if (!node.next && !node.prev) {
    // single node
    this.list.head = null;
  } else if (node.prev == null && node.next) {
    // front
    this.list.head = this.list.head.next;
    this.list.head.prev = null;
  } else if (node.next == null && node.prev) {
    // last
    this.list.tail = this.list.tail.prev;
    this.list.tail.next = null;
  } else if (node.next && node.prev) {
    // between nodes
    // create a new variables for the pointers of the node and only then we change it.
    // if you change pointers directly with node, its not gonna change pointers inside the Double Linked List
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }
  this.list.length--;
};

LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;

  let node = this.map.get(key);
  let restVal = node.val;

  this.delete(node);
  this.map.delete(key);
  this.map.set(key, this.push(key, restVal));

  return restVal;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    let node = this.map.get(key);
    this.delete(node);
    this.map.delete(node.key);
  } else if (this.list.length >= this.capacity) {
    let node = this.list.head;
    this.delete(node);
    this.map.delete(node.key);
  }
  this.map.set(key, this.push(key, value));
};

let lRUCache = new LRUCache(3);

// let lRUCache = new LRUCache(2);
// console.log(lRUCache.put(1, 1)); // cache is {1=1}
// console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1)); // return 1
// console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2)); // returns -1 (not found)
// console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1)); // return -1 (not found)
// console.log(lRUCache.get(3)); // return 3
// console.log(lRUCache.get(4)); // return 4
