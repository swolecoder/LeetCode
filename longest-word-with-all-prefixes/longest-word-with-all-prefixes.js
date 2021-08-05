/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();
    console.log(words)
    let map = {};
    let result = "";
    
    for(let w of words){
        
        let subWords = w.substring(0,w.length-1);
        console.log(subWords)
        if(w.length == 1 || map[subWords] != undefined){
            
            if(w.length > result.length) result= w;
            map[w] = true;
            
        
        }
    }
    
    return result
};