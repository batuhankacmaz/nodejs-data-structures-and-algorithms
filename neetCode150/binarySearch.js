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
