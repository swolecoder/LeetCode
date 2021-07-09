/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   let ans = strs[0];
    
    for(let i =1; i < strs.length; i++){
        
        let newMatch = "";
        let currentW = strs[i];
        for(let j=0; j <currentW.length; j++){
            if(currentW[j] == ans[j]){
                newMatch += ans[j]
            }else{

                break;
            }
        }
         ans = newMatch;
        
        }
    
    return ans;
};