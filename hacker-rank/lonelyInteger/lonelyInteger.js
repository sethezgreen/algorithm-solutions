// pseudo code
    // recieve an array of integers, where each will occur twice besides one
    // find and return the one integer that does not occur twice
    // will need a way to keep track of how many occurrences there are of each element
    // iterate through array once
        // store the values already seen
        // if value has been seen, ignore it
        // value that has not been seen becomes the return

function lonelyInteger(arr) {
    // sort the ints
    arr = arr.sort()
    // define return variable
    let loneInt
    // iterate sorted array, checking if either element next to the current is equal
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i + 1] || arr[i] !== arr[i - 1]) {
            loneInt = arr[i]
        }
    }
    return loneInt
}

console.log(lonelyInteger([1,2,3,4,3,2,1]))