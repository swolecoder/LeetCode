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
    
    
    function postOrder(tree){
        
        if(!tree)return null;
        
        let left = postOrder(tree.left);
        let right = postOrder(tree.right);
        
        if(tree == p){
            foundP = true;
            return tree
        }
        
         if(tree == q){
            foundQ = true;
            return tree
        }
        
        
        
        if(left&&right)return tree;
        
        
        return left || right;
    }
    
    
    
    let ans = postOrder(root);
    
    console.log(ans,foundQ,foundP)
    
    return foundQ&& foundP ? ans:null;
};