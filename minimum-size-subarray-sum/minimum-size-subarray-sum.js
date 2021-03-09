/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
  let max = Infinity;
  let start = 0;

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      max = Math.min(max, i - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  return max == Infinity ?0  : max;
};