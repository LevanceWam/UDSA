let array1 = [1,2,3,9];
let array2 = [1,2,4,4];

let hashSet = new Set();

function twoSum(array, value){
    // created a counter to get specific element out of the array
    let index = 0;

    // adding all of the elements in the set because this is a faster look up that runs in O(1)
    for (let item of array){
        hashSet.add(item)
    }

    while (index != array.length){
        for (let item of hashSet){
            if (item + array[index] == value) return item + ', ' + array[index];
        }
        index++;
    }
    return 'This array does not return this value.'
}

let result = twoSum(array1, 10);
console.log(result);
