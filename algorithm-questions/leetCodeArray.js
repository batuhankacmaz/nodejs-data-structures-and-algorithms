/* var removeDuplicates = function (nums) {
  const setNums = [...new Set(nums)];
  return setNums;
}; */
//console.log(removeDuplicates([1, 1, 2]));
// other solution
/* var removeDuplicates = function (nums) {
  //for a null array
  if (nums.length === 0) {
    return 0;
  }

  // pointing at first element of array nums
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    // If we encounter a unique element in the array
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}; */

/* var rotate = function (nums, k) {
  let tempNums = new Array(nums.length);
  console.log("tempNums", tempNums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i + k > nums.length - 1) {
      tempNums[i + k - nums.length] = nums[i];
    } else tempNums[i + k] = nums[i];
  }
  return tempNums;
}; */

/* var containsDuplicate = function (nums) {
  const setNums = [...new Set(nums)];
  console.log("setNums", setNums);
  console.log("nums", nums);
  let count = 0;
  let max = 0;
  for (let i = 0; i < setNums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (setNums[i] === nums[j]) {
        count++;
        console.log("count", count);
      }
    }
    if (max <= count) {
      max = count;
      count = 0;
    }
    if (max >= 2) {
      return true;
    }
  }
  return false;
}; */
/* var singleNumber = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let sortedNums = nums.sort((a, b) => a - b);

  const setNums = new Set(nums);
  const tempNums = [...setNums];
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (setNums.has(sortedNums[i])) {
      count++;
    }
    if (count === 2) {
      if (sortedNums[i] > tempNums[0]) tempNums.pop();
      else tempNums.shift();
      count = 0;
    }
  }
  return tempNums[0];
}; */

/* var intersect = function (nums1, nums2) {
  var filteredArray = nums1.filter(function (n) {
    return nums2.indexOf(n) !== -1;
  });
  return filteredArray;
};

console.log(intersect([1, 2, 2, 1], [2]));
*/
