/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let result = [];
  for (let i = 0; i < k; i++) {
    let popedItem = nums.pop();
    result.unshift(popedItem);
  }
  return [...result, ...nums];
};

rotate([1, 2, 3, 4, 5, 6, 7], 5);
