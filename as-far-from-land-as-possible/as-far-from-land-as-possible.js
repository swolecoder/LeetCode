/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    
    
    let r = grid.length;
    let c = grid[0].length;
    
    let zero = 0;
    let q = []
    for(let i =0; i < r; i++){
        for(let j =0; j < c; j++){
            if(grid[i][j] == 1){
                q.push([i,j, 0])
            }else{
                zero++
            }
        }
    }
    
    
    let max = -Infinity;
    
    if(zero == 0)return -1
    
    let dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    let set = new Set();
    while(q.length>0){
        
        let data = q.shift();
        let [i,j , step] = data;
        
        max = Math.max(max,step);
        
        for(let k =0; k < 4; k++){
            let i1 = dirs[k][0] + i;
            let j1 = dirs[k][1] + j;
            let key = i1+"-"+j1;
       
            if(!set.has(key) && grid[i1]&& grid[i1][j1] == 0){
                set.add(key);
                     console.log("AswdkaD")
                q.push([i1,j1,step+1])
            }
        }
        
    }
    
    return max == -Infinity ? -1 : max
};