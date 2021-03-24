/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  	constructor() {
        
    }
    
    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function(root) {
        
        
        let ans = [];
        
        function dfs(node){
            if(!node){
                return
            }
            
            ans.push(node.val)
            if(node.children.length){
                ans.push(node.children.length)
                for(let i =0; i < node.children.length; i++){
                    dfs(node.children[i])
                }
            }else{
                ans.push("0")
            }
        }
        dfs(root)
        
        console.log("ashish",ans)
        
        return ans.join(",")
    };
	
    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function(data) {
        const d = data.split(",")
        let index = 0;
        
        function dfs(node){
            if(!node.length)return;
      
            let val = node[index];
            index++;
            // if(val == "$")return null;
            
            let tree = new Node(val, []);
            let size = node[index];
            index++
           for(let i=0; i < size; i++){
                tree.children.push((dfs(node)))
            }
            
         
            return tree
        }
        
       return dfs(d)
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));