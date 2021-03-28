/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    
      pairs.sort((a,b)=> a[0] - b[0]);
      let n = pairs.length;
    console.log(pairs)
      let dp = new Array(n).fill(1);
      let max = 1;
      for(let i =1;i < n; i++){
          for(let j = 0; j <= i; j++){
              if(pairs[j][1] < pairs[i][0]){
                  dp[i] = Math.max(dp[i], dp[j]+1);
                  max = Math.max(dp[i], max)
              }
          }
      }
     console.log(dp)
    return max
};