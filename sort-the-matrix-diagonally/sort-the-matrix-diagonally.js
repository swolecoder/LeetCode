/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    
    
    let map = {};
    
    
    for(let i =0; i < mat.length; i++){
        for(let j=0; j < mat[0].length; j++){
            
            let curr = mat[i][j]
            let key = j - i;
            
            if(map[key] == undefined)map[key] = [];
            map[key].push(curr)
        }
    }
    
   
    
    for(let [key, val] of Object.entries(map)){
        val.sort((a,b)=> a-b)
​
    }
     console.log(map)
    
        for(let i =0; i < mat.length; i++){
        for(let j=0; j < mat[0].length; j++){
            
            let curr = mat[i][j]
            let key = j - i;
            
            if(map[key] != undefined){
                mat[i][j] = map[key].shift()
            }
            
        }
    }
    return mat
    
};
