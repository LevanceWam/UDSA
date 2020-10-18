class HashTable{
    constructor(){
        this.entries = {};
        this.length =0;
}

    hashFunc(key){
        return key % this.entries.length;
    }

    put(key, value){
        const hash = this.hashFunc(key);
        if (!this.entries.hasOwnProperty(hash)){
            this.entries[hash] = {}
        }
        
        this.entries[hash][key] = value;
        this.length++;
    }

    get(key){
        const hash = this.hashFunc(key);
        if (this.entries.hasOwnProperty(hash) && this.entries[hash].hasOwnProperty(key)) {
            return this.entries[hash][key];
          } else {
            return null;
          }
    }

    remove(key){
        const hash = this.hashFunc(key);
        if (this.entries.hasOwnProperty(hash) && this.entries[hash].hasOwnProperty(key)){
            delete this.entries[hash][key];
            this.length--;
        }
    }

    containKey(key){
        const hash = this.hashFunc(key);
        return (this.entries[hash].hasOwnProperty(key))
    }

    containValue(value){
        const hash = this.hashFunc(this.length);
        let data = this.entries[hash];
        for(let keys in data){
            if (data[keys] === value) {
                return true;
            }
        }
        return false;
    }
}

const map = new HashTable();
map.put(1,'jim');
map.put(2,'ci');
map.put(3,'c');
map.remove(2);
console.log(map.containValue('jim'))