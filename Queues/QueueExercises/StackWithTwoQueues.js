const ArrayQueue = require('./ArrayQueue');

const _array = new WeakMap();

class QueueStack{
    constructor(){
        const queueOne = new ArrayQueue();
        const queueTwo = new ArrayQueue();
        _array.set(this, [queueOne, queueTwo]);
        this.sizeOne = 0;
        this.sizeTwo = 0;
    }

    push1(element){
        _array.get(this)[0].enqueue(element);
        this.sizeOne++;
    }

    push2(element){
        _array.get(this)[1].enqueue(element);
        this.sizeTwo++;
    }

    pop1(){
        if( _array.get(this)[0].isEmpty()) throw new Error('The first queue is empty');

        let emptyArray = [];

        while(!_array.get(this)[0].isEmpty()){
            emptyArray.push(_array.get(this)[0].dequeue());
        }

        let popValue = emptyArray.pop();

        while(!emptyArray.length === 0){
            _array.get(this)[0].enqueue(emptyArray.shift());
        }

        this.sizeOne--;
        return popValue;
    }

    pop2(){
        if( _array.get(this)[1].isEmpty()) throw new Error('The first queue is empty');

        let emptyArray = [];

        while(!_array.get(this)[1].isEmpty()){
            emptyArray.push(_array.get(this)[1].dequeue());
        }

        let popValue = emptyArray.pop();

        while(!emptyArray.length === 0){
            _array.get(this)[1].enqueue(emptyArray.shift());
        }

        this.sizeTwo--;
        return popValue;
    }

    peek1(){
        if( _array.get(this)[0].isEmpty()) throw new Error('The first queue is empty');

        let emptyArray = [];

        while(!_array.get(this)[0].isEmpty()){
            emptyArray.push(_array.get(this)[0].dequeue());
        }

        let popValue = emptyArray[emptyArray.length-1];

        while(!emptyArray.length === 0){
            _array.get(this)[0].enqueue(emptyArray.shift());
        }

        return popValue;
    }

    peek2(){
        if( _array.get(this)[1].isEmpty()) throw new Error('The first queue is empty');

        let emptyArray = [];

        while(!_array.get(this)[1].isEmpty()){
            emptyArray.push(_array.get(this)[1].dequeue());
        }

        let popValue = emptyArray[emptyArray.length-1];

        while(!emptyArray.length === 0){
            _array.get(this)[1].enqueue(emptyArray.shift());
        }

        return popValue;
    }

    getSize(){
        return `Queue 1: ${this.sizeOne}, Queue 2: ${this.sizeTwo}, Both: ${this.sizeOne + this.sizeTwo} `;
    }

    isEmpty1(){
        return(_array.get(this)[0].isEmpty());
    }

    isEmpty2(){
        return(_array.get(this)[1].isEmpty());
    }

}

const queue = new QueueStack();

queue.push1(1);
queue.push1(2);
queue.push1(3);

queue.push2(1);
queue.push2(2);
queue.push2(3);

console.log(queue.isEmpty2());