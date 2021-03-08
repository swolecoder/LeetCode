/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    
    let r = matrix.length; 
    let c = matrix[0].length;

    let max = 0;
     let dp = new Array(r).fill(0).map(()=> new Array(c).fill(0))
    for(let i =0; i < r; i++){
        for(let j =0; j < c; j++){
            max = Math.max(max, dfs(i,j))
        }
    }
    return max
    
    
    function dfs(row, col, parent= -Infinity){
        
        let key = row + "---" + col
        if(row < 0 || row >= r || col < 0 || col >= c)return 0;
        
  
        
        if(matrix[row][col] <= parent) return 0;
        
           if(dp[row][col] != 0)return dp[row][col]
        let count = 1;
        
    count += Math.max(dfs(row,col-1, matrix[row][col]), dfs(row,col+1, matrix[row][col]), dfs(row+1,col, matrix[row][col]),dfs(row-1,col, matrix[row][col]));
        
        
        dp[row][col] = count
        return count

    }
};