/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
        let dp =  new Array(10001).fill(0)
    
    for(let i =0; i < nums.length; i++){
        dp[nums[i]] += nums[i]
    }
    
    let max = 0;
    
    for(let i =1; i < 10001; i++){
        
        let find = Math.max(dp[i-1], (dp[i-2] || 0) + dp[i])
        dp[i] = Math.max(dp[i],find)
        max = Math.max(dp[i])
    }
    
    return max
};