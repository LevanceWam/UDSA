class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(first = null) {
        this.first = first;
    }

    addLast(value) {
        let newNode = new ListNode(value);

        if (!this.first) {
            this.first = newNode;
            return this.first
        }

        let last = this.first;
        while (last.next !== null) {
            last = last.next;
        }

        last.next = newNode;

        return this.first;
    }
}

let list = new LinkedList();
list.addLast(1);
console.log(list)