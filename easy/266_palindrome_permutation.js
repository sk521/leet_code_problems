/*

Given a string s, return true if a permutation of the string could form a palindrome.

*/


const canPermutePalindrome = (str) => {
  let letterCount = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!letterCount.has(str[i])) {
      letterCount.add(str[i]);
    } else {
      letterCount.delete(str[i]);
    }
  }

  if (letterCount.size > 1) {
    return false;
  }

  return true;
}

// let str = "code"; // false
let str = "aab"; // true;

console.log(canPermutePalindrome(str));
