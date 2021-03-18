/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelop) {
     envelop.sort((a,b)=>{
     if(a[0] === b[0]){
        return b[1]-a[1]
      }
    return a[0] - b[0]
})
//create DP
let N = envelop.length;
let dp = new Array(N).fill(1);
let max = 1;
    
for(let i =0; i < N; i++){
  for(let j =0; j <=i; j++){
      if(envelop[j][1] < envelop[i][1]){
           dp[i] = Math.max(dp[i], dp[j] +1)
            max = Math.max(max, dp[i])
      }
  }


}

console.log(envelop,dp)
return max

};