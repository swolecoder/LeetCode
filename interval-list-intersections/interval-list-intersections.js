/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(l1, l2) {
    
    let res = [];
    
    let p1 =0;
    let p2 =0;
    
    while(p1 < l1.length && p2 < l2.length){
        
     let [s1,e1] = l1[p1];
     let [s2,e2] = l2[p2];
        
     let newData = [Math.max(s1,s2), Math.min(e1,e2)];
        
     if(newData[0] <= newData[1]){
         res.push(newData);
     }
        
     if(e1 <e2){
         p1++
     }else{
         p2++
     }
        
        
    }
    
    return res
};