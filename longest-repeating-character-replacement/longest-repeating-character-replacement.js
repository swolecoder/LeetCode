/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
      let start = 0;
  let charArray = new Array(26).fill(0);

  let maxCount = 0;
  let max = -Infinity;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    charArray[c.charCodeAt() - 65]++;
    maxCount = Math.max(charArray[c.charCodeAt() - 65], maxCount);

    let windowSize = i - start + 1; //size of the window

    if (windowSize - maxCount > k) {
      charArray[s[start].charCodeAt() - 65]--;
      start++;
    } else {
      max = Math.max(max, windowSize);
    }
  }

  return max == -Infinity ? 0 : max;
};