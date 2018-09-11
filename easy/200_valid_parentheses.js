let isValid = (s) => {
  let hash = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  }
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === hash[s[i]]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  return arr.length === 0 ? true : false;
}

console.log(isValid('()'));
