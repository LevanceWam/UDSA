class PriorityQueue:
    def __init__(self):
        self.__qArray = []

    def enqueue(self, element):
        if (len(self.__qArray) == 0):
            return self.__qArray.append(element)

        for i in range(len(self.__qArray)):
            if (self.__qArray[i] <= element):
                return self.__qArray.insert(len(self.__qArray), element)

    def getQueue(self):
        if (len(self.__qArray) == 0):
            raise Exception('The queue is empty')

        return self.__qArray


queue = PriorityQueue()
queue.enqueue(5)
queue.enqueue(1)
queue.enqueue(3)

print(queue.getQueue())
