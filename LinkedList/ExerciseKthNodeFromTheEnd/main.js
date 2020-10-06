let numbers = [9, 1, 2, 3, 4];

const kthFromEnd = function (input) {
    let first = 0;
    let distance = 1;
    let second = input - distance;

    while (second < numbers.length) {
        first++
        second++;
    }

    console.log(numbers[first - 1]);
}

kthFromEnd(5);