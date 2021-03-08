/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    
    let r = heights.length;
    let c = heights[0].length;
    
    
    let start = 0;
    let end = Math.pow(10,6)
    
    while(start <end){
       let mid = start + ((end-start) >> 1);
        let t = bfs(mid)
        
        if(t){
            end = mid
        }else{
            start = mid+1
        }
    }
    
    
    return start
    
    function bfs(val){
        let dirs = [[-1,0],[1,0],[0,1],[0,-1]]
        
        let set = new Set();
        
        let q = [[0, 0]];
        
        
        while(q.length){
            
            let data = q.shift();
            let [x, y] = data;
            
            
            if(x == r-1 && y == c-1)return true;
            
            for(let i =0; i < 4 ; i++){
                let x1 = x + dirs[i][0] , y1= y + dirs[i][1];
                
                let key = x1 + "-" + y1
                if(heights[x1] && heights[x1][y1] != undefined){
                    
                    if( Math.abs(heights[x1][y1] - heights[x][y]) > val)continue;
                    
                    if(!set.has(key)){
                        set.add(key)
                        q.push([x1,y1])
                    }
                }
            }
             
        }
        
        return false;
        
        
        
        
    }
};