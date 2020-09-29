let numbers = [1, 3, 4, 5, 6, 7];

const log = function (array) {
    for (let number of array) {
        console.log(number)
    }
    for (let number of array) {
        console.log(number)
    }
}



const log2 = function (array, str) {
    // overall this equals O(n)
    console.log(); // O(1)
    for (let i = 0; i < array.length; i++) { // O(n)
        console.log(i)
    }

    for (let name of str) {
        console.log(name);
    }
    console.log(); // O(1)
}

log(numbers);
log2(numbers);