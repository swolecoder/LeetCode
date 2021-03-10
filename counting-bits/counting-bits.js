/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    
    
    let ans = [];
    
    for(let i = 0; i <= num  ; i++){
        
        let j = i;
        let count = 0;
        
        while(j){
            let res = j & 1
            if(res > 0)count++
            j = j >> 1
        }
        
        ans.push(count)
    }
    
    return ans
};