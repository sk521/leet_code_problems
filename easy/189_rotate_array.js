/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/


function rotate(nums, k) {
  k = k % nums.length;
  while(k--) {
    // places 7,6,5 into the front of the array
    nums.unshift(nums.pop());
  }
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));


