/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    
     for(let i=0; i < board.length; i++){
         for(let j=0; j <board[0].length; j++){
             if(board[i][j] == 'X'){
                  dfs(i,j);
                 count++;
             }
         }
     }
    
    return count
    
    function dfs(x,y){
        
        if(x <0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] != "X")return;
        
        board[x][y]="#";
        
        dfs(x+1,y);
        dfs(x,y+1);
        dfs(x-1,y);
        dfs(x,y-1);
    }
};