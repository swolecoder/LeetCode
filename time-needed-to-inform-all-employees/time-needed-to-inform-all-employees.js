/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let graph = {};
    
    for(let i =0; i < manager.length; i++){
        console.log(i)
        if(i==headID)continue
        if(graph[manager[i]] == undefined)graph[manager[i]]=[];
        graph[manager[i]].push(i)
    }
    
    console.log(graph)
    
    let q = [];
    
    q.push([headID,informTime[headID]])
    let visited = new Set();
    
    let max = -Infinity
    while(q.length){
        let data = q.shift();
        let [child,time] = data
        
        if(graph[child]){
            
            for(let c of graph[child]){
                max = Math.max(time + informTime[c], max)
                if(!visited.has(c)){
                    visited.add(c)
                    q.push([c,time + informTime[c]])
                }
                
                
            }
            
            
            
            
            
        }
        
        
        
        
        
    }
    
    
    
    console.log(max)
    
    
    return max == -Infinity ? 0 : max
    
};