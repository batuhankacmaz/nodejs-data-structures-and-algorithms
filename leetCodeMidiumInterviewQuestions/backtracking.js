const letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  // global result
  const result = [];

  //alpha hash map
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

  // dfs recursive helper
  const dfs = (i, digits, slate) => {
    console.log("out for -->", i);
    // base case
    if (i === digits.length) {
      result.push(slate.join(""));
      return;
    }

    // dfs recursive case
    let chars = alpha[digits[i]];

    for (let char of chars) {
      slate.push(char);
      console.log("slate", slate);
      console.log("in for -->", i);
      dfs(i + 1, digits, slate);
      console.log("in for 2 -->", i);

      slate.pop();
    }
  };

  dfs(0, digits, []);

  return result;
};

console.log(letterCombinations("23"));

var productExceptSelf = function (nums) {
  let res = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= product;
    product *= nums[i];
  }

  return res;
};

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let midium = Math.floor(right + left / 2);

    if (nums[midium] === target) return midium;
    if (nums[midium] >= nums[left]) {
      if (nums[left] <= target && target <= nums[midium]) right = midium - 1;
      else left = midium + 1;
    } else {
      if (nums[midium] <= target && target <= nums[right]) left = midium + 1;
      else right = midium - 1;
    }
  }
  return -1;
};

const threeSum = function (numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] === sortedNumbers[i - 1]) continue;
    let target = sortedNumbers[i] * -1;
    let subResult = twoSum(target, i + 1, sortedNumbers);
    result.push(...subResult);
  }

  return result;
};

const twoSum = function (target, left, nums) {
  let r = nums.length - 1;
  let l = left;
  let result = [];
  while (l < r) {
    let leftItem = nums[l];
    let rightItem = nums[r];
    if (leftItem + rightItem > target) {
      r--;
    } else if (leftItem + rightItem < target) {
      l++;
    } else {
      result.push([target * -1, leftItem, rightItem]);
      while (l < r && nums[l] === nums[l + 1]) l++;
      while (l < r && nums[r] === nums[r - 1]) r--;
      l++;
      r--;
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let leftItem = height[left];
    let rightItem = height[right];
    let maxArea = (right - left) * Math.min(leftItem, rightItem);
    if (rightItem > leftItem) left++;
    else right--;
    result = Math.max(result, maxArea);
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
