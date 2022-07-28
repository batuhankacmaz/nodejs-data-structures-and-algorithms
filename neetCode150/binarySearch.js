var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  while (left < right) {
    let midium = Math.floor((left + right) / 2);
    if (nums[midium] > nums[left]) {
      min = Math.min(min, nums[left]);
      left = midium + 1;
    } else {
      min = Math.min(min, nums[midium]);
      right = midium - 1;
    }
  }
  return min;
};

// SEARCH 2D MATRIX

function searchMatrix(matrix, target) {
  const width = matrix[0].length;
  const height = matrix.length;
  let i = 0;
  let j = height * width - 1;

  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    const r = Math.floor(m / width);
    const c = m % width;

    if (matrix[r][c] === target) {
      return true;
    }

    if (matrix[r][c] < target) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }
  return false;
}

// COCO EAT BANANAS
function minEatingSpeed(piles, h) {
  let l = 0;
  let r = Math.max.apply(Math, piles);

  if (piles.length === h) {
    return r;
  }

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / m);
    }
    if (hours > h) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));

// SEARCH IN ROTATED SORTED ARRAY

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Checking if the left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // thus target is in the left
        right = mid - 1;
      } else {
        // thus target is in the right
        left = mid + 1;
      }
    }

    // Otherwise, the right side is sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // thus target is in the right
        left = mid + 1;
      } else {
        // thus target is in the left
        right = mid - 1;
      }
    }
  }

  return -1;
};

// FIND MINIMUM IN ROTATED SORTED ARRAY

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
