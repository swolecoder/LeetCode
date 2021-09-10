class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        
       
       
        flowerbed = [0] + flowerbed + [0]
        print(len(flowerbed))
        
        for i in range(1,len(flowerbed)-1):
            
            if i == 1 and flowerbed[i-1] == 0 and flowerbed[i+1]==0 and flowerbed[i]==0 and n > 0:
                flowerbed[i] = 1
                n -=1
                print("n2",n)
            elif i == len(flowerbed)-1 and flowerbed[i-1] == 0 and flowerbed[i+1] == 0 and n > 0 :
                n -=1
                print("n1",n)
            elif flowerbed[i] == 0 and flowerbed[i-1]==0 and flowerbed[i+1]== 0 and n > 0:
                flowerbed[i] =1
                n -=1
                print("n2",n)
            
        print(n,flowerbed)
        
        
        return (True if n == 0 else False)
        