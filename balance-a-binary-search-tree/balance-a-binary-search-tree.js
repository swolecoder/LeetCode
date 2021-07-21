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
var balanceBST = function(root) {
    
    let res = [];
    
    function dfs(tree){
        if(!tree)return
         dfs(tree.left);
        res.push(tree.val);
        dfs(tree.right);
    }
    
    dfs(root);
    
    console.log(res)
    
    if(!res.length) return [];
    
    function buildTree(arr){
        if(!arr.length)return null;
        let m = Math.floor(arr.length/2)
        let node = new TreeNode(arr[m]);
        node.left = buildTree(arr.slice(0,m));
        node.right = buildTree(arr.slice(m+1));
        
        return node
    }
    
     // console.log(buildTree(res))
    let ans = buildTree(res);
    console.log(ans)
    return ans
};