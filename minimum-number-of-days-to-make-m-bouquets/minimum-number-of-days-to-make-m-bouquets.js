/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    
    if(m* k > bloomDay.length) return -1
    let start = 0;
    let end= Math.max(...bloomDay);
    console.log(end)
    
    while(start <=end){
        let mid = Math.floor((start+end)/2);
        
        
        let count = 0;
        let bouquets = 0;
        
        for(let i=0; i < bloomDay.length; i++){
            if(bloomDay[i] > mid){
                count = 0
            }else{
                count++
                if(count == k){
                    bouquets++
                    count =0
                    
                    if(bouquets == m)break
                }
            }
        }

        if(bouquets == m){
            end = mid -1
        }else{
            start = mid +1
        }
        
        
    }
    
    
    return start
};