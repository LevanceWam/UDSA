const SimpleHashTable = require('simple-hashtable');
const map = new SimpleHashTable();
let string = 'a green apple';

function nonRepeat(string){
    for (let ch of string){
        //        This is the conditon    if true run    0 is else
        let count = map.containsKey(ch) ? map.get(ch) : 0;
        map.put(ch, count+1);
    }
    
    for (let ch of string){
        if (map.get(ch) == 1) return ch;
    }
     
    return 0;
}

let result = nonRepeat(string)
console.log(result);