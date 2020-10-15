const Stack = require('./stack');
const Queue = require('./queues');

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
reverse(queue);
console.log(queue.getQueue());

function reverse(queue){
    const stack = new Stack();

    while(!queue.isEmpty()) stack.push(queue.dequeue());
    while(!stack.isEmpty()) queue.enqueue(stack.pop());
}