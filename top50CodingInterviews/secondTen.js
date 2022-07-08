// 11-) Print repeated characters of String

/* function repeatedKeys(str) {
  let map = new Map();
  let laststr = "";
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else map.set(str[i], map.get(str[i]) + 1);
  }
  map.forEach((value, key) => {
    if (value >= 2) {
      laststr += key + " ";
    }
  });
  console.log(laststr);
}

repeatedKeys("bbaatu"); */

// 4n + n

// 12-) Greatest common divisor

/* function GCD(number1, number2) { 
  if (number2 === 0) {
    return number1;
  }
  return GCD(number2, number1 % number2);
}

console.log(GCD(36, 30));
 */
// O(n)

// 13-) Squareroot of Number

/* function squareRoot(number, exponantion) {
  if (exponantion * exponantion === number) {
    return exponantion;
  }
  if (exponantion > number) {
    return -1;
  }
  return squareRoot(number, exponantion + 1);
}

console.log(squareRoot(225, 2)); */

// O(n)

// 14-) Reverse array

/* function reverseArray(array) {
  if (array == null || array.length < 2) {
    return;
  }

  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

let array = ["batu", "sevda", "emir", "ana"];
console.log(reverseArray(array)); */

// 3n + 1 -> O(n)

// 15-) Reverse word of sentences
/* function reverseWordOfSentences(sentence) {
  let words = sentence.split(" ");
  let reversedSentence = "";
  if (sentence.length === 0) {
    return;
  }

  for (let word = words.length - 1; word >= 0; word--) {
    reversedSentence += words[word] + " ";
  }
  return reversedSentence;
}
const sentence = "kaleye gecmeyen cimbomlu";
console.log(reverseWordOfSentences(sentence)); */

// n+3 -> O(n)

// 16-) isLeapYear

/* const isLeapYear = function (year) {
  if (year % 4 === 0) {
    return true;
  }
  return false;
};
console.log(isLeapYear(2000)); */

// O(1)

// 17-) Binary Search

/* let iterativeFunction = function (arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return true;
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};
function recursiveBinarySearch(arr, x, start, end) {
  if (arr.length < 1) {
    return false;
  }
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  console.log("mid", mid);
  if (arr[mid] === x) return true;
  if (arr[mid] > x) return recursiveBinarySearch(arr, x, start, mid - 1);
  else return recursiveBinarySearch(arr, x, mid + 1, end);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 12, 15];
console.log(iterativeFunction(array, 8));
console.log(recursiveBinarySearch(array, 15, 0, array.length - 1)); */

// binary search O(logn)

//18-) String Anagram
/* const isAnagram = function (str1, str2) {
  if (str1.lenght !== str2.lenght) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (!map1.has(str1[i])) {
      map1.set(str1[i], 1);
    } else {
      let element1 = map1.get(str1[i]);
      map1.set(str1[i], element1 + 1);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!map2.has(str2[i])) {
      map2.set(str2[i], 1);
    } else {
      let element2 = map1.get(str2[i]);
      map2.set(str2[i], element2 + 1);
    }
  }

  return isMapEqual(map1, map2);
};

const isMapEqual = function (map1, map2) {
  for (let [key, value] of map1) {
    let testItem = map2.get(key);

    if (testItem !== value || !map2.has(key)) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("abcdsa", "dcbads")); */

//19-) Desing a Vending Machine

//20-) Reverse a number

function reverseNumber(number) {
  let numberToString = number.toString();
  let reversedNumber = "";
  for (let i = numberToString.length - 1; i >= 0; i--) {
    reversedNumber += numberToString.charAt(i);
  }
  return parseInt(reversedNumber);
}

console.log(reverseNumber(12032));
