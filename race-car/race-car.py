class Solution:
    def racecar(self, target: int) -> int:
        q = collections.deque([(0,1,0)])
        visited = set([(0,1)])
        
        while q:
            pos, speed, steps = q.popleft();
            
            k1 = (pos + speed , speed * 2)
            k2 = -1 if speed > 0 else 1
            
            if(pos == target):
                return steps 
            
            if not k1 in visited:
                visited.add(k1)
                q.append((pos + speed , speed * 2,steps+1))
            
            if not (pos,k2) in visited:
                visited.add((pos,k2))
                q.append((pos,k2,steps+1))
        
        
        return -1
          