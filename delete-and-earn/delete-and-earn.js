/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let arr = new Array(10001).fill(0);
    
    for(let i =0; i < nums.length ; i++){
        arr[nums[i]] += nums[i]
    }
    
    
    let dp = new Array(10001).fill(0);
    
    for(let i = 1; i < 10001; i++){
        dp[i] = Math.max(dp[i-1], (dp[i-2] || 0) + arr[i])
    }
    console.log(dp)
    
    return Math.max(...dp) == -Infinity ? 0 : Math.max(...dp)
};