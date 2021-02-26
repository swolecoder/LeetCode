/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let r = matrix.length; 
    let c = matrix[0].length
    let map = {};
    
    let ans = Infinity;
    
    for(let i=0; i < r; i++){
         ans = Math.min(ans, dfs(0,i))
        
    }
    
    return ans
    
    function dfs(i, j){
        
        
        let key = i +"--"+j;
        
        if(i==r){
            return 0
        }
        
        if(map[key] != undefined) return map[key]
        
        if( j < 0 || j >= c)return Infinity
        
        let op1 = dfs(i+1, j-1);
        let op2 = dfs(i+1, j);
        let op3 = dfs(i+1, j+1);
        
        map[key] =  matrix[i][j] + Math.min(op1, op2, op3)
        return matrix[i][j] + Math.min(op1, op2, op3)

        
    }
};