/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    
    
    let res = []; 
    let data = [lower-1, ...nums, upper+1];
    
    
    for(let i=0; i < data.length; i++){
        
        let diff = data[i+1] - data[i];
        
        if(diff === 2){
            res.push(`${data[i]+1}`)
        }else if (diff > 2){
            res.push(`${data[i]+1}->${data[i+1]-1}`)
        }
    }
    

    return res;
};