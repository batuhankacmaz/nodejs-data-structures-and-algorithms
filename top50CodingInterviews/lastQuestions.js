// Find the length of linkedlist

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
    let newNode = new Node(element);
    let current;
    if (this.head == null) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  getSize() {
    return this.size;
  }
  getLinkedList() {
    let result = "";
    let current;
    if (this.size === 0) {
      return null;
    } else {
      current = this.head;
      while (current) {
        result += current.element + " ";
        current = current.next;
      }
    }
    console.log(result);
  }
  getMiddle() {
    let length = 0;
    let current, middle;
    if (this.size === 0) {
      return null;
    } else {
      current = this.head;
      middle = this.head;
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
    }
    return middle.element;
  }
  searchThree(index) {
    let current;
    let length = 1;
    if (index < 0 || index > this.size - 1) {
      return null;
    }
    if (index === 0) {
      return this.head.element;
    } else {
      current = this.head.next;
      while (length < index) {
        current = current.next;
        length++;
      }
      return current.element;
    }
  }
  insertionSort(head) {
    let result = null;
    let current = head;
    let next;

    //Iterate the loop
    while (current !== null) {
      next = current.next;

      //Sort the linked list till the current element and store it
      result = this.sortedInsert(result, current);
      current = next;
    }

    //Return the sorted list
    return result;
  }

  //Function to sort the list
  sortedInsert(sorted, newNode) {
    //Temporary node to swap the elements
    let temp = new Node();
    let current = temp;
    temp.next = sorted;

    //Sort the list based on the specified order
    while (current.next !== null && current.next.element < newNode.element) {
      current = current.next;
    }

    //Swap the elements
    newNode.next = current.next;
    current.next = newNode;

    //Return the sorted list.
    return temp.next;
  }
  getHead() {
    return this.head;
  }
}

const ll = new LinkedList();
ll.add(10);
ll.add(14);
ll.add(12);
ll.add(18);
ll.add(16);

console.log(ll.getSize());
ll.getLinkedList();
console.log(ll.getMiddle());
console.log(ll.searchThree(ll.size - 3));
console.log("before sorting");
ll.getLinkedList();

console.log("after sorting", ll.insertionSort(ll.head));

// Check two string is rotate

const isRotate = function (str1, str2) {
  let longStr1 = str1 + str1;
  console.log("longStr1", longStr1);
  if (str1.length !== str2.length) {
    return false;
  } else {
    return longStr1.indexOf(str2) !== -1;
  }
};

console.log(isRotate("batu", "sevda"));

// remove spaces
function removeSpaces(word) {
  let arrayWord = word.split(" ");
  let strlast = arrayWord.join("");
  console.log("strlast", strlast);
}

removeSpaces(" ben bir super starim");
