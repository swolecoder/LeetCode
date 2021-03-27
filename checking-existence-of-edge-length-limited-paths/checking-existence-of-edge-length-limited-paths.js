/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */

class DS {
  constructor(n) {
    this.id = [...Array(n).keys()];
    this.rank = Array(n).fill(0);
  }
  
  find(i) {
    if (i !== this.id[i]) this.id[i] = this.find(this.id[i]);
    return this.id[i];
  }
  
  union(i, j) {
    const [I, J] = [this.find(i), this.find(j)];
    if (I === J) return false;
    const [rankI, rankJ] = [this.rank[I], this.rank[J]];
    if (rankI < rankJ) this.id[I] = J;
    else if (rankI > rankJ) this.id[J] = I;
    else {
      this.id[I] = J;
      this.rank[J]++;
    }
    return true;
  }
}


var distanceLimitedPathsExist = function(n, edgeList, queries) {
    let parent = new Array(n+1);
  for(let i =0; i <= n; i++){
      parent[i] = i;
  }
        const find = (x)=>{
        if(x == parent[x])return x;
        
        x = find(parent[x])
    }
    
    const union = (a,b)=>{
        let a1 = find(a)
        let b1 = find(b)

        if(a1 != b1){
            parent[b1]= a1;
        }
    }
    
  queries = queries.map((n, i) => [...n, i]).sort((a, b) => a[2] - b[2]);
  edgeList.sort((a, b) => a[2] - b[2]);
  
  const res = Array(queries.length);
  const ds = new DS(n);
  
  let j = 0;
  for (let [p, q, limit, i] of queries) {
    while (j < edgeList.length && edgeList[j][2] < limit) {
      const [u, v, dis] = edgeList[j];
      ds.union(u, v);
      j++;
    }
    res[i] = ds.find(p) === ds.find(q);
  }
  
  return res;
    
    
//   let parent = new Array(n+1);
//   for(let i =0; i <= n; i++){
//       parent[i] = i;
//   }
//     //https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/discuss/981834/Wrong-Answer-Naive-DFSBFS-test-case-2-(works-on-sample-case)
    
//     const find = (x)=>{
//         if(x == parent[x])return x;
        
//         x = find(parent[x])
//     }
    
//     const union = (a,b)=>{
//         let a1 = find(a)
//         let b1 = find(b)

//         if(a1 != b1){
//             parent[b1]= a1;
//         }
//     }
//     //sorty by the distance 
//     edgeList.sort((a,b)=> a[2] - b[2]);

//     let q = [];
//      for(let i =0; i < queries.length; i++){
//            q.push([i,...queries[i]])
    
//        }  
//     console.log(q)
//     q.sort((a,b)=> a[3]-b[3])
    
//     let j = 0;
//     let ans = [];
//      const ds = new DS(n);
//      for(let i =0; i < q.length; i++){
//          let [a,b,c,d] = q[i]
//          while(j < edgeList.length &&edgeList[j]?.[2] < d){
//              ds.union(edgeList[j][0], edgeList[j][1]); //uniuon b and c
//              j++
//          }
         
//          //do stuff
//          if(ds.find[b]== ds.find(c)){
//              ans[a] = true
//          }else{
//              ans[a] = false
//          }
         
//      }
    
    
    
    
    
    
//     console.log(ans)
    
    
//     return ans
    
    
};