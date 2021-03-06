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

const mod = Math.pow(10,9) +7
var maxProduct = function(root) {
    
    
    const totalSum = (root)=>{
        if(!root)return 0;
        
        let left = totalSum(root.left);
        let right = totalSum(root.right);
        
        return (root.val + left + right) % mod
    }
    
    let total  = totalSum(root);
    let max = -Infinity

    const maxP = (root)=>{
        if(!root) return 0;
        
        let left = maxP(root.left)
        let right = maxP(root.right)
        
        max = Math.max(max, left* (total- left))
        max = Math.max(max, right* (total- right))
        
        return (root.val + left + right)% mod
        
    }
    
    console.log(total)
        maxP(root)
    return max % mod
};