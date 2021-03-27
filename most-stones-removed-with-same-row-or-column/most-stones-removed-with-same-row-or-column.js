/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    
    
    let graphX = {};
    let graphY = {};
    for(let i =0; i < stones.length; i++){
        let [a,b]  = stones[i];
        if(graphX[a] == undefined) graphX[a] = [];
        if(graphY[b] == undefined) graphY[b] = [];
        graphX[a].push(b)
        graphY[b].push(a)
    }
    
    
    let visited = {};
    let count = 0
    for(let i =0; i < stones.length; i++){
        let [a,b]= stones[i];
        
         let key = a + "~" + b;
        if(visited[key]== undefined){
             visited[key] = true;
            dfs(a,b)
            count++
        }
    }
    console.log(count)
    
    return stones.length - count
    function dfs(x,y){
        
        for(let x1 of graphX[x]){
            let key = x + "~" + x1
            if(visited[key]== undefined){
                visited[key] = true;
                dfs(x,x1)
            }
        }
        
           for(let y1 of graphY[y]){
            let key = y1 + "~" + y
            if(visited[key]== undefined){
                visited[key] = true;
                dfs(y1,y)
            }
        }
    }
};