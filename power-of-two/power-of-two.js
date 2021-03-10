/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if(n < 0)return false
    
    let count = 0;
    
    while(n){
        // let res = n & 1;
        // if(res > 0)count++
        // n = n >> 1
        count++
        n = n & (n-1)
    }
    
    return count == 1 ? true : false
};