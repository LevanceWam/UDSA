let log = function (num) { // O(n^2)
    for (let number of num) console.log(number); //O(n)
    // O(n^2)
    for (let first of num) { // O(n)
        for (let second of num) { // O(n)
            console.log(first + ',' + second)
        }
    }
}

let go = function (num) {
    // O(n^3)
    for (let first of num) { // O(n)
        for (let second of num) { // O(n)
            for (let third of num) { // O(n)
                console.log(first + ',' + second + ',' + third)
            }
        }
    }
}