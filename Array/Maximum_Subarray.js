// Naive solution
var maxSubArray = function (nums) {
  const len = nums.length;
  let sum = 0;
  let max = -Number.MAX_VALUE;
  for (let i = 0; i < len; i++) {
    sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

// Dynamic Programming

function maxSubArray(nums) {
  const len = nums.length;
  let max = nums[0];
  for (let i = 1; i < len; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    if (nums[i] > max) max = nums[i];
  }
  return max;
}

// Sum of maximum two numbers in array!
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
    if (nums[0] > 0 && nums[1] > 0) return nums[0] + nums[1];
    return Math.max(...nums);
  } else {
    const maxNum = Math.max(...nums);
    const copiedArray = nums.filter((num) => num < maxNum && num > 0);
    const secondMaxNum = Math.max(...copiedArray);
    if (copiedArray.length === 0) return maxNum;
    return maxNum + secondMaxNum;
  }
};
