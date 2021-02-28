/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let map = {};
    
    //sort the words
    words.sort((a, b)=> a.length - b.length)
    
    for(let w of words){
        
        let longest = 0;
        
        for(let j =0; j < w.length; j++){
            let subWord   = w.slice(0, j) + w.slice(j+1);
            longest = Math.max(longest, (map[subWord] || 0)+1 )
        }
        
        map[w] = longest
        
        
    }
    
    
    return Math.max(...Object.values(map))
};