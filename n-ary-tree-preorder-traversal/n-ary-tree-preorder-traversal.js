/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    let res = [];
    
    if(!root)return [];
    
    function dfs(node){
        if(!node)return
         
        res.push(node.val)
        for(let c of node.children){
            dfs(c)
        }
    }
    
    dfs(root)
    
    console.log(res)
    
    return res
    
};