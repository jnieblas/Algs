import unittest
from algorithm_code.src.karatsuba import Karatsuba


class KaratsubaTest(unittest.TestCase):

    def setUp(self):
        self.a = "3178"
        self.b = "56941"
        self.alg = Karatsuba()

    def test_break_down_num(self):
        self.assertEqual(self.alg.break_down_num(self.a), (31, 78),
                         "break_down_num: even numbers breaking down incorrectly.")
        self.assertEqual(self.alg.break_down_num(self.b), (569, 41),
                         "break_down_num: odd numbers breaking down incorrectly.")

    def test_compute_p1(self):
        self.assertEqual(self.alg.compute_p1(31, 78, 569, 41), 66490,
                         "compute_p1: numbers not multiplying or adding correctly.")

    def test_compute_p2(self):
        self.assertEqual(self.alg.compute_p2(31, 569), 17639,
                         "compute_p2: numbers not multiplying correctly.")

    def test_compute_p3(self):
        self.assertEqual(self.alg.compute_p3(78, 41), 3198,
                         "compute_p3: numbers not multiplying correctly.")

    def test_compute_karatsuba(self):
        self.assertEqual(self.alg.compute_karatsuba(31, 78, 569, 41), 180958498,
                         "compute_karatsuba: smaller nums are not computing correctly.")

        self.assertEqual(self.alg.compute_karatsuba(12344, 56734, 1397, 4254), 17250611952926436,
                         "compute_karatsuba: bigger nums are not computing correctly.")