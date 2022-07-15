// all unique character

/* let areAllUniqueChar = (str) => {
  if (str.length < 2) return true;
  else {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  }
};

console.log(areAllUniqueChar("emir sal"));

let isPermute = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  else {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 === sortedStr2;
  }
};

console.log(isPermute("malemir", "emirmal"));

// emir naber iyi misin
// emir%20naber%20iyi%20misin
var urlify = (str) => {
  let strArr = str.split("");
  let pointer = 0;
  while (pointer < str.length) {
    if (strArr[pointer] === " ") {
      for (let i = str.length - 1; i >= pointer + 3; i--) {
        strArr[i] = strArr[i - 2];
      }
      strArr[pointer] = "%";
      strArr[pointer + 1] = "2";
      strArr[pointer + 2] = "0";
      console.log(strArr, strArr.length);
    }
    pointer++;
  }
  return strArr.join("");
};

console.log(urlify("Batu kacmaz nasilsin", 20));

let oneAway = function (str1, str2) {
  let isOneMissing = function (firstString, secondString) {
    if (firstString.length !== secondString.length - 1) {
      return false;
    } else {
      let firstLength = firstString;
      let mulligan = false;
      let fp = 0;
      let sp = 0;
      while (fp < firstLength) {
        if (firstString[fp] !== secondString[sp]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
            sp++;
          }
        } else {
          fp++;
          sp++;
        }
      }
      return true;
    }
  };
  let isOneDiff = function (firstString, secondString) {
    if (firstString.length !== secondString.length) {
      return false;
    } else {
      let firstLength = firstString.length;
      let mulligan = false;
      let fp = 0;
      let sp = 0;
      while (fp < firstLength) {
        if (firstString[fp] !== secondString[sp]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
          }
        }
        fp++;
        sp++;
      }
      return true;
    }
  };
  return (
    isOneMissing(str1, str2) ||
    isOneMissing(str2, str1) ||
    isOneDiff(str1, str2)
  );
};

console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);

let strComp = function (str) {
  var comperresd = "";
  var currentChar = "";
  var currentCounter = "";
  var maxCount = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== currentChar) {
      console.log(currentChar, str[i], i);
      comperresd += currentChar + currentCounter;
      maxCount = Math.max(maxCount, currentCounter);
      currentChar = str[i];
      currentCounter = 1;
    } else {
      currentCounter++;
    }
  }
  comperresd += currentChar + currentCounter;
  maxCount = Math.max(maxCount, currentCounter);
  return maxCount === 1 ? str : comperresd;
};

console.log(strComp("aaaabbbbaaaa"));

let isRotated = function (string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  } else {
    let expandedString1 = string1 + string1;
    return expandedString1.indexOf(string2) !== -1;
  }
};

console.log(isRotated("waterbottle", "erbottlewat"), true);
console.log(isRotated("waterbottle", "erbotlewatt"), false);
console.log(isRotated("aaata", "aataa"), true); */

function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);
  for (let row of matrix) {
    row.reverse();
  }
}

var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1],
];

console.log("before:");
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log("after:");
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
