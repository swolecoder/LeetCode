class HitCounter:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.count = [0] * 300
        self.hits = [0]*300
        

    def hit(self, timestamp: int) -> None:
        """
        Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
        """
        key = timestamp % 300
        
        if self.hits[key] != timestamp:
            self.hits[key] = timestamp
            self.count[key] = 1
        else:
            self.count[key] += 1
        

    def getHits(self, timestamp: int) -> int:
        """
        Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
        """
        
        ans = 0
        
        for i in range(300):
            if self.hits[i] > timestamp - 300:
                ans += self.count[i]
                
        return ans
        


# Your HitCounter object will be instantiated and called as such:
# obj = HitCounter()
# obj.hit(timestamp)
# param_2 = obj.getHits(timestamp)