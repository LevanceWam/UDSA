class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const _size = new WeakMap();
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
        if (this.isEmpty) throw new Error('The stack is empty');
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
        if (this.top == null) throw new Error('The stack is empty');

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

    isEmpty() {
        return (this.bottom == null);
    }

    printStack() {
        if (this.isEmpty) throw new Error('The stack is empty');

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

function isBalanced(str) {
    let stack = new Stack();
    let openExp = ['(', '{', '[', '<'];
    let closeExp = [')', '}', ']', '>'];

    for (let ch of str) {
        if (openExp.indexOf(ch) != -1) stack.push(ch);
        if (closeExp.indexOf(ch) != -1) {
            if (stack.isEmpty()) return false;
            var top = stack.pop();
            if (ch == ')' && top != '(') return false;
            if (ch == '}' && top != '{') return false;
            if (ch == ']' && top != '[') return false;
            if (ch == '>' && top != '<') return false;
        }
    }
    return stack.isEmpty();
}

let result = isBalanced('<1 + 2>');
console.log(result);