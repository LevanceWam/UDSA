def log(num):
    for number in num:  # O(n)
        print(number)
    # O(n^2)
    for first in num:  # O(n)
        for second in num:  # O(n)
            print(first + ', ' + second)


def go(num):
    # O(n^3)
    for first in num:  # O(n)
        for second in num:  # O(n)
            for third in num:  # O(n)
                print(first + ', ' + second + ',' + third)
