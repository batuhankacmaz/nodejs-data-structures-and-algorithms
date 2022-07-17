const preorderTraversal = function (root) {
  if (!root) return [];
  const stack = [root];
  const result = [];

  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};

const preorderTraversalRecursively = function (root) {
  if (!root) return [];
  const result = [];

  const preorder = function (node) {
    if (node === null) return null;

    result.push(node.val);
    if (node.left) preorder(node.left);
    if (node.right) preorder(node.right);
  };

  preorder(root);
  return result;
};

// MORRIS TRAVERSAL ALGORITHM

function inorderTraversal(root) {
  let tourist = root;
  let solution = [];

  while (tourist !== null) {
    let guide = tourist.left;
    if (tourist.left !== null) {
      while (guide.right !== null && guide.right !== tourist) {
        guide = guide.right;
      }
      if (guide.right === null) {
        guide.right = tourist;
        tourist = tourist.left;
      } else {
        guide.right = null;
        solution.push(tourist.val);
        tourist = tourist.right;
      }
    } else {
      solution.push(tourist.val);
      tourist = tourist.right;
    }
  }
  return solution;
}

// LEVEL ORDER USE SAME APPROACH

const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  let count = 0;
  while (queue.length) {
    let len = queue.length;
    if (count % 2 === 0) result.push(queue.map((node) => node.val));
    else result.push(queue.map((node) => node.val).reverse());
    count++;
    while (len--) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};

// PREORDER AND INORDER GIVEN MAKE TREE

const buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(root.val);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

// POPULATING NEXT RIGHT POINTERS

var connect = function (root) {
  if (root === null) return root;
  let leftNode = root;
  while (leftNode.left !== null) {
    let head = leftNode;
    while (head !== null) {
      head.left.next = head.right;
      if (head.next !== null) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }
    leftNode = leftNode.left;
  }
  return root;
};

//Kth Smallest Element in a BST

var kthSmallest = function (root, k) {
  let i = 0;
  let res;
  var inorder = function (n) {
    if (n == null) return;
    inorder(n.left);
    i++;
    if (i == k) {
      res = n.val;
      return;
    }
    inorder(n.right);
  };

  inorder(root, k);
  return res;
};

//NUMBER OF ISLANDS
//USE GRAPH

const getAdjNeighbors = (i, j, grid, visited) => {
  const adjNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
  if (i < grid.length - 1 && !visited[i + 1][j]) adjNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1]);
  if (j < grid[0].length - 1 && !visited[i][j + 1])
    adjNeighbors.push([i, j + 1]);

  return adjNeighbors;
};

const dFS = (i, j, grid, visited) => {
  const stack = [[i, j]];
  let islandSize = 0;
  let max = 0;
  while (stack.length) {
    let curNode = stack.pop();
    let [i, j] = curNode;

    if (visited[i][j]) continue;
    visited[i][j] = true;

    //check if cell is part of island
    if (grid[i][j] === "0") continue;
    islandSize++;

    let adjNeighbors = getAdjNeighbors(i, j, grid, visited);

    stack.push(...adjNeighbors);
  }
  max = Math.max(max, islandSize);
  return islandSize > 0 ? true : false;
};

const numIslands = function (grid) {
  const visited = grid.map((row) => row.map((cell) => false));
  let islandCounts = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (dFS(i, j, grid, visited)) islandCounts++;
    }
  }
  return islandCounts;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
