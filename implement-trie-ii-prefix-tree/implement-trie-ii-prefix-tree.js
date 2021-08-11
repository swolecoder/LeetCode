
var Trie = function() {
    this.root = {count:0, subcount:0}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
   let node = this.root
    for (const ch of word) {
        node.subcount++
        if (!node[ch])
            node[ch] = { count: 0, subcount: 0 }
        
        node = node[ch]
        
    }
    node.count++
    node.subcount++
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
     let root = this.root;
 //   console.log(root)
    for(let w of word){
       if(root[w]== undefined)return 0
      root = root[w]
    }
  //  consle.log(root)
    
    return root.count
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
     let root = this.root;
    
    for(let w of prefix){
      if(root[w]== undefined)return 0
      root = root[w]
    }
    
    return root.subcount
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
      let root = this.root;
    
    for(let w of word){
      root.subcount--;
      if(root[w]==undefined)return 
      root = root[w]
    }
    root.count--
   root.subcount--
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */