/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let r = grid.length
    let c = grid[0].length
    
   let dirs = [[-1,0], [1,0], [0,-1], [0,1]]
    let visited = new Set();
    
    let ans = 0;
    
    for(let i =0; i <r; i++ ){
        for(let j =0; j < c;j++){
            if(grid[i][j] == 0){
                
                
                let queue = [[i,j]];
                
                let flag = true
                while(queue.length > 0){
                    let d = queue.shift()
                    let [x,y] = d;
                    grid[x][y] = 1
                    if(x==0 ||x == r-1 || y==0 || y == c-1){
                          flag = false
                    }
                    
                   
                    for(let d of dirs){
                        let x1=  x + d[0];
                        let y1 = y + d[1];
                        
                        if(grid[x1] && grid[x1][y1] == 0){
                             queue.push([x1,y1])
                        
                        }
                    }
                    
        
                    // console.log(queue)
                }
                
                 
                     if(flag){
                          ans++
                     } 
            }
        }
    }
    
    return ans
    
};