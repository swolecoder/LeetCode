class Solution:
    def reverse(self, x: int) -> int:
        
        sum = 0
        sign = 1
        
        if x < 0 :
            x = x * -1
            sign = sign * -1
        
        
        while x > 0:
            rem = x % 10
            sum = sum * 10 + rem
            x = x //10
            
        
        return (sum*sign if (sum < 2**31 - 1 and sum > -2**31) else 0)
        