/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    
 let missing = []
  
    for (let i = -1; i < nums.length; i++) {
        let lo = nums[i] === undefined ? lower - 1 : nums[i]
        let hi = nums[i + 1] === undefined ? upper + 1 : nums[i + 1]
        switch (hi - lo) {
            case 0:
                continue
            case 1:
                continue
            case 2:
                missing.push(`${lo + 1}`)
                break
            default:
                missing.push(`${lo + 1}->${hi - 1}`)
        }
    }
    
    return missing
};