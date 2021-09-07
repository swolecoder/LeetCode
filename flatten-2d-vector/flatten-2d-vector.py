class Vector2D:

    def __init__(self, vec: List[List[int]]):
        self.a = []
        # print()
        self.flatten(vec)
        print(self.a)
    
    
    def flatten(self,list):

        for i in range(len(list)):
 
            if type(list[i]) is int:
                self.a.append(list[i])
                # print("HI")
            else:
                self.flatten(list[i])
        
        

    def next(self) -> int:
        
        return self.a.pop(0)
        

    def hasNext(self) -> bool:
        
        return len(self.a) > 0
        


# Your Vector2D object will be instantiated and called as such:
# obj = Vector2D(vec)
# param_1 = obj.next()
# param_2 = obj.hasNext()