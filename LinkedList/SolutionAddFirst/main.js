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
}

let list = new LinkedList();
list.addFirst(4);
list.addFirst(2);
console.log(list)