/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
      let map = {};
    
    if(s.length < k)return false
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  let oddCount = 0;

  for (let [k, val] of Object.entries(map)) {
      console.log(val)
    if (val % 2 == 1) oddCount++;
  }
    
 console.log(map,oddCount)

  return oddCount <= k;
};