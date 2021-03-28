/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/*
    
    
//     function dfs(i){
//         if(i== nums.length){
//            return true;
//         }
        
//         let current = nums[i];
        
//         for(let j = 0; j < parts.length; j++){
            
//             if(parts[j] + current <= divide){
//                 parts[j] +=current;
                
                
//                 if(dfs(i+1)){
//                     return true
//                 }
                
//                  parts[j] -=current
//             }
            
//         }
        
//         return false
        
//     }
    
//     return dfs(0)


*/
var canPartitionKSubsets = function(nums, k) {
    
    
    let sum = nums.reduce((a,b)=> a+b, 0);
    

    let divide  = sum /k;
    let parts = new Array(k).fill(0);
    
    nums.sort((a,b)=>a-b);
    
    if(nums[nums.length -1] > divide)return false
    function dfs(){
        if(!nums || nums.length == 0){
            return true
        }
        let v = nums.pop();
        
        for(let i =0; i < parts.length; i++){
            if(parts[i] + v <= divide){
                parts[i] += v;
                
                if(dfs()){
                    return true
                }
                
                parts[i] -= v
                
                
                
            }
            
            
        }
        nums.push(v)
        
        return false
        

    }
    

    
    return dfs()
    
    

};