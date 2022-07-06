//longestCommonPrefix

/* let longestCommonPrefix = function (strs) {
  const firstString = strs.slice(0, 1)[0];
  const otherStrings = strs.slice(1, strs.length);
  console.log("otherStrings", otherStrings);

  if (!strs.length) {
    return "";
  }
  for (let i = 0; i < firstString.length; i++) {
    for (let s of otherStrings) {
      if (s[i] !== firstString[i]) {
        return s.slice(0, i);
      }
    }
  }

  return firstString;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); */

//Minimum Number of Operations to Convert Time

/* let convertTime = function (current, correct) {
  let [currentHour, currentMinutes] = splitHour(current),
    [correctHour, correctMinutes] = splitHour(correct);
  let diff = Math.abs(
    (currentHour - correctHour) * 60 + (currentMinutes - correctMinutes)
  );
  let res = 0;
  res += parseInt(diff / 60);
  diff %= 60;
  res += parseInt(diff / 15);
  diff %= 15;
  res += parseInt(diff / 5);
  diff %= 5;
  return res + diff;
};

const splitHour = (time) => {
  let splitted = time.split(":").map(Number);
  return splitted;
};

console.log(convertTime("18:45", "11:00")); */

let coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }
  let sorted = coins.sort(function (a, b) {
    return b - a;
  });
  let coinAmount = 0;
  let remainingAmount = amount;

  for (let i = 0; i < sorted.length; i++) {
    if (remainingAmount > 0) {
      coinAmount += parseInt(amount / sort[i]);
      remainingAmount %= sort[i];
      sorted.slice(1, sorted.length);
      if (sorted.length === 0 && remainingAmount !== 0) {
        return -1;
      }
    }
    if (remainingAmount === 0) {
      return coinAmount;
    }
  }
};

// Find long aritmatic
// 0 1 2 3 5 6 7 8 9 10
//0123 = 4 5678910 = 6 bigger is last one
/* var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;
  nums = [...new Set(nums)];
  nums = nums.sort((a, b) => a - b);

  let count = 0,
    max = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == 1) {
      count++;
      if (max < count) {
        max = count;
      }
    } else {
      count = 0;
    }
  }
  return max + 1;
}; */

// Two sum lest than on2
let twoSum = function (nums, target) {
  let map1 = new Map();
  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (map1.get(target - n) >= 0) {
      console.log("map", map1);
      return [map1.get(target - n), i];
    } else {
      map1.set(n, i); //use map to store the value and index position
    }
  }
};

console.log(twoSum([3, 2, 4], 6));

var threeSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let array = [];
  let right, left, sum, current;

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    current = i;
    left = i + 1;
    right = sortedNums.length - 1;

    while (left < right) {
      sum = sortedNums[current] + sortedNums[left] + sortedNums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        array.push([sortedNums[current], sortedNums[left], sortedNums[right]]);
        left++;
        while (sortedNums[left] == nums[left - 1] && left < right) left++;
      }
    }
  }
  return array;
};
