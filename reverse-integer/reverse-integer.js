/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let max = Math.pow(2,31) -1;
    let min = -Math.pow(2,31);
    
    let data = x.toString().split("");
    let negativeFalg = false;
    
    if(data[0] == "-")negativeFalg = true;
    
    let res = "";
    
    for(let i =data.length-1; i >=0; i--){
        if(negativeFalg && i== 0)continue;
        res += data[i]       
    }
    
    if(Number(res) >= max || Number(res) <= min)return 0;
    
    return negativeFalg ? -Number(res) : Number(res)
};