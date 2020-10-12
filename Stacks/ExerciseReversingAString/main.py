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

    def getPrevious(self, item):
        current = self.bottom

        while(current != None):
            if (current.next == item):
                return current
            current = current.next
        return None

    def pop(self):
        self.__isEmpty__()
        oldtop = self.top

        if(self.bottom == self.top):
            self.bottom = self.top = None
        else:
            previous = self.getPrevious(self.top)
            self.top = previous
            self.top.next = previous

        return oldtop.value


def stringReverser(input):
    stack = Stack()
    count = 0
    string = ''

    for x in input:
        stack.push(x)
        count += 1

    for x in range(count):
        string += stack.pop()

    print(string)


stringReverser('Tiger')
