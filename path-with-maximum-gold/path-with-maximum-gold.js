/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
   let r = grid.length;
   let c = grid[0].length;
    
  let max = 0;
    if(!r)return max
    for(let i =0; i < r; i++){
        for(let j =0; j < c;j++){
            if(grid[i][j] != 0){
                 max = Math.max(max, dfs(i,j))
                // console.log("ajasddxas",dfs(i,j))
            }
        }
    }
    
  return max;
    
    
   function dfs(i, j){
       if(i < 0 || j < 0 || i >= r || j >= c || grid[i][j] == 0)return 0;
       
       
       let temp = grid[i][j];
       
       grid[i][j] = 0;
       
       let count = temp;
       
       count += Math.max(dfs(i-1,j), dfs(i+1, j), dfs(i, j-1), dfs(i, j+1))
       
       grid[i][j] = temp;
       return count;
   }
};