class ArrayQueue:
    def __init__(self):
        self.__elements = []

    def enqueue(self, item):
        self.__elements.append(item)

    def dequeue(self):
        if (len(self.__elements) == 0):
            raise Exception('The Queue is empty')

        return self.__elements.pop(0)

    def peek(self):
        if (len(self.__elements) == 0):
            raise Exception('The Queue is empty')

        return self.__elements[0]

    def isEmpty(self):
        return (len(self.__elements) == 0)

    def getQueue(self):
        return self.__elements
