/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    
    
    let dp = new Array(n+1).fill(Infinity)
    dp[0] = 0;

    for(let i =0; i < ranges.length; i++){
        let a = Math.max(0, i- ranges[i]);
        let b = Math.min(n,i+ranges[i]);
        
        for(let j = a; j <=b ; j++){
            dp[j] = Math.min(dp[j], dp[a]+1)
        }
    }
    
    console.log(dp)
    
    return dp[n] == Infinity ? -1 : dp[n]
};