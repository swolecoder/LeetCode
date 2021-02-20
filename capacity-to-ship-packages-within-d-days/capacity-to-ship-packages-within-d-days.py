class Solution:
    def shipWithinDays(self, weights: List[int], D: int) -> int:
        def ok(mid):
            h = 0;
            c = 0;
            
            for n in weights:
                c +=n
                
                if c > mid:
                    h +=1
                    c = n
            # print(h,D)
            return h+1 <= D
        
        
        i = max(weights)
        j = sum(weights)
        
        
        while i < j:
            mid = (i +j)//2
            
            if(ok(mid)):
                print(mid)
                j = mid
            else:
                i = mid +1
        
        return j
    
        