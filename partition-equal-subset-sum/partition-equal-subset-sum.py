class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        totalSum = sum(nums)
        print(totalSum)
        if totalSum % 2 != 0:
            return False
        dpLen = int(totalSum /2)
        
        dp = [False] * (dpLen +1)
        print(dp)
        
        dp[0] = True
        
        for num in nums:
            for j in range(dpLen,num-1,-1 ):
                dp[j] = dp[j] or dp[j-num]
                
        return dp[dpLen]
        