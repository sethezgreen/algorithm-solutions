// pseduo code
    // recieve an array of five positive integers
    // filter max, add other five for min sum
    // filter min, add other four for max sum
    // print min and max sum

function miniMaxSum (arr) {
    let min = arr[0]
    let max = arr[0]
    let minSum = arr[0]
    let maxSum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        minSum += arr[i]
        if (arr[i] > max) {
            max = arr[i]
        }
        maxSum += arr[i]
    }
    minSum -= max
    maxSum -= min
    console.log(minSum + " " + maxSum)
}

// test cases

miniMaxSum([1,2,3,4,5])
miniMaxSum([7, 69, 2, 221, 8974])