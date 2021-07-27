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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    let res = null;
    if(!root)return null;
    
    function helper(node){
        if(!node)return;
        
        let left = height(node.left);
        let right = height(node.right);
        
        if(left == right){
            res = node;
            return node;
            
        }else{
            
            if(left > right){
                helper(node.left)
            }else{
                helper(node.right)
            }
        }
    }
    
    helper(root);
    
    return res;
    
};




function height(node){
    if(!node)return 0;
    let left = height(node.left);
    let right = height(node.right);
    
    return Math.max(left,right)+1;
}