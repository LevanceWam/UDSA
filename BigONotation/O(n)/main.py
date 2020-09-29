numbers = [1, 2, 3, 4]


def log(array):
    print()  # O(1)
    for number in array:  # O(n)
        print(number)
    print()  # O(1)


log(numbers)
