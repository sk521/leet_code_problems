/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/



function moveZeroes(nums) {
  let i = 0;
  let j = 0;

  while(j < nums.length) {
    if (nums[j] === 0) {
      j++;
    } else {
      nums[i] = nums[j];
      i++;
      j++;
    }
  }

  while (i < nums.length) {
    nums[i++] = 0;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
