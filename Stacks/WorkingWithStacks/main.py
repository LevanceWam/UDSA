class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class Stack:
    def __init__(self, bottom=None, top=None):
        self.bottom = bottom
        self.top = top
        self.__size = 0

    def peek(self):
        self.__isEmpty__()
        return self.top.value

    def __isEmpty__(self):
        if (self.bottom == None):
            raise Exception('The stack is Empty')

    def push(self, item):
        newNode = Node(item)

        if(self.bottom == None):
            self.bottom = self.top = newNode
        else:
            self.top.next = newNode
            self.top = newNode

    def pop(self):
        self.__isEmpty__()

        current = self.bottom
        previous = self.top

        while (current.next != self.top):
            current = current.next

        self.top = current
        self.top.next = None
        return previous.value


ll = Stack()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.push(5)
print(ll.peek())
