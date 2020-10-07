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


}


let list = new LinkedList()
list.addFirst(4);
list.addLast(5);
list.addLast(6);
list.removeLast();
console.log(list)