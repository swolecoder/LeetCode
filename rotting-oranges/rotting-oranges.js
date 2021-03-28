/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
        
    let dirs = [[-1,0],[1,0],[0,1],[0,-1]];
    let freshOranges = 0;
    let rottenOrages = [];
    
    for(let i=0; i < grid.length; i++){
        for(let j=0; j < grid[0].length; j++){
            if(grid[i][j] ==1)freshOranges++;
            if(grid[i][j] ==2) rottenOrages.push([i,j])
        }
    }
    
    let minutes = 0;
    while(rottenOrages.length && freshOranges){
        
        let rotting = [];
        
        while(rottenOrages.length){
            
            let [x,y] = rottenOrages.shift();
            
            for(let i=0; i < 4 ; i++){
                let x1 = x + dirs[i][0];
                let y1 = y + dirs[i][1];
                
                if(grid[x1] && grid[x1][y1] == 1){
                    rotting.push([x1,y1]);
                    freshOranges--
                    grid[x1][y1] = "0"
                }
            }
            
            
            
        }
        
        rottenOrages = rotting;
        minutes++

        
    }
    
    return freshOranges ? -1 : minutes
};