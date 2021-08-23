/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(g) {
    
    let result = [];
    
    let map = {};
    
    for(let i=0; i < g.length; i++){
        
        let curr = g[i];
        
       
        
        if(map[curr] == undefined){
            map[curr] = [];
        }
        
        
        map[curr].push(i)
        
         if(curr in map && map[curr].length == curr){
            result.push(map[curr]);
            //delete it
            console.log("Here",map[curr])
            delete map[curr]
        }
        
    }
    console.log(map)
    console.log(result)
    return result
};