/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(t) {
    let dp = t[t.length-1]

    for(let i=t.length-2; i>=0; i--){
        for(let j =0; j < t[i].length; j++){
            dp[j] = t[i][j] + Math.min(dp[j], dp[j+1])
        }
    }
    
    return dp[0]
};