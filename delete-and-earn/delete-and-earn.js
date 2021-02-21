/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    
    let counter = new Array(10001).fill(0)
    
    for(let i =0; i < nums.length; i++){
        counter[nums[i]] +=nums[i]
    }
    
     console.log(counter)
    let dp= new Array(10001).fill(0);
    
    for(let i= 1; i < 10001; i++){
        dp[i] = Math.max(dp[i-1], (dp[i-2]||0) + counter[i])
    }
    console.log(dp)
    
    return Math.max(...dp)
};