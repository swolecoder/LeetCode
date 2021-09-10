class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        
        i , j = 0,0
        
        while i < len(word) and j < len(abbr):
            
            if abbr[j].isdigit() and abbr[j] > '0':
                num = abbr[j]
                
                while j+1< len(abbr) and abbr[j+1].isdigit():
                    j +=1
                    num +=abbr[j]
                
                i += int(num)-1
            else:
                
                if abbr[j] != word[i]:
                    return False
            i ,j = i +1, j +1
        
        
        print(i,j)
        
        return  i==len(word) and j==len(abbr)
        