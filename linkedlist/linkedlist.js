class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter valid address");
    } else {
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter valid address");
    } else {
      var curr = this.head;
      var prev = curr;
      var tempIndex = 0;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (tempIndex < index) {
          tempIndex++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;
      return curr.element;
    }
  }
  removeElement(element) {
    var current = this.head;
    var prev = null;

    while (current) {
      if (current.element === element) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }
  indexOf(element) {
    var count = 0;
    var current = this.head;
    while (current) {
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }

    return -1;
  }
  isEmpty() {
    return this.size === 0;
  }
  sizeList() {
    return this.size;
  }
  printList() {
    var current = this.head;
    var string = "";
    while (current !== null) {
      string += current.element + " ";
      current = current.next;
    }
    console.log(string);
  }
  findMiddleElement() {
    var current = this.head;
    var length = 0;
    var middle = this.head;
    while (current.next) {
      length++;
      if (length % 2 === 0) {
        middle = middle.next;
      }
      current = current.next;
    }
    if (length % 2 === 1) {
      middle = middle.next;
    }
    return middle.element;
  }
  reverse() {
    let pointer = this.head; //O(1)
    let current = null; //O(1)
    let previous = null; //O(1)
    while (pointer) {
      //O(n)
      current = pointer; // 1
      pointer = pointer.next; //1

      //reverse
      current.next = previous; //1
      previous = current; //1
      this.head = current; //1
    }
  }

  // 5n + 3 O(n)
  maxValue() {
    let current = this.head;
    let maxValue = current.element;

    while (current.next) {
      current = current.next;
      if (current.element > maxValue) {
        maxValue = current.element;
      }
    }
    return maxValue;
  }
  minValue() {
    let current = this.head;
    let minValue = current.element;
    while (current.next) {
      current = current.next;
      if (current.element < minValue) {
        minValue = current.element;
      }
    }
    return minValue;
  }
  removeDuplicates() {
    var firstNode = this.head;
    var secondNode = null;
    var duplicatedNode = null;

    while (firstNode && firstNode.next) {
      secondNode = firstNode;
      while (secondNode.next) {
        if (firstNode.element === secondNode.next.element) {
          duplicatedNode = secondNode;
          duplicatedNode.next = secondNode.next.next;
        } else {
          secondNode = secondNode.next;
        }
      }
      firstNode = firstNode.next;
    }
  }
  findKthToLast(k, head) {
    // do recursively
    if (head === null || k < 1) {
      return;
    } else if (k === 1) {
      console.log(head.element);
      this.findKthToLast(k, head.next);
    } else {
      this.findKthToLast(k - 1, head.next);
    }
  }
}

var ll = new LinkedList();

console.log(ll.isEmpty());

ll.add(10);

ll.printList();

console.log(ll.sizeList());

ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("is element removed ?" + ll.removeElement(50));

ll.printList();

console.log("Index of 40 " + ll.indexOf(40));

ll.insertAt(60, 2);

ll.printList();
console.log("is List Empty ? " + ll.isEmpty());

console.log(ll.removeFrom(3));

ll.add(50);
ll.add(30);
ll.add(100);
ll.add(100);
ll.add(50);
console.log("before reverse");
ll.printList();
ll.reverse();
console.log("after reverse");
ll.printList();
console.log("max value is ", ll.maxValue());
console.log("min value is ", ll.minValue());

console.log("middle element is", ll.findMiddleElement());

ll.removeDuplicates();
console.log("removed duplicateds");
ll.printList();
ll.findKthToLast(5, ll.head);
