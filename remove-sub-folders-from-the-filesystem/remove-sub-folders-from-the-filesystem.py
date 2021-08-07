class Solution:
    def removeSubfolders(self, folder: List[str]) -> List[str]:
        folders = folder
        
        folder.sort()
        
        res = []
        start=" "
        
        for f in folders:
            if not f.startswith(start):
                res.append(f)
                start = f + "/"
                
        return res
        