const set = new Set();
const array = [1, 7, 5, 9, 2, 12, 3];

function countPairs(array){
    let output = 0;
    let index=0;

    for (let item of array){
        set.add(item)
    }    

    while (index != array.length){
         for (let item of set){
            if(item - array[index] == 2){
                output++;
            }
         }
        index++;
    }
   
    return output;
}

console.log(countPairs(array));
