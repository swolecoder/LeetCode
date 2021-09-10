class Solution:
    def reverse(self, x: int) -> int:
        
        data = abs(x)
        
        list_of_digits = [ int(i) for i in str(data)]
        
        reverse = list_of_digits[::-1]
        
        # print(''.join(map(str,reverse)))
        
        ans = int(''.join(map(str,reverse)))
        print(ans)
        
        if ans < 2 ** 31 -1 and ans > - 2 **31:
            
            if x > 0:
                return ans
            else:
                return ans * -1
        
        else:
            return 0
        