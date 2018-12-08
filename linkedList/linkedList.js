/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
};

var Node = function(val) {
  this.val = val;
  this.next = null;
};

Node.prototype.toString = function() {
  return this.next ? `${this.val} -> ${this.next.toString()}` : `${this.val}`;
};

MyLinkedList.prototype.toString = function() {
  return this.head && this.head.toString();
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  var currentIndex = -1;
  if (this.head === null) {
    return currentIndex;
  }
  currentIndex++;

  if (index === currentIndex) {
    return this.head.val;
  }

  var currentNode = this.head;

  while (currentNode.next) {
    currentNode = currentNode.next;
    currentIndex++;

    if (currentIndex === index) {
      return currentNode.val;
    }
  }

  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  var node = new Node(val);

  if (this.head === null) {
    return (this.head = node);
  }

  node.next = this.head;
  this.head = node;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  var node = new Node(val);
  if (this.head === null) {
    this.head = node;
    return;
  }

  var currentNode = this.head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (!this.head && index !== 0) {
    return;
  }

  var currentIndex = 0;
  var currentNode = this.head;
  var node = new Node(val);

  while (currentNode.next) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    currentIndex++;

    if (currentIndex === index) {
      node.next = currentNode;
      previousNode.next = node;
      return;
    }
  }

  if (++currentIndex === index && currentNode.next === null) {
    currentNode.next = node;
    return;
  }

  return false;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (this.head === null) {
    return;
  }
  var currentIndex = 0;
  var currentNode = this.head;
  var previousNode;

  while (currentNode.next) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    if (++currentIndex === index) {
      break;
    }
  }

  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  if (currentIndex < index) {
    return;
  }
  if (previousNode) {
    previousNode.next = currentNode.next;
  }
};

// var obj = Object.create(MyLinkedList).createNew();
// var param_1 = obj.get(1);
// obj.addAtHead(1);
// obj.addAtTail(3);
// obj.addAtIndex(1, 2);
// obj.deleteAtIndex(index);

(function() {
  const commands = [
    'addAtHead',
    'addAtTail',
    'addAtIndex',
    'get',
    'deleteAtIndex',
    'get',
    'deleteAtIndex'
  ];

  const params = [[1], [3], [1, 2], [1], [1], [1], [2]];

  results = [];

  const linkedList = new MyLinkedList();

  commands.forEach((command, index) => {
    console.log(index);
    console.log('before: ', linkedList.toString());
    console.log(command, params[index]);
    const result = linkedList[command](...params[index]);
    console.log('after: ', linkedList.toString());
    results.push(result);
  });
})();
