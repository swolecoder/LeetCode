/**
 * initialize your data structure here.
 */
var MaxStack = function() {
    this.stack = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    
    if(this.stack.length > 0){
        return this.stack.pop();
    }
    
    return -1;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    console.log('Ashish',this.stack)
    if(this.stack.length >0){
        return this.stack[this.stack.length-1];
    }
    
    return -1;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return Math.max(...this.stack)
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    
    if(this.stack.length > 0){
        
        let maxData = Math.max(...this.stack)
        let index = this.stack.lastIndexOf(maxData)
        this.stack.splice(index,1);
        
        return maxData;
    }
    
    return -1;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */