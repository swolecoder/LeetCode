/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let dp = new Array(s1.length+1).fill(0).map(()=> new Array(s2.length+1).fill(0));
 
    
    let left = 0;
    for(let i =1; i < dp.length; i++){
        
        dp[i][0] = left + s1.charCodeAt(i-1)
        left = dp[i][0]
    }
    
    left = 0;
    for(let i =1; i < dp[0].length; i++){
        
        dp[0][i] = left + s2.charCodeAt(i-1)
        left = dp[0][i]
    }
    
       console.log(dp)
    
    for(let i =1; i < dp.length; i++){
        for(let j =1; j < dp[0].length; j++){
            
            if(s1[i-1] == s2[j-1]){
                dp[i][j] = dp[i-1][j-1]
            }else{
                let x = dp[i-1][j] + s1.charCodeAt(i-1)
                let y = dp[i][j-1] + s2.charCodeAt(j-1)
                
                dp[i][j] = Math.min(x,y)
                
            }
            
            
        }
    }
    
     console.log(dp)
    
    return dp[dp.length-1][dp[0].length-1]
    
    
};