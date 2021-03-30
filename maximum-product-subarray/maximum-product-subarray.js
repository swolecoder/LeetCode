/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
    
    let N = nums.length
    let min = new Array(N).fill(0)
    let max = new Array(N).fill(0)
    
    min[0] = nums[0]
    max[0] = nums[0]
    
    let res =  nums[0]
    
   for(let i =1; i < nums.length; i++){
       let num = nums[i]
        min[i] = Math.min(num, num* min[i-1] , num * max[i-1] )
        max[i] = Math.max(num,num* min[i-1],num * max[i-1] )
       
       res = Math.max(res, max[i])
   }
    
    console.log(min)
    console.log(max)
    
    return res
};