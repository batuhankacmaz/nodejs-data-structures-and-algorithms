// NUMBER OF ISLANDS

// Version 1

function explore(grid, r, c, visited) {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;

  if (!rowInBounds || !colInBounds) return false;
  if (grid[r][c] === "0") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
}

const numIslands = function (grid) {
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited)) {
        count++;
      }
    }
  }
  return count;
};

//Version 2

/* function dfs(grid, r, c) {
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length ||
    grid[r][c] === "0"
  ) {
    return;
  }

  grid[r][c] = "0";
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

const numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count += 1;
        dfs(grid, i, j);
      }
    }
  }
  return count;
}; */

//CLONE GRAPH

const cloneGraph = function (node) {
  let visited = {};

  let dfs = (node) => {
    if (!node) return node;

    if (visited[node.val]) return visited[node.val];

    let copy = new Node(node.val);
    visited[node.val] = copy;

    node.neighbors.forEach((n) => {
      copy.neighbors.push(dfs(n));
    });

    return copy;
  };

  return dfs(node);
};

// MAX AREA OF ISLAND

const maxAreaOfIsland = function (grid) {
  const set = new Set();
  let maxArea = 0;
  let dfs = (r, c) => {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] === 0
    ) {
      return 0;
    }
    const position = r + "," + c;
    if (set.has(position)) return 0;
    set.add(position);

    return 1 + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1);
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        currentMax = dfs(r, c);
        maxArea = Math.max(maxArea, currentMax);
      }
    }
  }
  return maxArea;
};

//Pacific Atlantic Water Flow

class Drains {
  constructor(west = false, east = false) {
    this.west = west;
    this.east = east;
  }
}

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  const rowLen = heights.length;
  const colLen = heights[0].length;
  const lastRow = rowLen - 1;
  const lastCol = colLen - 1;
  const drainage = new Array(rowLen);
  const drainsBoth = [];

  for (let r = 0; r < rowLen; ++r) {
    drainage[r] = new Array(colLen);
    for (let c = 0; c < colLen; ++c) {
      drainage[r][c] = new Drains();
    }
  }

  for (let r = 0; r < rowLen; ++r) {
    markDrainage(r, 0, true);
    markDrainage(r, lastCol);
  }
  for (let c = 0; c < colLen; ++c) {
    markDrainage(0, c, true);
    markDrainage(lastRow, c);
  }

  return drainsBoth;

  /**
   * @param {number} r
   * @param {number} c
   * @param {boolean=} west = `false`
   * @param {number=} prev = `-Infinity`
   * @return {void}
   */
  function markDrainage(r, c, west = false, prev = -Infinity) {
    if (
      !inBounds(r, c) ||
      heights[r][c] < prev ||
      (west && drainage[r][c].west) ||
      (!west && drainage[r][c].east)
    ) {
      return;
    }

    const drains = drainage[r][c];
    const height = heights[r][c];

    if (west) {
      drains.west = true;
    } else {
      drains.east = true;
    }

    if (drains.west && drains.east) {
      drainsBoth.push([r, c]);
    }

    markDrainage(r - 1, c, west, height);
    markDrainage(r + 1, c, west, height);
    markDrainage(r, c - 1, west, height);
    markDrainage(r, c + 1, west, height);
  }

  /**
   * @param {number} r
   * @param {number} c
   * @return {boolean}
   */
  function inBounds(r, c) {
    return r >= 0 && c >= 0 && r < rowLen && c < colLen;
  }
}

// SURROUNDED REGIONS

function solve(board) {
  const rowLen = board.length;
  const colLen = board[0].length;
  const lastRow = rowLen - 1;
  const lastCol = colLen - 1;

  for (let r = 0; r < rowLen; ++r) {
    markSeen(r, 0);
    markSeen(r, lastCol);
  }
  for (let c = 1; c < colLen; ++c) {
    markSeen(0, c);
    markSeen(lastRow, c);
  }

  for (let r = 0; r < rowLen; ++r) {
    for (let c = 0; c < colLen; ++c) {
      switch (board[r][c]) {
        case "O":
          board[r][c] = "X";
          break;
        case "A":
          board[r][c] = "O";
          break;
      }
    }
  }

  function markSeen(r, c) {
    if (!inBounds(r, c) || board[r][c] !== "O") {
      return;
    }

    board[r][c] = "A";

    markSeen(r - 1, c);
    markSeen(r + 1, c);
    markSeen(r, c - 1);
    markSeen(r, c + 1);
  }
  function inBounds(r, c) {
    return r >= 0 && c >= 0 && r < rowLen && c < colLen;
  }
}

// COURSE SCHEDULE

const buildAdjList = (n, edges) => {
  const adjList = Array.from({length: n}, () => []);

  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
  }
  console.log("adjlist", adjList);
  return adjList;
};

const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
  arrive[node]++;
  visited[node] = true;

  for (let neighbor of adjList[node]) {
    console.log("neighbor", neighbor);
    if (!visited[neighbor]) {
      visited[neighbor] = true;

      if (hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true;
    } else {
      if (depart[neighbor] === 0) return true;
    }
  }

  depart[node]++;
  return false;
};

const canFinish = function (numCourses, prerequisites) {
  const adjList = buildAdjList(numCourses, prerequisites);
  const visited = {};
  const arrive = Array.from({length: numCourses}, () => 0);
  const depart = Array.from({length: numCourses}, () => 0);

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      if (hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false;
    }
  }

  return true;
};

console.log(canFinish(2, [[1, 0]]));

// SURROUNDED REGIONS II

var findOrder = function (numCourses, prerequisites) {
  const prereq = [];
  for (let i = 0; i < numCourses; i++) {
    prereq[i] = [];
  }
  for (const [crs, pre] of prerequisites) {
    prereq[crs].push(pre);
  }

  const output = [];
  const visit = new Set();
  const cycle = new Set();
  function dfs(course) {
    if (cycle.has(course)) return false;
    if (visit.has(course)) return true;

    cycle.add(course);
    for (const pre of prereq[course]) {
      if (!dfs(pre)) return false;
    }
    cycle.delete(course);
    visit.add(course);
    output.push(course);
    return true;
  }

  for (let j = 0; j < numCourses; j++) {
    if (!dfs(j)) return [];
  }
  return output;
};
