/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    
    let N = envelopes.length;
    
    let dp = new Array(N).fill(1)
    
    envelopes.sort((a,b)=>{
        if(a[0] == b[0]){
          return   b[1] - a[1]
        }
        return a[0] - b[0]
    })
    
    for(let i =0 ; i < N; i++){
        for(let j = 0; j < i; j++){
            if(envelopes[j][1] < envelopes[i][1]){
                dp[i] = Math.max(dp[i] , dp[j]+1)
            }
        }
    }
    
    console.log(dp)
    
    return Math.max(...dp) == -Infinity ? 0 : Math.max(...dp)
};