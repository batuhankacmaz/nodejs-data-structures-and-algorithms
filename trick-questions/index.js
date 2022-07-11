// rotate array
/* var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let last = nums.pop();
    nums.unshift(last);
  }
}; */

/* var intersect = function (nums1, nums2) {
  let result = [];
  const map1 = arrayToMap(nums1);
  const map2 = arrayToMap(nums2);
  const set = new Set(nums1.filter((num) => nums2.indexOf(num) !== -1));
  set.forEach((item) => {
    if (map1.get(item) > map2.get(item)) {
      for (let i = 0; i < map2.get(item); i++) {
        result.push(item);
      }
    } else {
      for (let i = 0; i < map1.get(item); i++) {
        result.push(item);
      }
    }
  });
  return result;
};

function arrayToMap(nums) {
  let map = new Map();

  if (nums.length < 1) {
    return null;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  return map;
}

console.log(intersect([3, 1, 1, 2], [1, 1])); */

/* var plusOne = function (digits) {
  let number = digits.join("");
  number = parseInt(number) + 1;
  let arrayToNumber = number.toString().split("");
  return arrayToNumber;
}; */

//console.log(plusOne([1, 2, 3, 4]));

/* var plusOne = function (digits) {
  var i = digits.length - 1;
  var val = 0;
  var carry = 1;
  while (i >= 0 && carry) {
    val = digits[i] + carry;
    carry = Math.floor(val / 10);
    console.log("carry", carry);
    digits[i] = val % 10;
    i--;
  }
  if (carry) digits.unshift(carry);
  return digits;
}; */

//console.log(plusOne([5, 9, 4, 8]));
/* var moveZeroes = function (nums) {
  let tempNums = [];
  let count = 0;
  console.log("nums", nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      tempNums.push(nums[i]);
    }
  }
  for (let i = 0; i < count; i++) {
    tempNums.push(0);
  }
  nums = [...tempNums];
  return nums;
}; */

//console.log(moveZeroes([1, 0, 2, 3, 0, 1]));

/* var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 0, 1])); */

var rotate = function (matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }
  for (let row of matrix) {
    row.reverse();
  }
};

var reverseString = function (s) {
  let current = 0;
  let middleLength = Math.floor(s.length / 2);
  let temp;
  for (let i = s.length - 1; i >= middleLength; i--) {
    if (i + current === s.length - 1) {
      temp = s[current];
      s[current] = s[i];
      s[i] = temp;
      current++;
    }
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o", "h", "e", "l", "l", "o"]));

/* var reverse = function (x) {
  if (Math.abs(x) > Math.pow(2, 31)) {
    return 0;
  }
  let integerArray = x.toString().split("");
  let result = "";
  if (integerArray[0] === "-") {
    for (let i = integerArray.length - 1; i > 0; i--) {
      result += integerArray[i];
    }
    result = "-" + result;
  } else {
    for (let i = integerArray.length - 1; i >= 0; i--) {
      result += integerArray[i];
    }
  }
  if (Math.abs(parseInt(result) > Math.pow(2, 31))) {
    return 0;
  } else return parseInt(result);
}; */

/* var reverse = function (x) {
  if (x < 0) return -reverse(-x);

  var reversedInt = 0;

  while (x > 0) {
    var a = x % 10;
    x = Math.floor(x / 10);

    //Should no larger than Math.floor(Number.MAX_VALUE/10)
    if (reversedInt >= 214748365) return 0;
    reversedInt = reversedInt * 10 + a;
  }

  return reversedInt;
};

console.log(reverse(2147483648)); */

/* var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let [key, value] of map) {
    console.log("map.get(key)", value);
    if (value === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};

console.log(firstUniqChar("aadadaad")); */

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  } else {
    let maps = doMap(s);
    let mapt = doMap(t);
    for (let [key, value] of maps) {
      if (!mapt.has(key) || mapt.get(key) !== value) {
        return false;
      }
    }
    return true;
  }
};

function doMap(t) {
  let map = new Map();

  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      map.set(t[i], 1);
    } else {
      map.set(t[i], map.get(t[i]) + 1);
    }
  }
  return map;
}

var isPalindrome = function (s) {
  let str = s.match(/[A-Za-z0-9]/g);
  if (str === null) {
    return true;
  }

  str = str.join("").toLowerCase();
  console.log(str);
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  console.log(temp);
  if (temp === str) return true;
  else return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

var myAtoi = function (s) {
  let set = new Set();
  let number = "";
  let negative = false;
  let j = 0;
  for (var i = 0; i < 10; i++) {
    set.add(i);
  }

  console.log(set);
  while (s[j]) {
    if (s[j] === "-") {
      negative = true;
    }
    if (set.has(parseInt(s[j]))) {
      number += s[j];
      if (!set.has(parseInt(s[j + 1]))) {
        if (number) if (negative) return parseInt("-" + number);
        return parseInt(number);
      }
    }
    j++;
  }
  return parseInt(number);
};

console.log(myAtoi("Na3ber 42"));
console.log(parseInt("-0032"));

var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  if (needle === haystack) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
};

console.log(strStr("babba", "bb"));

var deleteNode = function (node) {
  if (!this.head) {
    return false;
  }
  let current = this.head;

  if (node === this.head.val) {
    this.head = this.head.next;
  } else {
    while (current.next) {
      let temp = current.next;
      if (temp.val === node) {
        current.next = temp.next;
      }
      current = current.next;
    }
  }
};
