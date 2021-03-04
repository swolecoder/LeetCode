/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(d) {
   
 var nrows = d.length;
    var ncols = d[0].length;
    
    var dp = [];
    for (var r=0; r<nrows+1; r++) {
        dp[r] = [];
        for (var c=0;c<ncols+1;c++) {
            dp[r][c] = Number.MAX_SAFE_INTEGER;
        }
    }
       dp[nrows-1][ncols] = dp[nrows][ncols-1] = 1;
   // console.log(dp)
    for (var r=nrows-1;r>=0;r--) {
        for (var c=ncols-1;c>=0;c--) {
            dp[r][c] = Math.max(1, Math.min(dp[r+1][c], dp[r][c+1])-d[r][c]);
        }
    }
        console.log(dp)
    return dp[0][0];
    

};