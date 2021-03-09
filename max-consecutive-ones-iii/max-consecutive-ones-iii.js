/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let count = 0;
    let ans = 0;
    let start = 0;
    for(i =0; i < A.length; i++){
        if(A[i]== 0)count++
        
        while(count > K){
            if(A[start]== 0)count--
            start++
        }
        
        ans = Math.max(ans, i -start+1)
    }
    
    return ans
};