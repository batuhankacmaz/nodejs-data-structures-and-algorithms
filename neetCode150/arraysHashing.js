//VALID ANAGRAM
const isAnagram = (s, t) => {
  const sMap = new Map();
  const tMap = new Map();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    let currentValue = s[i];
    if (sMap.get(currentValue)) {
      sMap.set(currentValue, sMap.get(currentValue) + 1);
    } else {
      sMap.set(currentValue, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    let currentValue = t[i];
    if (tMap.get(currentValue)) {
      tMap.set(currentValue, tMap.get(currentValue) + 1);
    } else {
      tMap.set(currentValue, 1);
    }
  }

  for (let [key, value] of sMap) {
    if (tMap.get(key) !== value || tMap.get(key) === undefined) return false;
  }
  return true;
};

// GROUP ANAGRAMS
const groupAnagrams = function (strs) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");

    if (map.get(sorted)) {
      map.get(sorted).push(strs[i]);
    } else {
      map.set(sorted, [strs[i]]);
    }
  }

  for (let [key, value] of map) {
    result.push(value);
  }

  return result;
};

// Top K Frequent Elements // work
var topKFrequent = function (nums, k) {
  let map = new Map();
  let res = [];
  let bucket = Array.from({length: nums.length + 1}, () => []); // to create unique arrays
  console.log("bucket", bucket);
  // storing frequency of numbers in a map
  for (let n of nums) {
    map.set(n, map.has(n) ? 1 + map.get(n) : 1);
  }
  console.log("map", map);
  // Poppulate the bucket with numbers in frequency
  // as the index of the bucket
  for (const [key, value] of map.entries()) {
    bucket[value].push(key);
  }
  console.log("bucket", bucket);

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {
      for (let n of bucket[i]) {
        res.push(n);
        if (res.length === k) return res;
      }
    }
  }
};

// LONGEST CONSECUTIVE SEQUENCE
function longestConsecutive(nums) {
  const set = new Set(nums);
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (set.has(num - 1)) {
      continue;
    }

    let currentMax = 1;
    while (set.has(num + currentMax)) {
      currentMax++;
    }

    if (currentMax > max) {
      max = currentMax;
    }
  }

  return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// IS VALID SUDOKU

function isValidSudoku(board) {
  const rows = {};
  const cols = {};
  const squares = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];
      if (num === ".") {
        continue;
      }
      const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      if (!cols[c]) {
        cols[c] = new Set();
      }
      if (!rows[r]) {
        rows[r] = new Set();
      }
      if (!squares[grid]) {
        squares[grid] = new Set();
      }

      if (rows[r].has(num) || cols[c].has(num) || squares[grid].has(num)) {
        return false;
      }

      cols[c].add(num);
      rows[r].add(num);
      squares[grid].add(num);
    }
  }

  return true;
}
