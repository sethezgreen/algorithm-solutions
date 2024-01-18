// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

const applesAndOranges = (s, t, a, b, apples, oranges) => {
    let applesOnHouse = 0
    let orangesOnHouse = 0

    apples.forEach((apple) => {
        if ((apple + a) >= s && (apple + a) <= t) {
            applesOnHouse++
        }
    })
    
    oranges.forEach((orange) => {
        if ((orange + b) >= s && (orange + b) <= t) {
            orangesOnHouse++
        }
    })

    console.log(applesOnHouse)
    console.log(orangesOnHouse)
}

applesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])