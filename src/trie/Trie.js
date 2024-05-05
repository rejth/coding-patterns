/**
 * A Trie (also known as a Prefix Tree) is a tree data structure that stores a set of strings, and is particularly useful for searching for words with a given prefix.
 * A Trie is constructed to represent a set of strings where each node is a single character of a string.
 * The path from the root node to a particular node represents the characters of a specific string.
 * This structural characteristic allows Tries to effectively share common prefixes among strings, leading to efficient storage and retrieval.
 *
 * The trie is represented as a tree, where each node contains an array of pointers (or references) to its children and a boolean flag indicating if the current node marks the end of a word.
 *
 * There are various applications of this data structure, such as autocomplete suggestions, spell checking, or searching in dictionaries or databases.
 */
var TrieNode = function () {
  this.children = {};
  this.isEndOfWord = false;
};

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Insert a word into the trie
 *
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (const char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }

  node.isEndOfWord = true;
};

/**
 * Check if there is the word in the trie
 *
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;

  for (const char of word) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }

  return node.isEndOfWord;
};

/**
 * Check if there is a previously inserted word that has the search prefix
 *
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (const char of prefix) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }

  return true;
};

/**
 * DFS to find all words with the given search prefix
 *
 * @param {TrieNode} node
 * @param {string[]} searchResult
 * @param {string} word
 * @param {number} limit
 * @return {void}
 */
Trie.prototype.dfs = function (node, searchResult, word, limit) {
  if (searchResult.length === limit) return;
  if (node.isEndOfWord) {
    searchResult.push(word);
  }

  for (const char in node.children) {
    this.dfs(node.children[char], searchResult, word + char);
  }
};

/**
 * Search the trie for all words starting with search prefix
 *
 * @param {string} prefix
 * @param {number} limit
 * @return {string[]}
 */
Trie.prototype.searchAll = function (prefix, limit) {
  let node = this.root;
  const searchResult = [];

  for (const char of prefix) {
    if (!node.children[char]) {
      return searchResult;
    }
    node = node.children[char];
  }

  this.dfs(node, searchResult, prefix, limit);
  return searchResult;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
