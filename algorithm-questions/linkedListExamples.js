function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    var currentNode = head;
    var index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function (index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };

  // Middle Element - 1st Question
  this.middleElement = function () {
    let current = head;
    let length = 0;
    let middle = head;

    while (current.next != null) {
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
  };

  this.print = function () {
    let node = head;
    let output = "";
    while (node != null) {
      output += node.element + " ";
      node = node.next;
    }
    console.log(output);
    console.log("");
  };

  this.reverse = function () {
    let pointer = head;
    let previous = null;
    let current = null;

    while (pointer != null) {
      current = pointer;
      pointer = pointer.next;

      // Reverse the link
      current.next = previous;
      previous = current;
      head = current;
    }
  };

  this.maxValue = function () {
    let max = head;
    let maxElement = head.element;
    while (max.next !== null) {
      max = max.next;

      if (max.element > maxElement) {
        maxElement = max.element;
      }
    }
    return maxElement;
  };

  this.minValue = function () {
    let temp = head;
    let minValue = head.element;
    while (temp.next !== null) {
      temp = temp.next;
      if (temp.element < minValue) {
        minValue = temp.element;
      }
    }
    return minValue;
  };

  this.removeDuplicates = function () {
    var ptr1 = null,
      ptr2 = null,
      dup = null;
    ptr1 = head;

    // Pick elements one by one
    while (ptr1 != null && ptr1.next != null) {
      ptr2 = ptr1;
      // Compare the picked element with
      // rest of the elements
      while (ptr2.next != null) {
        // If duplicate then delete it
        if (ptr1.data == ptr2.next.data) {
          // Sequence of steps is important here
          dup = ptr2.next;
          ptr2.next = ptr2.next.next;
        } else {
          ptr2 = ptr2.next;
        }
      }
      ptr1 = ptr1.next;
    }
  };
}

// --------------------------------------1-----------------------------------

// JavaScript program to find
// middle of linked list
function recursivelyReverseList(head) {
  // base case
  if (head === null || head.next === null) {
    return head;
  }
  let reversedHead = recursivelyReverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedHead;
}

var conga = new LinkedList();
conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
const middleElement = conga.middleElement();
//console.log(middleElement);
conga.print();
//console.log(conga.elementAt(4));
conga.reverse();
conga.print();

let linkedListNumbers = new LinkedList();
linkedListNumbers.add(1);
linkedListNumbers.add(2);
linkedListNumbers.add(6);
linkedListNumbers.add(4);
linkedListNumbers.add(-1);
linkedListNumbers.add(4);
linkedListNumbers.add(1);

//console.log(recursivelyReverseList(linkedListNumbers.head));
linkedListNumbers.print();
linkedListNumbers.removeDuplicates();
linkedListNumbers.print();

/* const maxValue = linkedListNumbers.maxValue();
const minValue = linkedListNumbers.minValue();
console.log(maxValue);
console.log(minValue); */
