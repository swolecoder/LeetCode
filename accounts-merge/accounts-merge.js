/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    /*
    [["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"], 
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"], 
    ["Mary", "mary@mail.com"]]

    */
    
    let graph = {};
    let nameToEmail = {};
    for(let [name, ...emails] of accounts){
        nameToEmail[emails[0]] = name;
        for(let i=0; i < emails.length; i++){
            graph[emails[0]] = (graph[emails[0]] || new Set()).add(emails[i])
            graph[emails[i]] = (graph[emails[i]] || new Set()).add(emails[0])
        }
    }
    

    let set = new Set();
    
    let result = []
    for(let [key,val] of Object.entries(graph) ){
       console.log(nameToEmail[key])
        if(set.has(key))continue;
         let res = new Set()
          dfs(key,res)
        result.push([nameToEmail[key],...Array.from(res).sort()])
        console.log(res)
        
        
    }
    
    
    return result
    
    function dfs(node, res){
        
        if(graph[node]){
            if(typeof node != undefined)res.add(node)
           // console.log(node)
              for(let child of Array.from(graph[node])){
                    if(!set.has(child)){
                        set.add(child)
                        dfs(child, res)
                    }
              
              }
        }
      
    }
    
    
    
};