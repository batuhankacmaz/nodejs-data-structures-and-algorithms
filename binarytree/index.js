class Node {
  constructor(element) {
    this.data = element;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) node.left = newNode;
      else return this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else return this.insertNode(node.right, newNode);
    }
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.preorder(node.left);
      this.preorder(node.right);
      console.log(node.data);
    }
  }
  getBSTRoot() {
    return this.root;
  }
  findNode(node, data) {
    if (node === null) return null;
    else if (node.data > data) return this.findNode(node.left, data);
    else if (node.data < data) return this.findNode(node.right, data);
    else return node;
  }
  // root to leaf
  /// if you want to leaf to root array.reverse()
  levelOrder(node) {
    if (!node) return [];

    const queue = [node];
    console.log("queue: ", queue);
    const result = [];
    let count = 0;

    while (queue.length) {
      let len = queue.length;
      console.log("lenfirst", len);
      result.push(queue.map((node) => node.data));
      console.log("result: ", result);
      count++;
      while (len--) {
        console.log("lensecond", len);
        let node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return result;
  }
  printLeafNodes(node) {
    let queue = [];
    function print(node) {
      if (node === null) return;
      if (node.left === null && node.right === null) {
        queue.push(node.data);
        return;
      }
      if (node.left !== null) print(node.left);
      if (node.right !== null) print(node.right);
    }
    print(node);
    return queue;
  }
  isBalanced(node) {
    if (node === null) return true;
    if (this.checkHeight(node) === -1) return false;
    else return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
  checkHeight(node) {
    if (node === null) return 0;
    let leftHeight = this.checkHeight(node.left);
    let rightHeight = this.checkHeight(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
}

let bst = new BST();
bst.insert(8);
bst.insert(6);
bst.insert(9);
bst.insert(4);
bst.insert(7);

// 8 6 9 4 7
let root = bst.getBSTRoot();
console.log("root", root);
console.log("In Order:");
bst.inorder(root);
console.log("\n");
console.log("Pre Order:");
bst.preorder(root);
console.log("\n");
console.log("Post Order:");
bst.postorder(root);
console.log("\n");

console.log(bst.findNode(root, 9));

//console.log("levelOrder");
/* console.log(bst.levelOrder(root));
console.log(bst.printLeafNodes(root));
console.log(bst.isBalanced(root)); */
console.log(bst.checkHeight(root));
