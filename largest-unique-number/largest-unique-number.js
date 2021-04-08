/**
 * @param {number[]} A
 * @return {number}
 */
var largestUniqueNumber = function(A) {
    
    
    let map = {};
    
    for(let i =0; i < A.length; i++){
        map[A[i]] = (map[A[i]] || 0)+1
    }
    
    let ans = -Infinity;
    
     for(let [key, val] of Object.entries(map)){
         if(val == 1){
             ans = Math.max(ans, key)
         }
     }
    
    return ans == -Infinity ? -1 : ans
};