// ADD TWO NUMBERS AND ADD ANOTHER LINKEDLIST

const addTwoNumbers = function (l1, l2, count = 0) {
  if (!l1 && !l2 && count === 0) {
    return null;
  }
  let value = count;
  value += l1 ? l1.val : 0;
  value += l2 ? l2.val : 0;
  const node = new ListNode(
    value % 10,
    addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, value >= 10 ? 1 : 0)
  );
  return node;
};

//ODD EVEN LINKEDLIST
/* 
var oddEvenList = function (head) {
  // Handle base cases
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  // Set two pointers
  let cur = head;
  let next = head.next;

  // Set the odd.next to point to the next even node
  // Move each pointer up one node on each iteration
  while (next && next.next) {
    const temp = next.next;
    const temp2 = cur.next;

    cur.next = temp;
    next.next = temp.next;
    temp.next = temp2;

    cur = cur.next;
    next = next.next;
  }

  return head;
}; */

// INTERSECTION OF TWO LINKED LIST

var getIntersectionNode = function (headA, headB) {
  let a = headA,
    b = headB;
  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  return a;
};
