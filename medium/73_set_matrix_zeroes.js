/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.

Time: O(m+n)
Space: O(1)

https://dev.to/alysachan830/leetcode-in-js-matrix-zeros-2jbf

*/


const setZeroes = (matrix) => {
  // records the first row of the input matrix has 0 or not. Value is a boolean
  const firstRowHasZero = matrix[0].includes(0);

  // Scan through matrix, if there is a 0, make a record in the 1st arr in the matrix
  // which is why we start the scanning from the 2nd row
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // we have finised recording which row & col have 0
  // now we update the matrix based on the 1st row and 1st col of the matrix
  // look at 1st row in the matrix, update each row
  for (let row = 1; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      matrix[row] = Array(matrix[0].length).fill(0);
    }
  }

  // look at 1st col in the matrix, update each cell in the matrix
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // based on boolean we have created, update the 1st row of the matrix
  // reason we have 'firstRowHasZero' is because there will be an overlap of the 1st row and 1st col
  if (firstRowHasZero) matrix[0] = Array(matrix[0].length).fill(0);
  console.log('firstRowHasZero: ', matrix[0]);
  return matrix;
}



let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


 console.log(setZeroes(matrix));
