class ListItem:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class Queue:
    def __init__(self):
        self.front = None
        self.back = None

    def enqueue(self, item):
        value = ListItem(item)

        if (self.front == None):
            self.front = self.back = value
        else:
            self.back.next = value
            self.back = value

    def dequeue(self):
        if (self.front == None):
            raise Exception('The Queue is empty')

        if(self.front == self.back):
            self.front = self.back = None
            return
        else:
            second = self.front.next
            self.front = None
            self.front = second

        return self.front.value

    def peek(self):
        return self.front.value

    def isEmpty(self):
        return (self.front == None)
