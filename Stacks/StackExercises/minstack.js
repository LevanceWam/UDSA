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

    min() {
        if (_items.get(this).length == 0) throw new Error('The stack is empty');
        let current = _items.get(this)[0];
        for (let num of _items.get(this)) {
            if (current > num) {
                current = num
            }
        }
        return current;
    }
}

let stack = new Stack();

stack.push(4);
stack.push(7);
stack.push(3);
stack.push(2);
stack.push(9);
stack.push(1);
stack.pop();
let min = stack.min();
console.log(min);