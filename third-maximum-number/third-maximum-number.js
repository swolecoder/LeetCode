/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let data = Array.from(new Set(nums));
    let num = Array.from(new Set(nums));
    console.log(num)
    let firsMax = num.splice(num.indexOf(Math.max(...num)),1);
     console.log(num)
    
    if(data.length < 3)return firsMax;
    
    //second 
    secondMax = num.splice(num.indexOf(Math.max(...num)),1);
     console.log(num)
      console.log(secondMax)
    return Math.max(...num)
};