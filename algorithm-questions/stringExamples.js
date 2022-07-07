// --------------------------------------1-----------------------------------

// Print dublicate characters from String

/* let duplicatedCharacters = function (str) {
  let dublicatedMap = new Map();
  let dublicatedSet = [...new Set(str.split(""))];
  let finalArray = [];
  for (let i = 0; i < str.length; i++) {
    if (!dublicatedMap.has(str[i])) {
      dublicatedMap.set(str[i], 1);
    } else {
      dublicatedMap.set(str[i], dublicatedMap.get(str[i]) + 1);
    }
  }

  for (let i = 0; i < dublicatedSet.length; i++) {
    if (dublicatedMap.get(dublicatedSet[i]) >= 2) {
      finalArray.push(dublicatedSet[i]);
    }
  }
  return finalArray;
};

console.log(duplicatedCharacters("merhabab")); */

//for in object icin kullan {a: 1, b:2}

// --------------------------------------2-----------------------------------

// Find to string or anagram or not

/* let isAnagram = function (str1, str2) {
  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return false;
  }

  const charMap1 = getCharMap(str1);
  const charMap2 = getCharMap(str2);

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }
  return true;
};

function getCharMap(string) {
  let charMap = {};

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

console.log(isAnagram("at", "at")); */

// --------------------------------------3-----------------------------------

// first non repeated chac in strings

/* let firstNonRepeated = function (str) {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = charMap[str[i]] + 1 || 1;
  }
  console.log("charMap", charMap);
  for (let char in charMap) {
    console.log("char", char);
    if (charMap[char] === 1) {
      return char;
    }
  }
  return -1;
};
console.log(firstNonRepeated("mmeerrhhaba")); */

// --------------------------------------4-----------------------------------

//****************************************************************************

//how to reverse a given string using recursion

/* function recursiveReverse(str) {
  if (str.length < 2) {
    return str;
  }
  return (
    str[str.length - 1] + recursiveReverse(str.substring(0, str.length - 1))
  );
}

const final = recursiveReverse("batu");
console.log(final); */

// --------------------------------------5-----------------------------------

// Check if a String is a number

/* let isNumber = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (!(0 < str.charAt(i) && str.charAt(i) < 9)) {
      return false;
    }
  }
  return true;
};
console.log(isNumber("1234")); */

// --------------------------------------6-----------------------------------

// Counting vowels consonants
/* function countLetters(string) {
  let map = new Map();
  map.set("a", 0);
  map.set("e", 0);
  map.set("i", 0);
  map.set("o", 0);
  map.set("u", 0);
  let consonants = 0;

  for (let i = 0; i < string.length; i++) {
    if (map.has(string.charAt(i))) {
      map.set(string.charAt(i), map.get(string.charAt(i)) + 1);
    } else {
      consonants++;
    }
  }
  console.log("a", map.get("a"));
  console.log("e", map.get("e"));
  console.log("i", map.get("i"));
  console.log("o", map.get("o"));
  console.log("u", map.get("u"));
  console.log("consonants", consonants);
}

countLetters("selamunaleykum"); */

// --------------------------------------7-----------------------------------

// How to Count Occurrences of a Character in a String

/* let countOccurrences = function (str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char) {
      count++;
    }
  }
  return count;
};

console.log(countOccurrences("seeelamunaleykuma", "e")); */

// --------------------------------------8-----------------------------------

//****************************************************************************

//Recursive
//Find all permutations of string

/* const stringPermutationsRecursive = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutationsRecursive(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

console.log(stringPermutationsRecursive("abc"));
console.log(stringPermutationsRecursive("*$*")); */

/* const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

console.log(stringPermutations("abc"));
console.log(stringPermutations("*$*")); */

//****************************************************************************

// --------------------------------------8-----------------------------------

//reverse word

/* let reverseWord = function (str) {
  if (str.length < 2) return str;
  let arrStr = str.split("");
  let finalArr = [];
  for (let i = 0; i < str.length; i++) {
    finalArr.push(arrStr.pop());
  }
  return finalArr.join("");
};
console.log(reverseWord("naber")); */

// --------------------------------------9-----------------------------------

//Palindrome word

/* let isPalindrome = function (word) {
  if (word.length < 3) return false;
  let arrayWord = word.split("");
  let finalWord = [];
  for (let i = 0; i < word.length; i++) {
    finalWord.push(arrayWord.pop());
    if (arrayWord.length === 0) {
      finalWord = finalWord.join("");
    }
  }
  if (finalWord === word) {
    return true;
  } else return false;
};
console.log(isPalindrome("dallad")); */

// --------------------------------------10-----------------------------------

// Two String is a rotation of each other

function areRotations(str1, str2) {
  // There lengths must be same and str2 must be
  // a substring of str1 concatenated with str1.
  return str1.length == str2.length && (str1 + str1).indexOf(str2) != -1;
}
const final = areRotations("merhaba", "amerhab");
console.log(final);
