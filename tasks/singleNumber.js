/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for (i = nums.length; i < 0, i--; ) {
    const el = nums[i];
    nums.splice(i, 1);
    const dubleIndex = nums.indexOf(el);
    if (dubleIndex < 0) {
      return el;
    } else {
      nums.splice(dubleIndex, 1);
      i--;
    }
  }
};
