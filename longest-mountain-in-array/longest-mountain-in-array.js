/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    
    
    let max  = 0;
    let N = arr.length
    
    for(let i = 1; i < arr.length; i++){
        let count = 1;
        let flag = false
        
        //increase
        let j = i
        
        while(j <  N && arr[j] > arr[j-1]){
          count++
          j++
        }  
        
        //decrease 
        
         while( i !== j && j <  N && arr[j] < arr[j-1]){
          count++
          j++
          flag = true
        }
        
        
        //max
        if(i !=j && count > 2 && flag){
            max = Math.max(max, j - i +1)
            j--
        }
        i = j

    }
    
    return max
};