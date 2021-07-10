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
 * @return {number}
 */
var minDepth = function(root) {
    let ans = 100000
    
    function dfs(root, c){
        if(!root)return
        
        if(!root.left && !root.right){
            ans = Math.min(ans,c)
        }
        
        dfs(root.left, c+1)
        dfs(root.right,c+1)
    }
    
    dfs(root,1)
    
    console.log(ans)
    
    return ans === 100000 ? 0: ans
};