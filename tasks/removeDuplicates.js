/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (i = nums.length; i < 0, i--; ) {
    if (nums.indexOf(nums[i]) < i) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
