/**
 * @param {number} n
 * @return {number}
 */

let map = {}
var numTrees = function(n) {
   if(n <=1 )return 1;
    // if(map[n] != undefined)return map[n]
   let count = 0;
    
    for(let i =1; i <=n ; i++){
        let left = numTrees( i-1);
        let right = numTrees(n-i)
        count += (left * right)
    }
    // map[n] = count;
    return count 
};