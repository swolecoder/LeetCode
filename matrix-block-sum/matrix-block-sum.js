/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    
    let r = mat.length;
    let c = mat[0].length;
    
    let preSum = new Array(r+1).fill(0).map(()=> new Array(c+1).fill(0));
    
    for(let i =1; i <=r; i++){
        for(let j = 1; j <=c; j++){
            
            preSum[i][j] = (preSum[i-1][j] + preSum[i][j-1] - preSum[i-1][j-1]) + mat[i-1][j-1]
        }
    }
    
    console.log(preSum)
    
    let result =  new Array(r).fill(0).map(()=> new Array(c).fill(0));
    
     for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            let krow1 = Math.max(i-K,0)
            let krow2 = Math.min(i+K,mat.length-1)
            let kcol1 = Math.max(j-K,0)
            let kcol2 = Math.min(j+K,mat[0].length-1)
            
            result[i][j] = preSum[krow2+1][kcol2+1] - preSum[krow2+1][kcol1] - preSum[krow1][kcol2+1] + preSum[krow1][kcol1]
        }
    }
    
//     for(let i=0; i < r; i++){
//         for(let j =0; j < mat[0].length; j++){

//             // let r1 = Math.max(0, i-K),c1 = Math.max(0, j-K);
//             // let r2 = Math.min(r-1, i+K), c2 = Math.min(c-1, j+K)
//             // r1++
//             // c1++;
//             // r2++;
//             // c2++;
//              let r1 = Math.max(i-K,0)
//             let r2 = Math.min(i+K,mat.length-1)
//             let c1 = Math.max(j-K,0)
//             let c2 = Math.min(j+K,mat[0].length-1)
//             result[i][j] = preSum[r2+1][c2+1] - (preSum[r1-1+1][c2+1] + preSum[r2+1][c1-1+1]+ preSum[r1-1+1][c1-1+1]) 
            
//         }
//     }
    console.log(result)
    return result
    
    
    
    
    
};