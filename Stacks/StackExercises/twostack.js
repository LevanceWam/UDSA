const Stack = require('./main');
const _array = new WeakMap();

class TwoStacks {
    constructor() {
        const stackOne = new Stack();
        const stackTwo = new Stack();
        _array.set(this, [stackOne, stackTwo])
    }

    push1(item) {
        _array.get(this)[0].push(item);
    }

    push2(item) {
        _array.get(this)[1].push(item);
    }

    pop1() {
        if (_array.get(this)[0].isEmpty()) throw new Error('The first stack is empty');
        return _array.get(this)[0].pop();
    }

    pop2() {
        if (_array.get(this)[1].isEmpty()) throw new Error('The second stack is empty');
        return _array.get(this)[1].pop();
    }

    isEmpty1() {
        return (_array.get(this)[0].isEmpty());
    }

    isEmpty2() {
        return (_array.get(this)[1].isEmpty());
    }
}

const stacker = new TwoStacks();
stacker.push1(3);
const st = stacker.isEmpty1();
console.log(st);

//Decided not to do the isFull method because this exercise was written for 
// java and java can set how big their arrays are. in javascript our arrays are dynamic so this 
// would be a waste of time to create or try to figure out.