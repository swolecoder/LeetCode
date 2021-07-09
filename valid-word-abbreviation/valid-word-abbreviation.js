/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {

    let j = 0;
    
    let skip = 0;
    for(let i=0; i < abbr.length; i++){
        
         if(!isNaN(abbr[i])){
              let num = Number(abbr[i]);
              if(!skip && !num) return false; //if there is a leading zero return false
             skip = skip * 10 + Number(abbr[i])
         }else{
             j += skip
            if(word[j] != abbr[i])return false
            skip = 0  
            j++;
         }
    }
    return j + skip == word.length
};