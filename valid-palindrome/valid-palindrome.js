/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let data = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(data)
    
    let i =0; 
    let j = data.length-1;
    
    while(i < j){
        if(data[i] != data[j])return false
        i++;
        j--
    }
    
    return true
};