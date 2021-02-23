/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let start = 0;
    let count = 0
    
    let max = 0;
    
    for(let i=0; i < A.length; i++){
        if(A[i] == 0)count++;
        //shring window size
        while(count > K){
            
            if(A[start] == 0)count--
            
            start++
        }
        
        
        
        max = Math.max(max, i -start+1)
    }
    
    return max
};