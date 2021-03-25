/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    
    
    let left =Math.max(...nums)
    let sum = nums.reduce((a,b)=> a+b,0)
    let right = sum;
    
    function countSum(mid){
        let count = 1;
        let sum = 0;
        
        for(let i=0; i < nums.length; i++){
             if(sum + nums[i]  <= mid){
                 sum += nums[i]
             }else{
                 sum = nums[i];
                 count++;
             }
        }
        return count;
    }
    
     while(left < right){
         let mid = Math.floor((left+right)/2);
         
         if(countSum(mid) <= m){
             right = mid
         
         }else{
            left = mid +1
         }
     }
    return left
};