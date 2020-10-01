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
    }

    addLast(value) {
        let newNode = new ListNode(value);

        if (this.first == null) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    addFirst(value) {
        let newNode = new ListNode(value);

        if (this.first == null) {
            this.first = this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
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
}

let list = new LinkedList();
list.addFirst(4);
list.addFirst(2);
console.log(list.indexOf(2));
console.log(list.contains(7));
console.log(list)