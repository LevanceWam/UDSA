const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(item) {
        return _items.get(this).push(item);
    }

    pop() {
        if (_items.get(this).length == 0) throw new Error('The stack is already empty');
        return _items.get(this).pop();
    }

    peek() {
        if (_items.get(this).length == 0) throw new Error('The stack is empty');
        return _items.get(this)[_items.get(this).length - 1];
    }

    isEmpty() {
        return (_items.get(this).length == 0);
    }
}

const stack = new Stack();
// stack.push(2);
// stack.push(3);
stack.pop();
// console.log(stack.isEmpty());