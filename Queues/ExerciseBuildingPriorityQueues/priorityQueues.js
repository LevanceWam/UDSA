const _qArray = new WeakMap();

class PriorityQueue{
    constructor(){
        _qArray.set(this, [])
    }

    enqueue(element){
        if (_qArray.get(this).length == 0) 
            return _qArray.get(this).push(element);
    
        for (let i = _qArray.get(this).length; i > 0; i--){
            if (_qArray.get(this)[i-1] <= element) 
                return _qArray.get(this).splice(i, 0, element);   
        }
    }

    dequeue(){
        if (_qArray.get(this).length == 0) throw new Error('The queue is empty');
        return _qArray.get(this).shift();
    }

    peek(){
        if (_qArray.get(this).length == 0) throw new Error('The queue is empty');
        return _qArray.get(this)[0];
    }

    isEmpty(){
        return (_qArray.get(this).length == 0);
    }

    getQueue(){
        return _qArray.get(this)
    }

}

const queue = new PriorityQueue();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(2);
console.log(queue.getQueue());