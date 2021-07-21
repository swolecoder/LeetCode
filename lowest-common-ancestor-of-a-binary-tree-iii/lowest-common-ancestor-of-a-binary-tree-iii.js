/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
   
   let set = new Set();
    
    while(p != null){
        set.add(p);
        p = p.parent;
    }
    
   // console.log(map)
    
    while(q != null){
        if(q && set.has(q)){
            console.log("Ashish",q)
            return q
        }
        q = q.parent;
    }
    
   return null;
};