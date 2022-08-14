/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let startIndex = -1;
  let endIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[start] === target) {
      startIndex = start;
    } else {
      start++;
    }
    if (nums[end] === target) {
      endIndex = end;
    } else {
      end--;
    }
  }
  return [startIndex, endIndex];
};
