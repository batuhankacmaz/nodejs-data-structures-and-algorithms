//PALINDROME
const ALPHA_NUM = /^[a-zA-Z0-9]$/;

function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !ALPHA_NUM.test(s[l])) {
      l++;
    }
    while (l < r && !ALPHA_NUM.test(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// TWO SUM ||

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let leftItem = numbers[left];
    let rightItem = numbers[right];

    if (leftItem + rightItem > target) {
      right--;
    } else if (leftItem + rightItem < target) {
      left++;
    } else {
      if (leftItem === rightItem) {
        continue;
      }
      return [left + 1, right + 1];
    }
  }
  return [-1, -1];
};

// CONTAINER WITH MOST WATER

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let leftItem = height[left];
    let rightItem = height[right];
    console.log("rightItem", rightItem);
    console.log("leftItem", leftItem);
    let currentMax = (right - left) * Math.min(leftItem, rightItem);
    console.log(currentMax);
    if (rightItem > leftItem) {
      left++;
    } else {
      right--;
    }
    max = Math.max(max, currentMax);
  }
  return max;
};

console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
