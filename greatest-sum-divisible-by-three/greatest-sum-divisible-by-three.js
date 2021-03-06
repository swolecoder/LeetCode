/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let dp = new Array(3).fill(0);
    
    
    for(let i = 1; i <= nums.length; i++){
        let pre = [...dp];
        for(let j of [0,1,2]){
            let sum = nums[i-1] + pre[j];
            
            dp[sum % 3] = Math.max(dp[sum % 3], sum)
        }
    }
    
    return dp[0]
};