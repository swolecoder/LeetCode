/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, q) {
    
    let n = arr.length;
    
    let prefix = [];
    prefix[0] = arr[0]
    
    
    for(let i=1; i < n; i++){
        prefix[i] = prefix[i-1] ^ arr[i]
    }
    
    
    let res = [];
    
    for(let i =0; i < q.length; i++){
        let [a,b] = q[i]
        
        if(a==0){
            res.push(prefix[b])
        }else{
             res.push(prefix[b] ^prefix[a-1] )
        }
    }
    
    return res
};