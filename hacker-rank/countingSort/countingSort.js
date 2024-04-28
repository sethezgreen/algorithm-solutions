// pseudo code
    // receive an array of integers
    // for each integer, update the index for the value in a frequency array
    // return the frequency array of index 100

function countingSort(arr) {
    // create result arr of 0's
    let result = Array(100).fill(0)
    // iterate through arr and count each value by updating the index of the result arr
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]]++
    }
    return result
}

console.log(countingSort([1,5,67,4,3]))