/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let res = new Array(r).fill(0).map(()=> new Array(c).fill(0));
   
    
  //  if(mat.length )
    
    let data = [];
    
    if(mat.length + mat[0].length )
    //m * n
    for(let i=0; i < mat.length; i++){
        for(let j =0; j < mat[0].length; j++){
            data.push(mat[i][j])
        }
    }
    
    
    for(let i=0; i < res.length; i++){
        for(let j=0; j < res[0].length; j++){
            let d = data.shift();
            if(d != undefined){
               res[i][j] = d
            }else{
                return mat
            }
            
        }
    }
    
    return data.length > 0 ? mat : res 
};