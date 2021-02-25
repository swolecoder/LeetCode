/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  
    if(!root) return 0;
    let max = 0;
    for(let child of root.children){
        max = Math.max(maxDepth(child), max )
    }
    
    return max +1
};