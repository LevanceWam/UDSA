const _items = new WeakMap();

class PriorityQueue {
    constructor(){
        _items.set(this, []);
        this.count = 0;
    }

    add(item){
        let i = this.shiftItemsToInsert(item);
    
        _items.get(this)[i] = item;
        this.count++;
    }

    shiftItemsToInsert(item){
        let i;
        
        for(i = this.count-1; i >= 0; i--){
            if(_items.get(this)[i] > item) _items.get(this)[i + 1] = _items.get(this)[i];
            else break;
        }

        return i + 1;
    }

    remove(){
        this.count--;
        return  _items.get(this).pop();
    }

    getPQ(){
        return _items.get(this);
    }

    isEmpty(){
        return count == 0;
    }
}

module.exports = PriorityQueue;