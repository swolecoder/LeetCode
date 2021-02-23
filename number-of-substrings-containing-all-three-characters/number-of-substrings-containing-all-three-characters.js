/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let map = {"a":0, "b":0, "c":0}
    
    let start = 0;
    
    let ans = 0;
    
    for(let end=0; end < s.length; end++){
        let d = s[end];
        map[d]++
        
        //fullfill oour constyarinst
        while(start < end && map["a"] > 0&& map["b"]> 0&& map["c"] >0 ){
            map[s[start]]--
            start++
           
        }
        
        console.log(start)
        
       ans += start
    }
    console.log("Ashish",ans)
    
    return ans
};