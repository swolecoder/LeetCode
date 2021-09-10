class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        buy = prices[0]
        
        profit = 0
        
        for i in range(len(prices)):
            
            if prices[i] - buy >0:
                print(prices[i]-buy)
                profit = max(profit,prices[i]- buy)
            
            buy = min(buy, prices[i])
            
        return profit  
        