/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;
    
    
    for(let i =0; i <r;i++ ){
        for(let j =0; j < c;j++){
            if(matrix[i][j] == 1){
                console.log(bfs(i,j))
                matrix[i][j] = bfs(i,j)
            }
        }
    }
    return matrix
    
    function bfs(row, column){
        
        let  q = [[row, column, 0]];
        let dirs =  [[1,0], [-1,0],[0,1],[0,-1]]
        
        let set = new Set(); //mark it as visited
        while(q.length){
            let data = q.shift();
            let [a,b, dis] = data;
            
            if(matrix[a][b] == 0){
                return dis
            }
            
            for(let i =0; i < 4; i++){
                let new_row = a + dirs[i][0];
                let new_col = b + dirs[i][1];
                let key = new_row + "-"+ new_col;
                if(!set.has(key) && matrix[new_row]){
                    set.add(key);
                    q.push([new_row, new_col, dis+1])
                }
            }
            
        }
    }
};