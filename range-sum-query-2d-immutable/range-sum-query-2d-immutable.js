/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(m) {
    this.m = m;
    
    if(this.m.length > 0){
            let r = this.m.length;
    let c = this.m[0].length;
    
    this.sum = new Array(r+1).fill(0).map(()=> new Array(c+1).fill(0));
    
    for(let i=1; i <=r; i++){
        for(let j =1; j <=c; j++){
            this.sum[i][j] = this.sum[i-1][j] + this.sum[i][j-1] - this.sum[i-1][j-1] + this.m[i-1][j-1]
        }
    }
    }

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let r1 = row1+1, c1= col1+1;
    let r2 = row2+1, c2= col2+1;
    
    let sum = this.sum[r2][c2] - (this.sum[r1-1][c2] + this.sum[r2][c1-1]) +this.sum[r1-1][c1-1]
    return sum
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */