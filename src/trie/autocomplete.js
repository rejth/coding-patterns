/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
  this.trie = {};
  this.searchPrefix = '';

  for (let i = 0; i < sentences.length; i++) {
    this.insert(sentences[i], times[i]);
  }
};

/**
 * @param {string}
 * @return {}
 */
AutocompleteSystem.prototype.insert = function (sentence, times) {
  let node = this.trie;

  for (let char of sentence) {
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  }

  node.isEndOfWord = true;
  node.times = (node.times || 0) + times;
};

/**
 * @param {character}
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  if (c == '#') {
    this.insert(this.searchPrefix, 1);
    this.searchPrefix = '';
    return [];
  }

  this.searchPrefix += c;
  let node = this.trie;
  const result = {};

  // initial traverse
  for (const char of this.searchPrefix) {
    if (node[char]) {
      node = node[char];
    } else {
      return [];
    }
  }

  const dfs = function (root, char) {
    for (const key in root) {
      if (key == 'isEndOfWord') {
        // found a complete sentence
        if (!result[root.times]) {
          result[root.times] = []; // housekeeping initialize
        }
        result[root.times].push(char);
        result[root.times].sort();
      }

      dfs(root[key], char + key);
    }
  };

  // dfs on rest of the nodes
  dfs(node, this.searchPrefix);

  // sort and filter
  const sorted = [];
  const sortedKeys = [...Object.keys(result)].sort((a, b) => b - a);

  for (const key of sortedKeys) {
    sorted.push(...result[key]);
  }

  // take top 3 historical sentences
  return sorted.slice(0, 3);
};

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

const autocomplete = new AutocompleteSystem(['i love you', 'island', 'iroman', 'i love leetcode'], [5, 3, 2, 2]);
console.log('Example 1: ', autocomplete.input('i'));
console.log('Example 2: ', autocomplete.input(' '));
console.log('Example 3: ', autocomplete.input('a'));
console.log('Example 3: ', autocomplete.input('#'));
// console.log('Example 2: ', suggestedProducts(['king', 'kingdom', 'kit', 'kiby'], 'ki'));
// console.log('Example 3: ', suggestedProducts(['fantasy', 'fast', 'festival'], 'farm'));
