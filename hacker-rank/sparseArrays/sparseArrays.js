// psuedo code
    // receive an array of strings and array of queries
    // need to look for how many occurences of the queries exist within the array of strings
        // will look through each element in the strings array and check if it matches the current query, if it does we can add to the count
    // return a result array with values of occurences
        // could have count for each query and push into the array

function matchingStrings(strings, queries) {
    // define results array to return
    let results = []
    // iterate through queries
    for (let i = 0; i < queries.length; i++) {
        // define count
        let count = 0
        // iterate through strings
        for (let x = 0; x < strings.length; x++) {
            // check if each string element matches the query
            if (strings[x] === queries[i]) {
                count ++
            }
        }
        // push count to results
        results.push(count)
    }
    return results
}

console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]))
console.log(matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"]))