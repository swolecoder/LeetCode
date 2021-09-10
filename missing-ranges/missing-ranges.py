class Solution:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
        data = [lower-1] + nums + [upper+1]
        print(data)
        
        ans = []
        
        for i in range(1, len(data)):
            diff = data[i] - data[i-1]
            
            if diff == 2:
                ans.append(str(data[i]-1))
            elif diff > 2:
                val = str(data[i-1]+1) + "->"+ str(data[i]-1)
                ans.append(val)
        
        return ans