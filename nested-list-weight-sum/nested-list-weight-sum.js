/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
    
    
    let sum = 0;
    
    let d = 1;
    
    function helper(array,d){
        
        for(let i=0; i < array.length;i++){
            
            // if(Array.isArray(array[i].getList())){
            //     console.log("Ashish")
            //     helper(array[i],d+1)
            // }else{
            //     sum += d * array[i];
            //     console.log(sum, array[i])
            // }
            
            if(array[i].isInteger()){
                sum += d * array[i].getInteger();
            }else{
                helper(array[i].getList(),d+1);
            }
            
        }
 
    }
    
    
    
    helper(nestedList,d)
    
    console.log(sum)
    
    return sum;
    
};