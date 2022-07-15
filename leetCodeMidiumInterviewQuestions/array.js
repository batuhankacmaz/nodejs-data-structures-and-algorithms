// 3SUM
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let target = nums[i] * -1;
    let subResult = twoSum(i + 1, target, nums);
    result.push(...subResult);
  }

  return result;
};

const twoSum = function (j, target, nums) {
  let k = nums.length - 1;
  let result = [];

  while (j < k) {
    let leftVal = nums[j];

    let rightVal = nums[k];
    if (leftVal + rightVal > target) {
      k--;
    } else if (leftVal + rightVal < target) {
      j++;
    } else {
      result.push([target * -1, leftVal, rightVal]);
      while (j < k && nums[j] === nums[j + 1]) j++;
      while (j < k && nums[k] === nums[k - 1]) k--;
      j++;
      k--;
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//------------------------------------------------------------------------------------------------

// SET MATRIX ZEROES
const setZeroes = function (matrix) {
  const zerosA = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) zerosA.push([r, c]);
    }
  }
  for (let address of zerosA) {
    let row = address[0];
    let col = address[1];
    setZeros(row, col, matrix);
  }
  return matrix;
};

const setZeros = function (r, c, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][c] = 0;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    matrix[r][i] = 0;
  }
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

// --------------------------------------------------------------------------------

const groupAnagrams = function (strs) {
  const sortedStrs = strs.map((word) => word.split("").sort().join(""));
  const hash = {};

  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedStrs[i]]) {
      hash[sortedStrs[i]] = [strs[i]];
    } else {
      hash[sortedStrs[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
};

// --------------------------------------------------------------------------------

// LONGEST SUBSTRING WITHOUT REPETATION

// Sliding window pattern
const lengthOfLongestSubstring = function (str) {
  let max = 0;
  let windowStart = 0;
  const soFar = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    soFar[rightChar] = soFar[rightChar] + 1 || 1;

    while (soFar[rightChar] > 1) {
      let leftChar = str[windowStart];

      if (soFar[leftChar] > 1) {
        soFar[leftChar]--;
      } else {
        delete soFar[leftChar];
      }

      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));

// LONGEST PALINDROMIC SUBSTRING

const getDrome = (left, right, s) => {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) break;
    left--;
    right++;
  }

  return [left + 1, right];
};

const longestPalindrome = function (s) {
  let max = [0, 1];
  for (let i = 0; i < s.length; i++) {
    let even = getDrome(i - 1, i, s);
    let odd = getDrome(i - 1, i + 1, s);
    let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
  }

  return s.slice(max[0], max[1]);
};

// INCREASING TRIPLET SUBSEQUNCE

const increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;
  for (let curr of nums) {
    if (curr > first && curr > second) {
      return true;
    }
    if (curr > first) {
      second = curr;
    } else {
      first = curr;
    }
  }
  return false;
};

// COUNT AND SAY

// 1  1
// 2 one 1 = 11
// 3 two 1 = 21
// 4 one two one one = 1211
// 5 one 1 one 2 two 1 = 111211
const countAndSay = function (n) {
  let result = "1";
  if (n === 1) return result;
  while (n-- > 1) {
    let next = "";
    let count = 1;
    let current = result[0];
    for (let i = 1; i < result.length; i++) {
      if (result[i] !== current) {
        next += `${count}${current}`;
        current = result[i];
        count = 1;
      } else {
        count += 1;
      }
    }
    next += `${count}${current}`;
    result = next;
  }

  return result;
};
