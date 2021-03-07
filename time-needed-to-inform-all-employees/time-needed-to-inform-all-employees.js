/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let map = {};
    for(let i = 0; i < manager.length; i++){
        if(i == headID)continue
        if(map[manager[i]] == undefined)map[manager[i]] = [];
        map[manager[i]].push(i)
    }
    
    console.log(map)
    let visited = new Set();
    let max = 0;
    function dfs(node, time){
        
       if(!visited.has(node)){
           
           visited.add(node)
           
           if(map[node]){
               
               for(let child of map[node]){
                   if(!visited.has(child))dfs(child, time+informTime[child])
               }
               
               //else see the max for the node 
               console.log(node,time)
               max = Math.max(max, time)
           }
       }
          
    }
    
    dfs(headID, informTime[headID])
    
    
    return max
};