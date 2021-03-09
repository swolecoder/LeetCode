/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
    
    
    function helper(sum){
        let start = 0;
        if(sum < 0)return 0
        let max = 0;
        let count = 0;
        for(let i =0; i < A.length; i++){
            count +=A[i];
            //atmost 
            while(count > sum){
                count -=A[start]
                start++
            }
           max += i -start +1; 
        }
        
        return max                                        
    }
    
   return helper(S) - helper(S-1)
};