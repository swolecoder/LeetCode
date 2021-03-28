/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    
    let ans = Infinity;
    let result = Infinity
    for(let i =0; i < points.length; i++){
        let [a,b] = points[i];
        
        if(a == x || b == y){
            let distance = Math.abs(a-x) + Math.abs(b-y);
            
            if(distance < ans){
                 ans = Math.min(ans, distance)
                result = i
            }
           
        }
    }
    
    return result == Infinity ? -1 : result
};