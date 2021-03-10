/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    
    while(n){
//         let res = n & 1
//         if(res > 0)count++
        count++
        n = n & (n-1)
    }
    
    return count 
};