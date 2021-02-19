class Solution:
    def findBestValue(self, arr: List[int], target: int) -> int:
        arr.sort()
        
        N = len(arr)
        
        for n in arr:
            sol = round(target/N)
            
            if n >= sol:
                return sol
            
            target = target - n
            N = N-1
        
        return arr[-1]
        