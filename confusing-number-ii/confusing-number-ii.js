/**
 * @param {number} N
 * @return {number}
 */
var confusingNumberII = function(N) {
    let map = {
        
       "0":0,
       "1":1,
        "6":9,
        "9":6,
        "8":8,
    }
     
    let digits = [0,1,6,8,9];
    let count = 0;
    
    let set = new Set();
    
    function digitIsValid(n){
        let data = n ;
        let s= n.toString().split("");
        let f = "";
        for(let i =0; i < s.length; i++){
            if(map[s[i]] != undefined){
                f += map[s[i]]
            }else{
                f += s[i]
            }
        }
        let g = f.split("").reverse().join("");
        
        if(g != n){
            return true
        }
        return false
    }
    
    let  mappings = {'0' : '0', '1' : '1', '6' : '9', '8' : '8', '9' : '6'}
    
    function dfs(n){
        if( n > N)return;
        
        if (digitIsValid(n)){
            set.add(n)
            count++
        }
         n = n * 10
        for(let key in mappings){
            dfs(n + Number(key))
        }
    }
    
    dfs(1)
    dfs(6)
    dfs(8)
    dfs(9)

    
    
    
//     function dfs(start, data){
//         if(Number(data) > Number(N))return 
        
//         if(digitIsValid(+data)){
//             count++
//             set.add(+data)
//         }
//         // for(let i = start; i < digits.length;i++){
//         //     let newData = data + digits[i];
//         //     dfs(i, newData)
//         // }
//         data = data * 10
//         for(let key in mappings){
            
//         }
        
//     }
    
//      // dfs(0,"0")
//      dfs(0,"1")
//       dfs(0,"6")
//     dfs(0,"8")
//      dfs(0,"9")
//     console.log(count)
    
    return count
};