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


ll = LinkedList()
ll.addLast(4)
ll.addLast(2)
ll.addLast(5)
ll.addFirst(9)
print(ll)
