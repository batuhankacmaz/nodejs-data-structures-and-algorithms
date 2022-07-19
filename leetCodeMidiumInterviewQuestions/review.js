const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  let count = 1;
  while (queue.length) {
    console.log("queue", queue.length);
    let len = queue.length;

    result.push(queue.map((node) => node.val));

    console.log("count", count);
    count++;
    while (len--) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result.reverse();
};

console.log(zigzagLevelOrder([3, 9, 20, null, null, 15, 7]));

const buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(root.val);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

const connect = function (root) {
  if (!root) return root;
  let leftNode = root;
  while (leftNode.left) {
    let current = leftNode;
    while (current) {
      current.left.next = current.right;
      if (current.next) {
        current.right.next = current.next.left;
      }
      current = current.next;
    }
    leftNode = leftNode.left;
  }
  return root;
};

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

const dfs = function (i, j, grid) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  ) {
    return;
  }
  grid[i][j] = "0";
  dfs(i - 1, j, grid);
  dfs(i + 1, j, grid);
  dfs(i, j - 1, grid);
  dfs(i, j + 1, grid);
};

const numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j, grid);
      }
    }
  }
  return count;
};
