// pseduo code
    // receive an array
    // need to return ratio of positive, negative, and zero
    // will use the total elements in array to calculate ratio
    // can use count variables to keep track of positive, negative, and zero elements

function plusMinus (arr) {
    let positiveTotal = 0
    let negativeTotal = 0
    let zeroTotal = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveTotal++
        }
        if (arr[i] < 0) {
            negativeTotal++
        }
        if (arr[i] == 0) {
            zeroTotal++
        }
    }
    console.log((positiveTotal/arr.length))
    console.log((negativeTotal/arr.length))
    console.log((zeroTotal/arr.length))
}

// test cases

plusMinus([1,1,0,-1,-1])