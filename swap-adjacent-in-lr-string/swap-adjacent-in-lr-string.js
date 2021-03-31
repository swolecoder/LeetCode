/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    
    
    let l = start.length;
    
    let s = 0, e = 0;
    
    
    while(1){
        
        while(s < l && start[s] == "X")s++
        while(e < l && end[e] == "X")e++
        
        if(s== l || e== l){
            return s == l && e == l
        }
        
        if(start[s] != end[e])return false
        
        if(start[s]== "R" && s > e)return false
        
        if(end[e]== 'L' && s < e)return false
        
        
        s++
        e++
    }
};