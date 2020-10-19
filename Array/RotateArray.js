/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  const diff = len - k;
  const splicedList = [...nums].splice(0, k + 1);
  const restList = [...nums].slice(diff);
  return [...restList, ...splicedList];
};
rotate([1, 5, 9, 6, 7, 4, 56, 5], 4);
