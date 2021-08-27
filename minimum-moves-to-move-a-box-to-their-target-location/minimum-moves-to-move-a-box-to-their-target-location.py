from collections import deque
class Solution:
    def minPushBox(self, grid: List[List[str]]) -> int:
        self.m = len(grid)
        self.n = len(grid[0])
        self.dirs = [(1,0),(0,1),(-1,0),(0,-1)]
        
        
        for i in range(self.m):
            for j in range(self.n):
                if grid[i][j] == 'B':
                    box = (i,j)
                if grid[i][j] == 'S':
                    person = (i,j)
                if grid[i][j] == 'T':
                    target = (i,j)
                    
        def isvalid(x,y):
            return  0<= x < self.m and 0<= y < self.n and grid[x][y] != '#'
        
        def check(curr,dest,box):
            q =deque()
            q.append(curr)
            visited = set(curr)
            while q:
                curr = q.popleft()
                
                if curr == dest: 
                    return True
                
                for dir_ in self.dirs:
                    r = curr[0] + dir_[0]
                    c = curr[1] + dir_[1]
                    
                    if isvalid(r,c) and (r,c) not in visited and (r,c) != box:
                        q.append((r,c))
                        visited.add((r,c))
            return False
        
        
        q = deque([(0,box,person)])
        
        visited = set((box,person))
        
        while q :
            dis , box, person = q.popleft()
            
            if box == target :
                return dis
            
            for dir_ in self.dirs:
                
                new_box_x = dir_[0] + box[0]
                new_box_y = dir_[1] + box[1]
                
				#person is always behind box
                new_person_x = box[0] - dir_[0]
                new_person_y = box[1] - dir_[1]
                
                new_box = (new_box_x,new_box_y)
                new_person = (new_person_x,new_person_y) 
                
                if isvalid(new_box_x,new_box_y) and isvalid(new_person_x,new_person_y) and check(person,new_person,box) and (new_box,new_person) not in visited:
                        visited.add((new_box,new_person))
                        q.append(( dis +1, new_box, new_person))
        return -1
            
                    
                
            
                
                
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
        