/*

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Time complexity : O(n^2).
Space complexity : O(1).


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

*/


const rotate = (matrix) => {
  let N = matrix.length;
  let N2 = Math.floor(N / 2);

  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][N - 1 - j];
      matrix[i][N - 1 - j] = temp;
    }
  }
  return matrix;
}

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// Output: [[7,4,1],[8,5,2],[9,6,3]]

let matrix = [[1,2],[3,4]];
// Output: [[3,1],[4,2]]

console.log(rotate(matrix));
