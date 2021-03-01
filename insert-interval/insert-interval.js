/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    let data = [...intervals,newInterval ]
    
    
    data.sort((a,b)=> a[0] - b[0]);
    console.log(data)
    
    let res = [data[0]];
    
    for(let i =1 ;i < data.length; i++){
        
        let prev = res[res.length-1];
        let current = data[i];
        console.log("Ashish", prev, current)
        if(prev[1]>= current[0]){
             prev[1] = Math.max(prev[1], current[1])
        }else{
            res.push(current)
        }
    }
    return res
};