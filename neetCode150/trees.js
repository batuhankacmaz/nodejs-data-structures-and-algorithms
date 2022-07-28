// BINARY TREE LEVEL ORDER TRAVERSAL

//BFS
var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const numNodes = queue.length;
    const temp = [];

    for (let i = 0; i < numNodes; i++) {
      const subtree = queue.shift();
      temp.push(subtree.val);
      if (subtree.left !== null) queue.push(subtree.left);
      if (subtree.right !== null) queue.push(subtree.right);
    }
    result.push(temp);
  }
  return result;
};

//BINARY TREE RIGHT SIDE VIEW

// BFS
var rightSideView = function (root) {
  let result = [];
  let queue = [];

  if (root === null) {
    return [];
  }
  queue.push(root);

  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if (i === length - 1) {
        result.push(node.val);
      }
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return result;
};

// GOOD NODES

//DFS
function goodNodes(root) {
  let total = 0;

  function traverse(node, prev) {
    if (!node) return;

    if (node.val >= prev) {
      total += 1;
    }
    if (node.left) traverse(node.left, Math.max(node.val, prev));
    if (node.right) traverse(node.right, Math.max(node.val, prev));
  }

  traverse(root, root.val);

  return total;
}

//IS VALID BINARY SEARCH TREE

//DFS

var isValidBST = function (root) {
  return validate(root, null, null);
};

function validate(root, max, min) {
  if (!root) {
    return true;
  } else if (
    (max !== null && root.val >= max) ||
    (min !== null && root.val <= min)
  ) {
    return false;
  } else {
    return (
      validate(root.left, root.val, min) && validate(root.right, max, root.val)
    );
  }
}

// KTH SMALLEST ELEMENT

const kthSmallest = function (root, k) {
  let i = 0;
  let result;
  const inorder = (n) => {
    if (n === null) return;
    inorder(n.left);
    i++;
    if (i === k) {
      result = n.val;
      return;
    }
    inorder(n.right);
  };
  inorder(root);
  return result;
};

// BUILD TREE inorder preorder tree

function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}

// SYMMETRIC TREE

function isSymmetric(root) {
  if (root === null) return true;
  return areSymetric(root.left, root.right);
}
const areSymetric = (root1, root2) => {
  if (root1 === null && root2 === null) return true;
  else if (root1.val !== root2.val) return false;
  else {
    return (
      areSymetric(root1.left, root2.right) &&
      areSymetric(root1.right, root2.left)
    );
  }
};
