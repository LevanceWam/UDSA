class Stack:
    def __init__(self):
        self.__item = []

    def push(self, item):
        self.__item.append(item)

    def pop(self):
        if (len(self.__item) == 0):
            raise Exception('The stack is already empty')

        return self.__item.pop()

    def peek(self):
        if (len(self.__item) == 0):
            raise Exception('The stack is empty')

        return self.__item[len(self.__item)-1]

    def isEmpty(self):
        return (len(self.__item) == 0)

    def getStack(self):
        return self.__item
