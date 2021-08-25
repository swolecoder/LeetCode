/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    
    let map = {};
    
    for(let i=0; i < nums1.length; i++){
        map[nums1[i]] = (map[nums1[i]] || 0)+1
    }
    
    console.log(map)
    
    let res = [];
    
    for(let i=0; i < nums2.length; i++){
        
        if(nums2[i] in map){
            res.push(nums2[i]);
            
            map[nums2[i]]--;
            
            if(map[nums2[i]] ==0) delete map[nums2[i]]
        }
    }
    
    
    return res;
};