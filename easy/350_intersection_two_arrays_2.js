/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
*/

function intersect(nums1, nums2) {
  const hash = {};
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (!hash[nums1[i]]) {
      hash[nums1[i]] = 1;
    } else {
      hash[nums1[i]]++;
    }
  }

  for (i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]]) {
      hash[nums2[i]]--;
      result.push(nums2[i]);
    }
  }
  return result;
}

// console.log(intersect([1, 2, 2, 1], [2, 2]));
