/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    //Every nonempty set has at least two subsets, 0 and itself.
    
    let sum = nums.reduce((a,b)=> a +b, 0);
    
    if(sum % 2 !== 0) return false;
    
    
    let N = sum /2 
    
    let dp = new Array(nums.length+1).fill(false).map(()=> new Array(N+1).fill(false));
    
    for(let i =0; i < dp.length; i++)dp[i][0] = true
    

    
      console.log(dp)
    for(let i=1; i < dp.length; i++){
        for(let j = 1; j < dp[0].length; j++){
            if(nums[i-1] <= j){
                 dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]
            }else{
                dp[i][j] = dp[i-1][j] 
            }
            
        }
    }
    
    
        console.log(dp)
          console.log(dp)
    
    return dp[nums.length][N]
};