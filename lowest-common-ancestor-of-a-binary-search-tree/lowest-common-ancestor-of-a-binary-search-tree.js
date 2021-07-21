/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    
    let foundP = false;
    let foundQ = false;
    
    
    function dfs(t){
        if(!t)return null;
        
        let left = dfs(t.left);
        let right = dfs(t.right);
        
        if(t==p){
            foundP = true;
            return t
        }
        
        if(t==q){
            foundQ = true;
            return t
        }
        
        if(left && right)return t;
        
        return left || right
        
        
        
    }
    
    let ans = dfs(root)
    return foundP && foundQ ? ans: null;
};