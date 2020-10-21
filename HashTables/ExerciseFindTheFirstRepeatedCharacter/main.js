const mySet = new Set();
const string = 'green apple';

function firstRepeat(string){
    for(let ch of string){
       if (mySet.has(ch)) return ch;
       mySet.add(ch);
    }
}

console.log(firstRepeat(string))