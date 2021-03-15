/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = {};
    
    let res = [];
    function dfs(node){
        if(!node)return "";
        
        let key = `${node.val}.${dfs(node.left)}.${dfs(node.right)}`;
        
        if(map[key] == undefined)map[key]= 0;
        map[key]++;
        
        if(map[key] == 2){
            
            res.push(node)
            
        }
        
      return key
        
        
        
    }
    
    dfs(root)
    
    console.log(map)
     console.log(res)
    return res
};