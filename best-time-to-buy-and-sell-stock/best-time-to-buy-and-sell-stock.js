/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
       // no array return 0
    if(!arr.length) return 0;

   let maxProfitResult = 0;
   
  let minPrice = arr[0];
   
 //lopp tough the array 
 for(let i =1 ; i < arr.length; i++){
      let maxRunningP = arr[i] - minPrice;

   maxProfitResult = Math.max(maxProfitResult, maxRunningP);
   minPrice = Math.min(minPrice, arr[i])

 }


return maxProfitResult

};