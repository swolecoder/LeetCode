class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        R = len(mat)
        C = len(mat[0])
        
        if R * C != r * c :
            return mat
        
        res = [[0] * c for _ in range(r)]
        
        sr = 0
        sc =0
        for i in range(0,len(mat)):
            for j in range(0,len(mat[0])):
                
                if sc == c:
                    sr +=1
                    sc =0
                
                res[sr][sc] = mat[i][j]
                sc +=1
        return res
                
        
        