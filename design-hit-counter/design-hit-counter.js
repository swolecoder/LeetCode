/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
    this.q = [];
    this.time = 300;
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(t) {
    this.q.push(t)
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(t) {
    let c = 0;
    
    let start= Math.max(0, t-300)
    for(let i = 0; i < this.q.length; i++){
        if(this.q[i] > start && this.q[i] <= t){
            console.log("Asjhish")
            c++
        }
    }
    
    return c
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */