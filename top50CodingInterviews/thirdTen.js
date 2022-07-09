// 21-) The first non-repeated char

/* const firstNonRepeatedChar = function (word) {
  let map = new Map();
  let wordArray = word.split("");
  for (let i = 0; i < wordArray.length; i++) {
    if (!map.has(wordArray[i])) map.set(wordArray[i], 1);
    else map.set(wordArray[i], map.get(wordArray[i]) + 1);
  }
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
};

console.log(firstNonRepeatedChar("bbaattu")); */

//22-) Finding middle element of linked list

/* class Node {
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
    let current = this.head;
    if (this.head === null) {
      this.head = newNode;
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  findMiddle() {
    let current = this.head;
    let middle = this.head;
    let length = 0;
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
  printLinkedList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.element + " ";
      current = current.next;
    }
    console.log(result);
  }
}

let ll = new LinkedList();
ll.add(5);
ll.add(10);
ll.add(15);
ll.add(20);
ll.add(25);
ll.printLinkedList();
console.log(ll.findMiddle());
 */

// 23 - 24 - 25 - 26 - 27 - 28 - 29

//Depth First Traversals:
//(a) Inorder (Left, Root, Right) : 4 2 5 1 3
//(b) Preorder (Root, Left, Right) : 1 2 4 5 3
//(c) Postorder (Left, Right, Root) : 4 5 2 3 1

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    var newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else this.insertNode(node.right, newNode);
    }
  }
  postOrder() {
    let visited = [],
      current = this.root;

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };

    traverse(current);
    return visited;
  }
  postOrderTraversal = function (root) {
    if (!root) return [];
    var res = [];
    var queue = [root];
    var node = null;
    while (queue.length) {
      node = queue.pop();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      res.push(node.val);
    }
    return res;
  };
  inOrder() {
    let visited = [],
      current = this.root;
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }
  inOrderTraversal = function (root) {
    if (!root) return [];
    var res = [];
    var queue = [root];
    var node = null;
    while (queue.length) {
      node = queue.pop();
      if (node.left) queue.push(node.left);
      res.push(node.val);
      if (node.right) queue.push(node.right);
    }
    return res;
  };

  preOrder() {
    let visited = [],
      current = this.root;
    let traverse = (node) => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }
  preorderTraversal = function (root) {
    if (!root) return [];
    var res = [];
    var queue = [root];
    var node = null;
    while (queue.length) {
      node = queue.pop();
      res.push(node.val);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    return res;
  };
  printAllLeaves() {
    let leaves = [],
      current = this.root;

    let searchLeaves = (node) => {
      if (node === null) return;
      if (node.left === null && node.right === null) leaves.push(node.val);
      if (node.left) searchLeaves(node.left);
      if (node.right) searchLeaves(node.right);
    };
    searchLeaves(current);
    return leaves;
  }
}

let bsc = new BinarySearchTree();
bsc.insert(10);
bsc.insert(7);
bsc.insert(16);
bsc.insert(6);
bsc.insert(9);
bsc.insert(12);
bsc.insert(18);
bsc.insert(17);
bsc.insert(20);

console.log("printPostOrder");
console.log(bsc.postOrder());
console.log("printInOrder");
console.log(bsc.inOrder());
console.log("printPreorder");
console.log(bsc.preOrder());
console.log("printAllLeaves");
console.log(bsc.printAllLeaves());
