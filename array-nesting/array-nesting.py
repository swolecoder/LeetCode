class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
        
        length = len(nums)
        visited = [False] * length;
        
        ans = 0;
        
        for num in nums:
            length = 0
            start = num
            
            while  not visited[start]:
                length +=1
                visited[start] = True
                start = nums[start]
            
            
            ans = max(length, ans)
        
        return ans
        