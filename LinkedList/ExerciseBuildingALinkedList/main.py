class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self.first = None


ll = LinkedList()
ll.first = Node(3)
print(ll.first.value)
