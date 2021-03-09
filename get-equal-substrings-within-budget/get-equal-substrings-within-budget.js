/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */


    
var equalSubstring = function(s, t, maxCost) {
    
    
    function checker(index){
        return Math.abs(s.charCodeAt(index) - t.charCodeAt(index))
}
    
    let start = 0;
    let max = 0;
    let cost = 0;
    
   
    
    for(let i =0; i < s.length; i++){
        
        cost += checker(i)
        
        while(cost > maxCost){
             cost -= checker(start++)
           
        }
        
        max = Math.max(max,i - start+1)
        
    }
    
    
    
    return max
    
};