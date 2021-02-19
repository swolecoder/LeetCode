class Solution:
    def minEatingSpeed(self, piles: List[int], H: int) -> int:
        
        
        def canfinish(k):
            h = 0;
            for n in piles:
                h += ceil(n/k)
            
            return h <= H
        
        
        
        s = sum(piles)
        print(s)
        l,r = 1, max(piles)
        
        
        while l <r:
            
            mid = (l+r)//2
            
            banna = mid * H
            
            if canfinish(mid):
                r = mid 
            else:
                l = mid +1
                
        print(l,r)
        return l
            
        