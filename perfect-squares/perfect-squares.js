/**
 * @param {number} n
 * @return {number}
 */
  let cache = new Map();
var numSquares = function(n) {
    
    
  

   if (cache.has(n)) return cache.get(n);
    if (n === 0) return 0;
    
    let best = Infinity;
    for(let i=1; i* i<=n; i++) {
        best = Math.min(best, numSquares(n-i*i));
    }
    cache.set(n, best+1);
    return best +1;
};