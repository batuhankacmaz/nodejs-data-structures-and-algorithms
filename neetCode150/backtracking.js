var subsets = function (nums) {
  let res = [];
  let subres = [];

  let dfs = (i) => {
    if (i >= nums.length) {
      console.log(subres);
      res.push([...subres]);
      return;
    }

    //right side the three
    subres.push(nums[i]);
    dfs(i + 1);
    //left side the tree
    subres.pop();
    dfs(i + 1);
  };
  dfs(0);
  return res;
};

// Combination sum

function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);
  const combos = [];
  const combo = [];
  const set = new Set(candidates);
  buildCombos(target);
  return combos;
  function buildCombos(target, start = 0) {
    if (set.has(target)) {
      combo.push(target);
      combos.push(combo.slice());
      combo.pop();
    }

    const mid = Math.floor(target / 2);

    for (let i = start; i < candidates.length && candidates[i] <= mid; i++) {
      const candidate = candidates[i];
      combo.push(candidate);
      buildCombos(target - candidate, i);
      combo.pop();
    }
  }
}

// PERMUTATE

var permute = function (nums) {
  // global result
  const result = [];

  // dfs recursive helper
  const dfs = (i) => {
    // base case
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    //dfs recursive case
    for (let j = i; j < nums.length; j++) {
      console.log("i", i);
      console.log("j", j);
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  return result;
};
console.log(permute([1, 2, 3]));

// SUBSETS II

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const results = [];
  const result = [];
  getSubsets();
  return results;

  function getSubsets(start = 0) {
    results.push(result.slice());

    for (let i = start; i < nums.length; i++) {
      if (i !== start && nums[i] === nums[i - 1]) {
        continue;
      }
      result.push(nums[i]);
      getSubsets(i + 1);
      result.pop();
    }
  }
};

function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const combos = [];
  const combo = [];
  const map = {};

  for (let i = 0; i < candidates.length; i++) {
    map[candidates[i]] = i;
  }

  getCombos(target);
  return combos;

  function getCombos(target, start = 0) {
    if (target in map && start <= map[target]) {
      combo.push(target);
      combos.push(combo.slice());
      combo.pop();
    }

    const mid = Math.floor(target / 2);
    for (let i = start; i < candidates.length && candidates[i] <= mid; i++) {
      if (i !== start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      combo.push(candidates[i]);
      // if you dont add the  plus one then you use for example 1 this is candidate to several times and if you use i+1 then you dont use because you next
      getCombos(target - candidates[i], i + 1);
      combo.pop();
    }
  }
}

// WORD SEARCH
var exist = function (board, word) {
  let rowLen = board.length;
  let colLen = board[0].length;
  let visited = new Set();

  let dfs = (r, c, i) => {
    if (i === word.length) return true;
    if (r < 0 || r >= rowLen || c < 0 || c >= colLen || board[r][c] !== word[i])
      return false;

    let curel = r + "," + c;
    if (visited.has(curel)) return false;
    visited.add(curel);

    let result =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    visited.delete(curel);
    return result;
  };

  for (let r = 0; r < rowLen; ++r) {
    for (let c = 0; c < colLen; ++c) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
};

// PALINDROME PARTITIONING

var partition = function (s) {
  // global result
  const results = [];
  let result = [];

  let dfs = (i) => {
    // base case
    if (i === s.length) {
      results.push(result.slice());
      return;
    }

    // dfs recursive case
    for (let j = i; j < s.length; ++j) {
      if (isPalindrome(s, i, j)) {
        result.push(s.slice(i, j + 1));
        dfs(j + 1);
        result.pop();
      }
    }
  };
  dfs(0);
  return results;
};

const isPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }
  return true;
};

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const results = [];
  let result = [];

  const alpha = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (i) => {
    if (i === digits.length) {
      results.push(result.join(""));
      return;
    }

    let chars = alpha[digits[i]];

    for (let char of chars) {
      result.push(char);
      dfs(i + 1);
      result.pop();
    }
  };
  dfs(0);
  return results;
};

console.log(letterCombinations("23"));

var partition = function (s) {
  //global variable
  const results = [];
  const result = [];

  // dfs
  const dfs = (i) => {
    if (i === s.length) {
      results.push(result.slice());
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(i, j)) {
        result.push(s.slice(i, j + 1));
        dfs(i + 1);
        result.pop();
      }
    }
  };

  const isPalindrome = (left, right) => {
    let l = left;
    let r = right;
    while (l < r) {
      if (s[l] !== s[r]) return false;
      r--;
      l++;
    }
    return true;
  };
  return results;
};

// GENERATE PARENHTESES

const generateParenthesis = function (n) {
  // global result
  const result = [];
  const subresult = [];

  //dfs recursive helper
  const dfs = (start, oCount, cCount) => {
    // backtracking case
    if (oCount > n) return;
    if (cCount > oCount) return;

    //base case
    if (start === n * 2) {
      result.push(subresult.join(""));
      return;
    }

    //dfs recursive case

    //add open paran
    subresult.push("(");
    dfs(start + 1, oCount + 1, cCount);
    subresult.pop();

    //add close paran
    subresult.push(")");
    dfs(start + 1, oCount, cCount + 1);
    subresult.pop();
  };

  dfs(0, 0, 0);
  return result;
};
