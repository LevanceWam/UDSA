const Stack = require('./stack');
const _stack = new WeakMap();

class StackQueue{
    constructor(){
        const stackOne = new Stack();
        _stack.set(this, stackOne);
    }

    enqueue(item){//O(1)
        _stack.get(this).push(item);
    }

    dequeue(){ //O(n)
        if (_stack.get(this).isEmpty()) throw new Error('The Queue is empty');

        const stackTwo = new Stack();
        while(!_stack.get(this).isEmpty()) {
            stackTwo.push(_stack.get(this).pop());
        }

        let popValue = stackTwo.pop();

        while(!stackTwo.isEmpty()){
            _stack.get(this).push(stackTwo.pop());
        }

        return popValue; 
    }

    peek(){
        if (_stack.get(this).isEmpty()) throw new Error('The Queue is empty');

        const stackTwo = new Stack();
        while(!_stack.get(this).isEmpty()) {
            stackTwo.push(_stack.get(this).pop());
        }

        let peekValue = stackTwo.peek();

        while(!stackTwo.isEmpty()){
            _stack.get(this).push(stackTwo.pop());
        }

        return peekValue;
    }

    isEmpty(){
        return (_stack.get(this).isEmpty())
    }

}


const queue = new StackQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());
console.log(queue.dequeue());


