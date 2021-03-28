/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  
    let r = grid.length;
    let c = grid[0].length;
    
    let dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1]
    ];
    
    if(grid[0][0] == 1)return -1;
    
    //r, c, path
    let q = [[0,0,1]];
    
    while(q.length){
        let data= q.shift();
        let [row,col,path] = data;
        
        //check if r and c is the bottom right 
        if(row == r-1 && col == c-1)return path;
        
        for(let i =0; i < 8; i++){
            
            let row1 = row + dirs[i][0];
            let col1 = col + dirs[i][1];

            if(grid[row1] && grid[row1][col1] == 0){
                q.push([row1,col1,path+1]);
                grid[row1][col1] = 1;//mark its as visited
            }
        }
 
    }
    
    return -1
};