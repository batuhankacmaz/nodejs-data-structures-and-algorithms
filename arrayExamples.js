// --------------------------------------1-----------------------------------

// find the missing value in array 1 to 100
//need to inputs first array second how many number

/* let missingValue = function (array, number) {
  let set = new Set();
  let lastSet = new Set();
  let count = 0;
  for (let i = 1; i <= number; i++) {
    set.add(i);
  }

  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      set.delete(array[i]);
      count++;
    }
  }
  console.log(`${set.size} missing number has. These are `);
  return set.values();
};

console.log(missingValue([1, 2, 4, 5], 6));
console.log(missingValue([1, 2, 3, 4, 5], 10)); */

// --------------------------------------2-----------------------------------
// remove duplicated
/* function removeDuplicates(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let result = new Array(sortedArray.length);
  let previous = sortedArray[0];
  result[0] = previous;

  for (let i = 1; i < array.length; i++) {
    if (previous === sortedArray[i]) {
      result[i] = 0;
    } else {
      result[i] = sortedArray[i];
    }
    previous = sortedArray[i];
  }
  console.log("Before removed sortedArray", sortedArray);
  console.log("Removed duplicated elements", result);
}
removeDuplicates([3, 2, 12, 4, 9, 2]);
removeDuplicates([3, 2, 4, 6, 8, 10, 22, 22, 14, 9, 12, 4, 9, 2]); */

// --------------------------------------3-----------------------------------

// find largest and smallest number in array
/* function findLargestAndSmallest(array) {
  let largest = 0;
  let smallest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  console.log("largest:", largest);
  console.log("smallest:", smallest);
}
findLargestAndSmallest([3, 2, 4, 6, 8, 10, 22, 22, 14, 9, 12, 4, -9, 2]); */

// --------------------------------------4-----------------------------------

//find all pairs in array sum is equal to given number

/* let resultAllPairsSum = function (array, number) {
  let map = new Map();
  let firstElement = array[0];
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], i);
  }
  for (let i = 0; i < array.length; i++) {
    if (map.get(number - array[i]) === i) {
      continue;
    }
    if (map.get(number - array[i])) {
      return [number - array[i], array[i]];
    }
  }
  return -1;
};
console.log(resultAllPairsSum([1, 2, 3], 6)); */

// --------------------------------------5-----------------------------------

// find first non repeated char

/* let firstNonRepeatedChar = function (word) {
  let onlyNonRepeatedCharWord = [...new Set(word.split(""))];
  let charMap = new Map();
  for (let i = 0; i < onlyNonRepeatedCharWord.length; i++) {
    charMap.set(onlyNonRepeatedCharWord[i], 0);
  }
  for (let i = 0; i < word.length; i++) {
    if (charMap.get(word[i]) || charMap.get(word[i]) === 0) {
      charMap.set(word[i], charMap.get(word[i]) + 1);
    }
  }
  for (let i = 0; i < onlyNonRepeatedCharWord.length; i++) {
    if (charMap.get(onlyNonRepeatedCharWord[i]) === 1) {
      return onlyNonRepeatedCharWord[i];
    }
  }
  return -1;
};

console.log(firstNonRepeatedChar("sevdalardandsasfre")); */

// --------------------------------------6-----------------------------------

//****************************************************************************
//****************************************************************************

//sort an integer array in place using the QuickSort algorithm

/* function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)]; //middle Element
  i = left; //left pointer
  j = right; //right pointer

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //swap two elements
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(items, left, right) {
  var index;

  if (items.length > 1) {
    index = partition(items, left, right); // index returned from partition

    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }

  return items;
}

// first call to quick sort
var items = [5, 3, 7, 6, 2, 9];
var result = quickSort(items, 0, items.length - 1);
console.log(result); */

//****************************************************************************
//****************************************************************************

// --------------------------------------7-----------------------------------

// Reverse array
/* let reversedArray = function (array) {
  let tempArray = [];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    tempArray.push(array.pop());
  }
  return tempArray;
};

console.log(reversedArray([1, 2, 3, 4, 5, 6, 7, 8])); */

// --------------------------------------8-----------------------------------

//missing elements in duplecated array

/* function findElements(array, n) {
  let findMap = new Map();
  let finalArray = [];
  for (let i = 1; i <= n; i++) {
    findMap.set(i, 0);
  }
  for (let i = 0; i < array.length; i++) {
    if (findMap.has(array[i])) {
      findMap.set(array[i], findMap.get(array[i]) + 1);
    }
  }
  for (let i = 1; i <= n; i++) {
    if (findMap.get(i) === 0) {
      finalArray.push(i);
    }
  }
  return finalArray;
}

const missingValue = findElements([1, 1, 2, 3, 4, 3, 5, 8, 4], 10);
console.log(missingValue); */
