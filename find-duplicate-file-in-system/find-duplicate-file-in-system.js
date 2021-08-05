/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let map = {};
    
    for(let i =0; i < paths.length; i++){
        let data = paths[i].split(" ");
        
        for(let i =1; i < data.length; i++){
            let f = data[i].split("(");
            
            if(map[f[1]] == undefined)map[f[1]] = [];
            
            map[f[1]].push(data[0]+"/"+f[0])
        }
        
    }
    
    console.log(map)
    
    let res = Object.values(map).filter((d)=> d.length > 1);
    
    return res
};