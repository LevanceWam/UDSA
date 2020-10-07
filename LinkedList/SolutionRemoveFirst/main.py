class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self.first = None
        self.last = None

    def addLast(self, value):
        newNode = Node(value)

        if (self.first is None):
            self.first = self.last = newNode
        else:
            self.last.next = newNode
            self.last = newNode

    def addFirst(self, value):
        newNode = Node(value)

        if (self.first is None):
            self.first = self.last = newNode
        else:
            newNode.next = self.first
            self.first = newNode

    def indexOf(self, item):
        index = 0
        current = self.first

        while (current is not None):
            if (current.value is item):
                return index
            current = current.next
            index += 1
        return -1

    def contains(self, item):
        return self.indexOf(item) is not -1

    def removeFirst(self):
        if (self.first is None):
            raise Exception('It is already empty')

        if (self.first is self.last):
            self.first = self.last = None
            return

        second = self.first.next
        self.first = None
        self.first = second


ll = LinkedList()
ll.addLast(4)
ll.addLast(2)
ll.addLast(5)
ll.addFirst(9)
ll.removeFirst()
print(ll)
