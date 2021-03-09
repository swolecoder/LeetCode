/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
      let start = 0;
  let map = {};
  for (let char of t) {
    map[char] = (map[char] || 0) + 1;
  }

  let startString = 0;
  let endString = s.length + 1;

  let count = 0;

  for (let j = 0; j < s.length; j++) {
    let char = s[j];

    if (map[char] != undefined) {
      map[char]--;
      if (map[char] >= 0) {
        count++;
      }
    }

    //count =1

    while (count == t.length) {
      if (endString > j - start + 1) {
        endString = j - start + 1;
        startString = start;
      }
      let c = s[start];
      start++;

      if (map[c] != undefined) {
        if (map[c] == 0) {
          count--;
        }
        map[c]++; //put it back
      }
    }
  }

  if (endString > s.length) return "";

  console.log(start, start + endString);
  return s.substring(startString, startString + endString);
};