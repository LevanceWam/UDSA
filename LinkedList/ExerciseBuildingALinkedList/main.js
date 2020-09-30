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
}

let list = new LinkedList();
list.first = new ListNode(3)
console.log(list)