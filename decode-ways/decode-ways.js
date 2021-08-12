/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    /*
      "226"
      2    22
      
             
      26     6
    
    
    
    */
    
    
    let dp = new Array(s.length+1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] == 0 ? 0 : 1;
    
    for(let i=2;i <= s.length; i++){
        
        let first = s.slice(i-1,i);
        let second = s.slice(i-2,i)
        console.log(first,second)
        
        if(first >= 1){
            dp[i] += dp[i-1]
        }
        
        if(second >9 && second <= 26){
            dp[i] += dp[i-2]
        }
    }
    
    console.log(dp)
    return dp[s.length]
    
};