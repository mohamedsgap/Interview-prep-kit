const twoSum = function (nums, target) {
  let result = {};
  let i;
  for (i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const nextNumber = target - currentNumber;
    if (result[nextNumber] !== undefined) {
      return [i, result[nextNumber]].sort();
    }
    result[currentNumber] = i;
  }
};
