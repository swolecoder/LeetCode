# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        
        res = []
        
        def dfs(root):
            if not root:
                res.append("$")
                return 
            res.append(str(root.val))
            dfs(root.left)
            dfs(root.right)
        
        dfs(root)
        
        # print(','.join(res))
        return ','.join(res)
        

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        data = data.split(",")
        print(data)
        
        index = 0
        
        def build(arr):
            
            if len(arr) == 0:
                return
            
            
            if arr[0] == "$":
                arr.pop(0)
                return 
            
            val = arr.pop(0)
            
            # index +=1
            
            root = TreeNode(val)
            root.left = build(arr)
            root.right = build(arr)
            
            return root
              
        
        return build(data)
        

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))