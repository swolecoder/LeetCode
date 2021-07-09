/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    
    
    for(let i =0; i < s.length; i++){
        if(s[i] != s[s.length-1 -i]){
            //skip from front or back
            let front = s.slice(0,i) + s.slice(i+1)
            let back = s.slice(0,s.length-1-i) + s.slice(s.length-1-i+1)
            return valdPalindrone(front) || valdPalindrone(back)
        }
    }
    
    return true
};


function valdPalindrone(s){
    return s.split("").reverse().join("") == s;
}