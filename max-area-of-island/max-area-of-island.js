/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let dirs = [
        [-1,0],
        [0,1],
        [1,0],
        [0,-1]
    ];
    
    let r = grid.length;
    let c = grid[0].length;
    
    if(!r)return 0
    
    let maxIsland = 0;
    
    for(let i =0; i < r; i++){
        for(let j =0; j < c; j++){
            if(grid[i][j] == 1){
               maxIsland = Math.max(maxIsland,dfs(i,j))
            }
       
        }
    }
    
    return maxIsland
    
    
    
    function dfs(i, j){
        if(i < 0 || i >= r || j < 0 || j >= c || grid[i][j] != 1)return 0;
        
        let count = 1;
        grid[i][j] = "0"
        
        count += dfs(i -1, j) + dfs(i+1, j)+ dfs(i, j-1)+ dfs(i,j+1);
        
        return count
    }
};