/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    
    let start = 0;
    
    let ans = 0;
    let N = nums.length;
    let product = 1;
    for(let i =0; i < N; i++){
        product *= nums[i];
        
        while(i < nums.length && product >= k){
            product /= nums[start];
            start++
        }
        
        if(start < N){
            ans += i - start +1
        }
    }
    
    
    
    
    
    return ans;
};