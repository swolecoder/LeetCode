/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    
    
    let min = [];//min array 
    let max = [];//max
    
    let start = 0;
    
    let ans = 0
    
    for(let i =0; i < nums.length; i++){
        //clean up
        while(min.length> 0 && nums[i] <= nums[min[min.length-1]])min.pop();
        while(max.length >0 && nums[i] >= nums[max[max.length-1]])max.pop();
        
        min.push(i)
        max.push(i)
        
        if(nums[max[0]] - nums[min[0]] > limit){
            start++;
            
            if(start > min[0])min.shift();
            if(start > max[0])max.shift();
        }else{
            console.log(i,start)
            ans = Math.max(ans, i - start +1)
        }
    }
    
    return ans
};