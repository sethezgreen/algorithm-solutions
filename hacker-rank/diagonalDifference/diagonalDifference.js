// pseudo code
    // receive a square matrix and calculate the absolute difference between the diagonals
    // start with the left-to-right diagonal
    // Input
        // first line is the number of rows and columns in the matrix
        // each next line describes a row
    // matrix array is an array of arrays


function diagonalDifference(arr) {
    // define sum variable
    let sum = 0
    // length of the arr is equal to the n of rows and columns
    let length = arr.length
    // split into left and right
    let left = 0
    let right = 0
    for (let i = 0; i < length; i++) {
        // left will follow the diagonal as i inc. arr[0][0], arr[1][1], arr[2][2]
        left += arr[i][i]
        // right will follow the right to left diagonl. arr[3 - 1 - 0][0]
        right += arr[length - 1 - i][i]

    }
    console.log(left)
    console.log(right)
    sum = left - right
    return Math.abs(sum)
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]))