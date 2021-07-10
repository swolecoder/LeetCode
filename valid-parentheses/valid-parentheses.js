/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = {
      '(':')', '{': '}', '[':"]"
  }  
  
  let stack = [];
    
    
  for(let i =0; i < s.length;i++){
      
      let current = s[i];
      
      if(current in map){
          stack.push(current)
      }else{
          let popLast = stack.pop();
          
          if(current != map[popLast]){
              return false
          }   
          
      }
  }
    
    return stack.length == 0 ? true : false;
};