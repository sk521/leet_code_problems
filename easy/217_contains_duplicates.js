/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
*/

/*
function containsDuplicates(arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] === undefined) {
      hash[arr[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));  // true
*/

/*
Using a hash solution here:
time complexity: O(n) linear
space complexity: space used by hash is linear with # of ele in it.
*/



// ALT SOLUTION USING A HASH

const containsDuplicates = (nums) => {
  let setOfNums = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (setOfNums.has(nums[i])) {
      return true;
    } else {
      setOfNums.add(nums[i]);
    }
  }
  return false;
}


console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([1,2,3,4]));
