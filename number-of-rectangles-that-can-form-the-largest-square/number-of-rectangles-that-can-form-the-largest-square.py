class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        
        res = []
        
        for i in range(len(rectangles)):
            a,b = rectangles[i]
            res.append(min(a,b))
         
        return sum(1 for s in res if s == max(res))
        