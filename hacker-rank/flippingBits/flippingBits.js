// psuedo code
    // receive a list of 32 bit unsigned integers
        // unsigned integers do not have a bit at the beginning that represents the sign of the number
        // signed integers will be represented as positive by 0 and negative as 1; this is the first bit
        // bit is short for binary digit
        // unsure why this solution works, need to research further

function flippingBits(n) {
    return (2**32) - 1 - n
}

