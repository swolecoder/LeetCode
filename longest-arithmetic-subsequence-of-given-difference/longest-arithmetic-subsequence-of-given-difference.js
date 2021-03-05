/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
//     let map = new Map();
//     let max= 1;
    
    
//   for(let i =0; i < arr.length; i++){
//       for(let j =i+1;j < arr.length; j++){
//           let gap = arr[j]- arr[i];
          
//           if(gap == difference){
//               let count = map.get(i+"-"+gap)+1 || 2;
              
//                map.set(j+"-"+gap, count);
//               max = Math.max(max, count)
//           }
//       }
//   }
    
//     return max 
    
    let map = {};
    
    let max = 0;
    
    for(let i =0; i < arr.length; i++){
        
        let gap = arr[i] - difference;
        
        if(map[gap] == undefined){
            map[arr[i]] = 1
        }else{
            map[arr[i]] = 1 + map[gap]
        }
        
        max = Math.max(max, map[arr[i]])
    }
    
    return max
};