/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(c) {
    let start = 0;
    let end = c.length -1
    
    while(start <=end){
        
        let middle = Math.floor((start+end)/2)
        
        if(c[middle] == c.length- middle)return c.length - middle
        
        if(c[middle] > c.length- middle){
            end = middle-1
        }else{
            start = middle +1
        }
 
    }
    
    console.log(start)
    return c.length - start
};