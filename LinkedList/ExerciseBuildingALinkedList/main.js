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
console.log(list)