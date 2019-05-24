import sys
from math import ceil

# Karatsuba's algorithm:
#    (a * b) = p2*10000 + (p1-p2-p3)*100 + p3,

# where:
#    p1 = (a1 + a2) * (b1 + b2)
#    p2 = a1 * b1
#    p3 = a2 * b2
#    a1 = first half of a rounded up (ex: a = 12345, a1 = 123)
#    a2 = second half of a (ex: a 12345, a2 = 45)
#    b1 = first half of b rounded up
#    b2 = second half of b


class Karatsuba:

    def __init__(self, ln):
        self.length = ln

    @staticmethod
    def break_down_num(n):
        n_ceil = ceil(len(n)/2)

        n1 = n[:n_ceil]
        n2 = n[n_ceil:]

        return int(n1), int(n2)

    def compute_p1(self, a1, a2, b1, b2):
        sum1 = a1 + a2
        sum2 = b1 + b2
        if len(str(sum1)) > self.length:
            self.start(str(sum1), str(sum2))
        return (a1 + a2) * (b1 + b2)

    def compute_p2(self, a1, b1):
        if len(str(a1)) > self.length:
            self.start(str(a1), str(b1))
        return a1 * b1

    def compute_p3(self, a2, b2):
        if len(str(a2)) > self.length:
            self.start(str(a2), str(b2))
        return a2 * b2

    def compute_karatsuba(self, a1, a2, b1, b2):
        p1 = self.compute_p1(a1, a2, b1, b2)
        p2 = self.compute_p2(a1, b1)
        p3 = self.compute_p3(a2, b2)
        p123 = p1 - p2 - p3

        part1 = p2 * 10000
        part2 = p123 * 100
        return part1 + part2 + p3

    def start(self, a, b):
        a1, a2 = self.break_down_num(a)
        b1, b2 = self.break_down_num(b)
        answer = self.compute_karatsuba(a1, a2, b1, b2)
        print(answer)
        return answer


if __name__ == "__main__":
    a = sys.argv[1]
    b = sys.argv[2]
    if a > b:
        length = str(a).__len__()
    else:
        length = str(b).__len__()

    obj = Karatsuba(length)
    ans = str(obj.start(a, b))
    print("ans" + ans)
    sys.stdout.flush()
