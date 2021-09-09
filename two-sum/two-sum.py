from collections import defaultdict
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dic = defaultdict()
        
        for i in range(len(nums)):
            find = target - nums[i]
            
            if find in dic:
                return [dic[find],i]
            
            dic[nums[i]] = i
            
        
        
        