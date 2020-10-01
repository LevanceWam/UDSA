class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self.first = None

    def addLast(self, value):
        newNode = Node(value)

        if (not self.first):
            self.first = newNode
            return self.first

        last = self.first
        while (last.next):
            last = last.next

        last.next = newNode
        return self.first


ll = LinkedList()
ll.addLast(4)
ll.addLast(2)
print(ll)
