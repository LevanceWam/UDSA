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
        this.size = 0;
    }

    enqueue(item){
        let value = new ListItem(item);

        if (this.front == null){
            this.front=this.back= value;
        } else{
            this.back.next = value;
            this.back = value
        }

        this.size++;
    }

    dequeue(){
        if (this.front == null) throw new Error('The Queue is empty');

        if(this.front == this.back){
            this.front=this.back=null;
        }else{
            let second = this.front.next;
            this.front = null;
            this.front = second;
        }

        this.size--;
        return this.front.value;
    }

    peek(){
        if (this.front == null) throw new Error('The Queue is empty');
        return this.front.value;
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return (this.front == null);
    }
}