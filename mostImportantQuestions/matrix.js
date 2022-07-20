// SET MATRIX ZEROES

const setZeroes = function (matrix) {
  let zerosMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) zerosMatrix.push([i, j]);
    }
  }

  for (let item of zerosMatrix) {
    let row = item[0];
    let column = item[1];
    setZeros(row, column, matrix);
  }
};

const setZeros = (r, c, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][c] = 0;
  }
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[r][j] = 0;
  }
};

// SPIRAL ORDER MATRIX

var spiralOrder = function (matrix) {
  let res, left, right, bottom, top;
  res = [];
  left = 0;
  right = matrix[0].length;
  top = 0;
  bottom = matrix.length;

  while (left < right && top < bottom) {
    //get every i in the top row
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top += 1;
    //get every i in the right col
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right -= 1;
    console.log("left < right && top < bottom", left < right && top < bottom);
    if (!(left < right && top < bottom)) {
      break;
    }
    //get every i in the bottom row

    for (let i = right - 1; i > left - 1; i--) {
      console.log("in the loop");
      res.push(matrix[bottom - 1][i]);
    }
    bottom -= 1;
    // get every i in the left col

    for (let i = bottom - 1; i > top - 1; i--) {
      res.push(matrix[i][left]);
    }
    left += 1;
  }
  return res;
};

// WORD SEARCH BACKTRACKING DEPTH FOR SEARCH

var exist = function (board, word) {
  var len1 = board.length;
  var len2 = (board[0] || []).length;
  var len3 = word.length;
  var visited = null;

  if (!len1 || !len2 || !len3) return false;

  for (var i = 0; i < len1; i++) {
    for (var j = 0; j < len2; j++) {
      visited = Array(len1)
        .fill(0)
        .map((_) => Array(len2));
      console.log("visited", visited);
      if (helper(board, word, i, j, 0, visited)) return true;
    }
  }

  return false;
};

var helper = function (board, word, m, n, k, visited) {
  if (k === word.length) return true;
  if (m < 0 || m >= board.length) return false;
  if (n < 0 || n >= board[m].length) return false;
  if (visited[m][n]) return false;
  if (board[m][n] !== word[k]) return false;

  var res = false;

  visited[m][n] = true;

  res =
    helper(board, word, m - 1, n, k + 1, visited) ||
    helper(board, word, m + 1, n, k + 1, visited) ||
    helper(board, word, m, n - 1, k + 1, visited) ||
    helper(board, word, m, n + 1, k + 1, visited);

  if (!res) visited[m][n] = false;

  return res;
};
