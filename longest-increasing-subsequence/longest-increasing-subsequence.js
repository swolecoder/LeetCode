/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    let n = nums.length;
    let dp = new Array(n).fill(1);
    /*
    
    [10,9,2,5,3,7,101,18]
    
      [1,1,1,2,2,3,4,1]
      
          
    */
    let max = 1;
    
    for(let i =1; i < n; i++){
        for(let j = 0; j <= i ; j++){
            if(nums[j] < nums[i]){
              dp[i] = Math.max(dp[i], dp[j]+1);
                max = Math.max(dp[i], max)
            }
        }
    }
    
    return max
};