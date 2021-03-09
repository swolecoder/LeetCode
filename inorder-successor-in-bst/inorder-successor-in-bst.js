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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
   if(!root) return null
    
    let curr = root, prev = null
    
    while(curr){
        if(curr.val > p.val){
            prev = curr
            curr = curr.left
        }else{
            curr = curr.right
        }
    }
    
    return prev
};