class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor(first = null, last = null) {
        this.first = first;
        this.last = last;
        this.size = 0;
    }

    addLast(value) {
        let newNode = new ListNode(value);

        if (this.first == null) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }

    addFirst(value) {
        let newNode = new ListNode(value);

        if (this.first == null) {
            this.first = this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
    }

    indexOf(item) {
        let index = 0;
        let current = this.first;
        while (current != null) {
            if (current.value == item) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    contains(item) {
        return this.indexOf(item) != -1;
    }

    removeFirst() {
        if (this.first == null) throw new Error('It is already empty');

        if (this.first == this.last) {
            this.first = this.last = null;
        } else {
            let second = this.first.next;
            this.first = null;
            this.first = second;
        }
        this.size--;
    }

    getPrevious(node) {
        let current = this.first;
        while (current != null) {
            if (current.next == node) return current;
            current = current.next;
        }
        return null;
    }

    removeLast() {
        if (this.first == null) throw new Error('It is already empty');

        if (this.first == this.last) {
            this.first = this.last = null;
        } else {
            let previous = this.getPrevious(this.last);
            this.last = previous;
            this.last.next = null;

        }

        this.size--;
    }

    getSize() {
        return _size.get(this);
    }

    toArray() {
        let array = [this.size];
        let current = this.first;
        let index = 0;

        while (current != null) {
            array[index++] = current.value;
            current = current.next;
        }
        return array;
    }

    reverse() {
        if (this.first == null) return;

        let previous = this.first;
        let current = this.first.next;
        while (current != null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        last = first;
        this.last.next = null;
        this.first = previous;

    }

    getKthNodeFromEnd(input) { // this is for if we know the size of the list 
        if (this.first == null) throw new Error('It is empty');
        if (input === 0) throw new Error('Has to be greater than 0');
        if (input > this.size) throw new Error('Input in too big');

        let a = this.first;

        for (let i = input; i < this.size; i++) a = a.next;

        console.log(a.value);
    }

    getKthNodeFromEnd2(input) { // this is if we do not know the size of the list
        if (this.first == null) throw new Error('It is empty');

        let a = this.first;
        let b = this.first;

        for (let i = 0; i < input - 1; i++) {
            b = b.next;
            if (b == null) {
                throw new Error('the input you used is too high');
            }
        }

        while (b != this.last) {
            a = a.next;
            b = b.next;
        }

        return a.value;

    }
}


let list = new LinkedList()
list.addFirst(4);
list.addLast(5);
list.addLast(6);
list.addLast(3);
list.addLast(9);
list.getKthNodeFromEnd(1);
// console.log(list);