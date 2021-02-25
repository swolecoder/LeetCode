/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
    
    
    let r = A.length;
    let c = A[0].length;
    
    let ans  = 0;
    
    let dirs = [[0,-1],[0,1],[1,0],[-1,0]]
    
    for(let i =0; i < r; i++){
        for(let j =0; j < c; j++){
            
            if(A[i][j] == 1){
                let flag = true;
                
                let q = [[i,j]]
                let count = 1;
                A[i][j] = 0; // mark as visited
                while(q.length){
                    
                    let d = q.shift();
                    let [i1,j1] = d;
                    
                     A[i1][j1] = 0; //mark it as water
                    
                    if(i1==0 || i1== r-1 || j1 ==0 || j1 == c-1){
                        flag = false
                      
                    }
                    
                    for(let k =0; k < dirs.length; k++){
                        let x1 = i1 + dirs[k][0];
                        let y1 = j1 + dirs[k][1];
                        
                        if(A[x1] && A[x1][y1] ==1){
                            count++
                            q.push([x1,y1])
                             A[x1][y1] = 0
                        }
                        
                        
                    }

                }
                
                
                if(flag){
                    console.log(count)
                    ans += count
                }
                 
            }
           
            
        }
    }
    
    
    return ans
    
};