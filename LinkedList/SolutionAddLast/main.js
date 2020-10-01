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
}

let list = new LinkedList();
list.addLast(1);
list.addLast(3);
list.addLast(5);
console.log(list)