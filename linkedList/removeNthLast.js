function ListNode(val) {
  this.val = val;
  this.next = null;
}

function ListToString(node) {
  const result = [];
  current = node;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result.join();
}

function linkedListFromArray(list) {
  const head = new ListNode(list.shift());
  let current = head;
  list.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let buffer = [head];
  let el = head;
  let toRemove = head;
  let count = n;
  while (el.next) {
    el = el.next;

    if (count <= 1) {
      toRemove = toRemove.next;
    } else {
      count--;
    }
  }

  console.log(toRemove);

  if (toRemove.next) {
    toRemove.val = toRemove.next.val;
    toRemove.next = toRemove.next.next;
  }

  return head;
};

const l = linkedListFromArray([1, 2]);
console.log(ListToString(removeNthFromEnd(l, 1)));
