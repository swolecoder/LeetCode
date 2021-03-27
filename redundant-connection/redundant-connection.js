/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let parent =  new Array(edges.length).fill(0).map((_,i)=> i);
    
    console.log(parent)
    
    const find = (a)=>{
        if(a == parent[a])return a;
        return a = find(parent[a])
    }
    
    const union = (a,b)=>{
        let a1 = find(a);
        let b1 = find(b);
        
        if(a1 != b1){
            parent[b1] =a1
        }
    }
    
    for(let [a,b] of edges){
        console.log([a,b])
        if(find(a) == find(b))return [a,b]
        union(a,b)
    }
    
    
    
    
    
};