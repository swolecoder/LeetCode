/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    let map = new Map();
    let max = 2;
    
    for(let i = 0; i < A.length; i++){
        for(let j = i+1; j < A.length; j++){
            let gap = A[j] - A[i];
            
            const count = map.get(i+"-"+gap) +1 || 2;
            
            map.set(j+"-"+gap, count)
            max = Math.max(max, count)
        }
    }
    
    return max
};