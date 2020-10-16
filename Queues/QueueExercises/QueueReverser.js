const ArrayQueue = require('./ArrayQueue');

const queue = new ArrayQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

function queueReverse(k){
    // Edge Cases
    if(queue.isEmpty()) throw new Error('The Queue is empty');
    if(k > queue.length())throw new Error('Can not be greater than Queue length');
    if (k === 0 || k === 1) return; // if the k is 0 or 1 it doesn't make sense to reverse the queue

    let array = [];
    // We initialize an array to catch the dequeued elements and when the arrays length = k; we will reverse it 
    while(!queue.isEmpty()){
        array.push(queue.dequeue());
        if (array.length === k) array.reverse();
    }

    // here we are putting the elements back in to the queue in the new order
    while(!array.length == 0){
        queue.enqueue(array.shift());
    }
}

queueReverse(5);
console.log(queue.getQueue());