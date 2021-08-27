/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    
    let res = [];
    
    for(let i =0; i < numRows; i++){
        let inner = [];
        for(let j =0; j <= i; j++){
            if(i==j || j ==0){
                inner.push(1)
            }else{
                inner.push(res[i-1][j-1] + res[i-1][j])
            }
        }
        res.push(inner)
    }
    
    console.log(res)
    
    return res
};