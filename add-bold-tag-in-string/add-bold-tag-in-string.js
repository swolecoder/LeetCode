/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function(s, words) {
    
    
    
    let holder = new Array(s.length).fill(false);
    
    for(let word of words){
        
        let start = s.indexOf(word);
        
        
        while(start > -1){
            
            for(let i= start; i < start + word.length; i++){
                
                 if(holder[i])continue;
                 holder[i] = true
                
            }
            
            start = s.indexOf(word, start+1)
        }
        
    }
    
    console.log(holder)
    
    
    let res = "";
    
    
    
    for(let i =0; i < s.length; i++){
        
        if((holder[i-1] == undefined || !holder[i-1] ) && holder[i]){
            res += "<b>"
        }
        res += s[i]
        
        if(holder[i] && (holder[i+1] == undefined || !holder[i+1])){
           res += "</b>"
           }
        
        
    }
        
        console.log(res)
    
    return res
    
};