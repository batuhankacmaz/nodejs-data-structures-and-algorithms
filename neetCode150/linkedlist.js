function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var partition = function (head, x) {
  var l1 = new ListNode(0);
  var l2 = new ListNode(0);
  var now1 = l1;
  var now2 = l2;
  var now = head;

  while (now) {
    if (now.val < x) {
      now1.next = now;
      now1 = now1.next;
    } else {
      now2.next = now;
      now2 = now2.next;
    }
    now = now.next;
  }

  now1.next = l2.next;
  now2.next = null;

  return l1.next;
};

console.log(partition([1, 4, 3, 2, 5, 2], 3));

// REORDER LIST

var reorderList = function (head) {
  if (!head) {
    return;
  }

  let slow = head;
  let fast = head;

  // finding the middle of the linked list using 2 pters
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second part of the list starting at slow
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  } // here prev is the head

  // merge two sorted lists (first one starts at head, second at prev)
  let first = head;
  let second = prev;

  while (second.next) {
    temp = first.next;
    first.next = second;
    first = temp;

    temp = second.next;
    second.next = first;
    second = temp;
  }
};

// REMOVE NTH FROM END

var removeNthFromEnd = function (head, n) {
  let currNode = head;
  let nodeBeforeN = head;

  for (let i = 0; i < n; i++) {
    currNode = currNode.next;
  }

  if (!currNode) {
    return head.next;
  }

  while (currNode.next) {
    nodeBeforeN = nodeBeforeN.next;
    currNode = currNode.next;
  }

  nodeBeforeN.next = nodeBeforeN.next.next;

  return head;
};

// COPY NODE WIIH RANDOM VAL

var copyRandomList = function (head) {
  let map = new Map();
  let ptr = head;

  while (ptr) {
    // map old - new
    map.set(ptr, new Node(ptr.val, null, null));
    ptr = ptr.next;
  }

  for (const [oldptr, newptr] of map) {
    newptr.next = oldptr.next && map.get(oldptr.next);
    newptr.random = oldptr.random && map.get(oldptr.random);
  }
  return map.get(head);
};

// ADD TWO NUMBERS

const addTwoNumbers = function (l1, l2, count = 0) {
  if (!l1 && !l2 && count === 0) return null;
  let value = count;
  value += l1?.val || 0;
  value += l2?.val || 0;
  let node = new ListNode(
    value % 10,
    addTwoNumbers(l1?.next || null, l2?.next || null, value >= 10 ? 1 : 0)
  );
  return node;
};

// LINKEDLIST CYCLE

var hasCycle = function (head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    } else {
      set.add(head);
      head = head.next;
    }
  }
  return false;
};

// FIND DUPLICATE

var findDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      return nums[i];
    }
  }
  return -1;
};

// LRU

function LRUCache(capacity) {
  this.capacity = capacity;
  this.cacheMap = new Map();
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cacheMap.has(key)) {
    return -1;
  }
  const value = this.cacheMap.get(key);
  this.cacheMap.delete(key);
  this.cacheMap.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cacheMap.has(key)) {
    this.cacheMap.delete(key);
  } else if (this.cacheMap.size === this.capacity) {
    const leastRecentlyUsedKey = this.cacheMap.keys().next().value;
    this.cacheMap.delete(leastRecentlyUsedKey);
  }
  this.cacheMap.set(key, value);
};

// REMOVE DUPLICATES FROM SORTED LIST II

var deleteDuplicates = function (head) {
  if (!head) return null;

  let dummy = new ListNode(-Infinity, head);
  let prev = dummy;
  let cur = head;
  let next = cur.next;

  while (cur) {
    if (cur && next && cur.val === next.val) {
      while (next && cur.val === next.val) {
        next = next.next;
      }

      prev.next = next;
      cur = next;
      next = next ? next.next : null;
    } else {
      prev = cur;
      cur = next;
      next = next ? next.next : null;
    }
  }

  return dummy.next;
};
