/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(N, lamps, queries) {
    
    let x = {}
    let y = {};
    let p = {}
    let s = {}
    
    let set = new Set();
    
    for(let [a,b] of lamps){
        x[a] = (x[a] || 0)+1;
        y[b]= (y[b] || 0)+1
        p[a+b]= (p[a+b] || 0)+1
        s[a-b]= (  s[a-b] || 0)+1
        
        let key = a+"-"+b
        set.add(key)
    }
    
    console.log(x,y,p,s,set)
    let res = [];
    
    for(let [a,b] of queries){
       // console.log("Ashish",a,b)
        
        if(x[a] > 0 || y[b] > 0 || p[a+b] > 0|| s[a-b] >0){
            res.push(1)
            //tuen off in all difrections
             console.log("Ashish",a,b)
            for(let j= -1; j <=1; j++){
                for(let k= -1; k <=1; k++){
                    let x1 = a + j;
                    let y1 = b + k;
                    let key = x1+"-"+y1
                     console.log("Ashish ewwdewd",x1,y1)
                    if(set.has(key)){
                        //console.log("Ashish ewwdewd",a,b)
                        set.delete(key);//delete
                        x[x1]--;
                       y[y1]--;
                        p[x1+y1]--;
                        s[x1-y1]--
                        
                    }
                    
                }
            }
            
            
            
            
        }else{
            res.push(0)
        
        }
        
        
        
    }
    
    
    
    
    
  return res  
    
    
};