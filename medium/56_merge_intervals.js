function merge(arr) {
  let merged = [];
  let last;

  arr.forEach((ele) => {
    if (!last || ele[0] > last[1]) {
      merged.push(last = ele);
    } else {
      last[1] = ele[1];
    }
  });

  return merged;
}

let arr = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log(merge(arr));
