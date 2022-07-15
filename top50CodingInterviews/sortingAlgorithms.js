/* 
For technical interviews, it is very important to understand what does the sorting algorithms do, what differentiates them from each other. They are many sorting algorithms each with their own advantages and disadvantages.

Insertion Sort : Time complexity is O(n^2) but the sort is very efficient when n is very small.
Merge Sort : Performance is O(nlogn) in worst case and average case but takes extra space of O(n).
Quick Sort : Performance is O(nlogn) in average case but can go to O(n^2) in worst case. Recursive implementation takes O(logn) space.
Heap Sort : Performance is O(nlogn) in average case with no extra space, but it is in-place sorting.
*/

//insert sort look the right side to element if element
// is less than initialize then swap

//bubble sort compare every two element

//Merge sort
// Quick sort

// Select sort select first one if smaller swap

function swap(items, left, right) {
  var temp = items[left];
  items[left] = items[right];
  items[right] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)]; //middle element
  let tempLeft = left;
  let tempRight = right;
  while (tempLeft <= tempRight) {
    while (items[tempLeft] < pivot) {
      tempLeft++;
    }
    while (items[tempRight] > pivot) {
      tempRight--;
    }
    if (tempLeft <= tempRight) {
      swap(items, tempLeft, tempRight); //sawpping two elements
      tempLeft++;
      tempRight--;
    }
  }
  return tempLeft;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
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
let items = [7, 4, 5, 3, 6, 1];
var sortedArray = quickSort(items, 0, items.length - 1);

console.log("sorted Array", sortedArray); //prints [2,3,5,6,7,9]

// insertion sort
function insertionSort(arr, n) {
  let i, key, j;

  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
}

function printArray(arr, n) {
  let i;
  let result = "";
  for (i = 0; i < n; i++) {
    result += arr[i] + " ";
  }
  console.log(result);
}

let arr = [12, 11, 13, 5, 6];
let n = arr.length;
insertionSort(arr, n);
printArray(arr, n);

// MergeSort

function merge(left, right) {
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

function mergeSort(arr) {
  const half = Math.floor(arr.length / 2);

  if (arr.length <= 1) {
    return arr;
  }
  const left = arr.splice(0, half);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}

let arrMerge = [12, 11, 13, 5, 6];
console.log(mergeSort(arrMerge));

// Implement bucket sort
function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  // Declaring vars
  var i,
    minValue = array[0],
    maxValue = array[0],
    bucketSize = bucketSize || 5;

  // Setting min and max values
  array.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Pushing values to buckets
  array.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
      currentVal
    );
  });

  // Sorting buckets
  array.length = 0;

  allBuckets.forEach(function (bucket) {
    insertionSort(bucket);
    bucket.forEach(function (element) {
      array.push(element);
    });
  });

  return array;
}

let arrBucket = [12, 11, 13, 5, 6];
console.log(bucketSort(arrBucket));

let countingSort = (arr, min, max) => {
  let i = min,
    j = 0,
    len = arr.length,
    count = [];
  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < len; i++) {
    count[arr[i]] += 1;
  }
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }
  return arr;
};

let arrCounting = [12, 11, 13, 5, 6];
console.log(countingSort(arrCounting, 3, 15));
