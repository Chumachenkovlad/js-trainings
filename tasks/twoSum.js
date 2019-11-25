/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let fIndex = 0; fIndex < nums.length; fIndex++) {
    for (let sIndex = 0; sIndex < nums.length; sIndex++) {
      if (fIndex !== sIndex && nums[fIndex] + nums[sIndex] === target) {
        return [fIndex, sIndex];
      }
    }
  }
};
