class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const _size = new WeakMap();
const isEmpty = Symbol();
const getPrevious = Symbol();

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

        _size.get(this).value++;
    }

    [getPrevious](item) {
        let current = this.bottom;

        while (current != null) {
            if (current.next == item) return current;
            current = current.next;
        }
        return null;
    }

    pop() {
        this[isEmpty]();

        let oldTop = this.top;

        if (this.bottom == this.top) {
            this.bottom = this.top = null;
        } else {
            let previous = this[getPrevious](this.top);
            this.top = previous;
            this.top.next = null;
        }
        _size.get(this).value--;
        return oldTop.value;
    }

    [isEmpty]() {
        if (this.bottom == null) throw new Error('Stack is empty');
    }

    printStack() {
        this[isEmpty]();

        let current = this.bottom;
        let str = '';

        while (current != null) {
            str += current.value;
            current = current.next;
        }
        return str;
    }

    reverse() {
        let str = this.printStack();
        let reversed = str.split('').reverse().join('');
        return reversed;
    }

    getSize() {
        return _size.get(this).value;
    }
}


function stringReverse(input) {
    let stack = new Stack();
    let count = 0;
    let str = '';

    for (let char of input) {
        stack.push(char);
        count++;
    }

    for (let i = 0; i < count; i++) {
        str += stack.pop()
    }

    console.log(str);
}

stringReverse('Tiger');