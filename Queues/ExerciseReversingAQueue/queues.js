class ListItem{
    constructor(value=null, next=null){
        this.value = value;
        this.next = next;
    }
}

class Queue{
    constructor(front=null, back=null){
        this.front = front;
        this.back = back;
    }

    enqueue(item){
        let value = new ListItem(item);

        if (this.front == null){
            this.front=this.back= value;
        } else{
            this.back.next = value;
            this.back = value
        }
    }

    dequeue(){
        if (this.front == null) throw new Error('The Queue is empty');

        let previous = this.front;
        
        if(this.front == this.back){
            this.front=this.back=null;
        }else{
            let second = this.front.next;
            this.front = null;
            this.front = second;
        }

        return previous.value;
    }

    peek(){
        if (this.front == null) throw new Error('The Queue is empty');
        return this.front.value;
    }

    isEmpty(){
        return (this.front == null);
    }

    getQueue(){
        let array = [];
        while (this.front != null){
            array.push(this.dequeue())

        }

        return array;
    }
}

module.exports = Queue;