/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices.length) return 0;
    
    let fb = -Infinity;
    let fs = -Infinity;
    
    let sb = -Infinity;
    let ss = -Infinity;
    
    for(let i =0; i < prices.length; i++){
        fb = Math.max(fb, -prices[i]);
        fs = Math.max(fs, fb + prices[i]);
        sb = Math.max(sb, fs - prices[i]);
        ss = Math.max(ss, sb + prices[i]);
    }
    
    return ss
};