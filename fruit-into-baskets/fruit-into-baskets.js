/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    /*
    [3,3,3,1,2,1,1,2,3,3,4]
     i       
    
    map 
    
    
    
    
    */
    
    let map = {};
    
    let start = 0;
    
    let max = 0;
    
    
    for(let i = 0; i < tree.length; i++){
        map[tree[i]] = (map[tree[i]] || 0) +1;
        
        
        while(Object.keys(map).length > 2){
            map[tree[start]]--;
            
            if(map[tree[start]] <= 0)delete map[tree[start]]
            start++
        }
        
        
        max = Math.max(max, i -start+1)
    }
    
    return max
};