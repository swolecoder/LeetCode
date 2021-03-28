/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
       let map = {
    word1: Number.MAX_SAFE_INTEGER,
    word2: Number.MAX_SAFE_INTEGER,
    min: words.length
  }
  
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      map['word1'] = i;
    }
    
    if (words[i] === word2) {
      map['word2'] = i;
    }
    //  make sure one of word has real index so that we can calculate distance
    if (map['word1'] !== Number.MAX_SAFE_INTEGER && map['word2'] !== Number.MAX_SAFE_INTEGER){
      map['min'] = Math.min(map['min'], Math.abs(map['word1'] - map['word2']));
    }
  }
  return map['min'];
};