const ArrayQueue = require('./ArrayQueue');

const queue = new ArrayQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

function queueReverse(k){
    if(queue.isEmpty()) throw new Error('The Queue is empty');
    if(k > queue.length())throw new Error('Can not be greater than Queue length');
    if (k === 0 || k === 1) return;

    let array = [];
    while(!queue.isEmpty()){
        array.push(queue.dequeue());
        if (array.length === k) array.reverse();
    }

    while(!array.length == 0){
        queue.enqueue(array.shift());
    }
}

queueReverse(5);
console.log(queue.getQueue());