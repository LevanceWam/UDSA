const map = new Map();
let list = [1,2,3,3,3,4,5];

function mostFreq(array){
    for (let item of array){
        let count = map.has(item) ? map.get(item):0
        map.set(item,count+1)
    }

    let value = 1;

    for (let item of map.keys()){
        if (map.get(value) < map.get(item)){
            value = item;
        }
    }
    
    return value;
}   

console.log(mostFreq(list));
