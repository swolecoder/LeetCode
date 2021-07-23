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
var diameterOfBinaryTree = function(root) {
    
    if(!root)return 0;
    
    let left = height(root.left);
    let right = height(root.right);
    
    let subTreeL = diameterOfBinaryTree(root.left);
    let subTreeR = diameterOfBinaryTree(root.right)
    
    return Math.max(left+right, Math.max(subTreeL,subTreeR))
};


  function height(node){
        if(!node)return 0;
        let left = height(node.left);
        let right = height(node.right);
        
        return 1 + Math.max(left,right)
  }
    