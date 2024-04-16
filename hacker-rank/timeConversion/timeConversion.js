// pseudo code
    // receive a string time in 12 hr format
    // check if 12:
        // if AM subtract 12 from hour
        // if PM return
    // check if AM
        // remove AM and return
    // if PM, add 12 and return
    // remove AM/PM format

function timeConversion(s) {
    // set variables
    var hour = Number(s[0] + s[1])
    var min = s[3] + s[4]
    var sec = s[6] + s[7]

    // check if hour is 12
    if (hour == 12) {
        if (s[8] === "A") {
            hour -= 12
            return (`0${hour}:${min}:${sec}`)
        }
        return (`${hour}:${min}:${sec}`)
    }

    if (s[8] === "A") {
        // check if hour is one character, then add "0" to format
        if (String(hour).length < 2) {
            hour = "0" + String(hour)
        }
        return (`${hour}:${min}:${sec}`)
    } else {
        hour += 12
        return (`${hour}:${min}:${sec}`)
    }
}

// test cases

console.log(timeConversion("07:05:45PM"))
console.log(timeConversion("07:05:45AM"))
console.log(timeConversion("12:55:45AM"))
console.log(timeConversion("12:55:45PM"))