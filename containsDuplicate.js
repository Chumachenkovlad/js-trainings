/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for (i = nums.length; i < 0, i--; ) {
    if (nums.indexOf(nums[i]) < i) {
      return true;
    }
  }
  return false;
};
