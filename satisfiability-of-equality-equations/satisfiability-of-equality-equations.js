/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    class UnionF{
        constructor(){
            this.parent = [];
            for(let c of "abcdefghijklmnopqrstuvwxyz"){
                this.parent[c] = c
            }
        }
        
        find(x){
            
            if( x == this.parent[x])return x
             return x = this.find(this.parent[x])
        }
        
        union(first ,second){
            let A = this.find(first)
            let B = this.find(second)
            console.log("Union",A,B)
            if(A != B){
                this.parent[B] = A;
            }
        }
    }
    
    const uf = new UnionF()
    for(let i = 0; i < equations.length; i++){
        let [a,b,c,d] = equations[i].split("");
       
        if( b == "="){
             console.log(a,b,c,d)
            uf.union(a,d)
        }
    }
    
   console.log(uf)
     for(let i = 0; i < equations.length; i++){
        let [a,b,c,d] = equations[i].split("");
       
        if( b == "!"){
           if(uf.find(a) === uf.find(d)) return false;
        }
    }
    
    return true
};