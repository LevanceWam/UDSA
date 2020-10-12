class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const _size = new WeakMap();
const isEmpty = Symbol();

class Stack {
    constructor(bottom = null, top = null) {
        this.bottom = bottom;
        this.top = top;
        _size.set(this, {
            value: 0
        });
    }

    peek() {
        this[isEmpty]();
        return this.top;
    }

    push(item) {
        let newNode = new Node(item);

        if (this.bottom == null) {
            this.bottom = this.top = newNode;
        } else {
            this.top.next = newNode;
            this.top = newNode;
        }
    }

    pop() {
        this[isEmpty]();

        let current = this.bottom;
        let previous = this.bottom;

        while (current.next != this.top) {
            current = current.next;
        }

        this.top = current;
        this.top.next = null;
        return previous;
    }

    [isEmpty]() {
        if (this.bottom == null) throw new Error('Stack is empty');
    }
}

const ll = new Stack();
ll.peek();