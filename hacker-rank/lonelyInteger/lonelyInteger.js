// pseudo code
    // recieve an array of integers, where each will occur twice besides one
    // find and return the one integer that does not occur twice
    // will need a way to keep track of how many occurrences there are of each element
    // iterate through array once
        // store the values already seen
        // if value has been seen, ignore it
        // value that has not been seen becomes the return

function lonelyInteger(arr) {
    let seen = []
    // sort the array
    arr = arr.sort()
    // iterate the array backwards
    for (let i = arr.length - 1; i >= 0; i--) {
        // check if arr[i] is in seen
        if (seen.includes(arr[i])) {
        } 
        else if (arr[i] == arr[i - 1]) {
            seen.push(arr[i])
        }
        else {
            return arr[i]
        }
    }
}

console.log(lonelyInteger([4,2,3,4,3,2,1]))
console.log(lonelyInteger([1,2,3,4,3,2,1]))