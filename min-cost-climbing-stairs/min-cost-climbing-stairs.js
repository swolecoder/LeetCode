/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
    
    let dp = new Array(cost.length).fill(0);
    let N = dp.length;
    console.log(dp)
    for(let i=2; i <=N; i++){
        console.log(cost[0], cost[i-1])
        dp[i] = Math.min(dp[i-2] +cost[i-2], dp[i-1]+cost[i-1])
    }
    console.log(dp)
    return dp[N]
};