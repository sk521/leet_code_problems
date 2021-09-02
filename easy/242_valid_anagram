/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let letterCount = {};

  for (let letter of s) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  for (let letter of t) {
    if (!letterCount[letter]) return false;
    letterCount[letter]--;
  }

  return true;
}

let string1 = "rat";
let string2 = "car";
console.log(isAnagram(string1, string2));
