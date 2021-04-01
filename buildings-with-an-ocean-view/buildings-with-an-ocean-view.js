/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    
    
    let res = [];
    let N = heights.length;
    
    if(!heights.length)return
    
    for(let i =0; i < N-1; i++){
        let checker = true;
        for(let j =i +1; j < N; j++){
            if(heights[j] >= heights[i]){
                checker = false;
                break;
            }
        }
        
        if(checker)res.push(i)
    }
    res.push(N-1)
    return res
};