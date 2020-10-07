class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def addLast(self, value):
        newNode = Node(value)

        if (self.first is None):
            self.first = self.last = newNode
        else:
            self.last.next = newNode
            self.last = newNode

        self.size += 1

    def addFirst(self, value):
        newNode = Node(value)

        if (self.first is None):
            self.first = self.last = newNode
        else:
            newNode.next = self.first
            self.first = newNode

        self.size += 1

    def indexOf(self, item):
        index = 0
        current = self.first

        while (current != None):
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
        else:
            second = self.first.next
            self.first = None
            self.first = second

        self.size -= 1

    def getPrevious(self, node):
        current = self.first
        while(current is not None):
            if(current.next is node):
                return current
            current = current.next
        return None

    def removeLast(self):

        if (self.first is None):
            raise Exception('It is already empty')

        if (self.first is self.last):
            self.first = self.last = None
        else:
            previous = self.getPrevious(self.last)
            self.last = previous
            self.last.next = None

        self.size -= 1

    def getSize(self):
        return self.size

    def toArray(self):
        array = []
        current = self.first
        index = 0
        while(current is not None):
            array.append(current.value)
            index += 1
            current = current.next
        print(array)

     def reverse(self):
            if (self.first is None):
            return

        previous = self.first
        current = self.first.next

        while (current != None):
            nextNode = current.next
            current.next = previous
            previous = current
            current = nextNode

        self.last = self.first
        self.last.next = None
        self.first = previous

    def getKthNodeFromEnd(self, input):
        if (input > self.size):
            raise Exception('Input is too big')

        if (input is 0):
            raise Exception('Needs to be greater than 0')

        if (self.first is None):
            raise Exception('It is empty')

        a = self.first
        for x in range(input, self.size):
            a = a.next

        print(a.value)

    def getKthNodeFromEnd2(self, input):  # this is the way without size
        if (self.first is None):
            raise Exception('It is already empty')

        a = self.first
        b = self.first

        for i in range(input - 1):
            b = b.next
            if (b == None):
                raise Exception('The input you used is to big')

        while (b is not self.last):
            a = a.next
            b = b.next

        print(a.value)

ll = LinkedList()
ll.addLast(4)
ll.addLast(2)
ll.addLast(5)
ll.addFirst(9)
ll.reverse()
print(ll.getSize)
