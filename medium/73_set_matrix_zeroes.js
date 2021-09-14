/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.

*/


const setZeroes = (matrix) => {
  const firstRowHasZero = matrix[0].includes(0);

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      matrix[row] = Array(matrix[0].length).fill(0);
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRowHasZero) matrix[0] = Array(matrix[0].length).fill(0);
  return matrix;
}



let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


 console.log(setZeroes(matrix));
