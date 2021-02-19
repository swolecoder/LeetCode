class Solution:
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        l ,r = 1, max(nums)
        
        while l <=r :
            mid = (l + r ) //2
            
            s = sum(math.ceil(n/mid) for n in nums)
            
            if s > threshold:
                l = mid+1
            else:
                r = mid -1
        
        return l
        