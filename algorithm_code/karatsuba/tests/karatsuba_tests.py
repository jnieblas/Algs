import unittest
from algorithm_code.karatsuba.src.karatsuba import Karatsuba


class KaratsubaTest(unittest.TestCase):

    def setUp(self):
        # 4-5 digit nums
        self.alg = Karatsuba(5)
        self.a_s = "3178"
        self.b_s = "56941"
        self.a = 3178
        self.b = 56941
        self.a1 = 31
        self.a2 = 78
        self.b1 = 569
        self.b2 = 41
        self.p1ab = 66490
        self.p2ab = 17639
        self.p3ab = 3198
        self.kab = 180958498

        # 8-9 digit nums
        self.c_s = "1234456734"
        self.d_s = "139742545"
        self.c = 1234456734
        self.d = 139742545
        self.c1 = 12344
        self.c2 = 56734
        self.d1 = 13974
        self.d2 = 2545
        self.p1cd = 1141099482
        self.p2cd = 172495056
        self.p3cd = 144388030
        self.kcd = 172506125701548030

        # 22 digit nums
        self.e_s = "1908745821389754320987"
        self.f_s = "7897843289758329874289"
        self.e = 1908745821389754320987
        self.f = 7897843289758329874289
        self.e1 = 19087458213
        self.e2 = 89754320987
        self.f1 = 78978432897
        self.f2 = 58329874289
        self.p1ef = 14944880453064385331200
        self.p2ef = 1507497537649712033061
        self.p3ef = 5235358260066264403243
        self.kef = 15074975377317322796150076247749666264403243

    def test_break_down_num(self):
        # 4-5 digit nums
        self.assertEqual(self.alg.break_down_num(self.a_s), (self.a1, self.a2),
                         "break_down_num: even 4-digit nums breaking down incorrectly.")
        self.assertEqual(self.alg.break_down_num(self.b_s), (self.b1, self.b2),
                         "break_down_num: odd 4-digit nums breaking down incorrectly.")

        # 8-9 digit nums
        self.assertEqual(self.alg.break_down_num(self.c_s), (self.c1, self.c2),
                         "break_down_num: even 8-9 digit nums breaking down incorrectly.")
        self.assertEqual(self.alg.break_down_num(self.d_s), (self.d1, self.d2),
                         "break_down_num: odd 8-9 digit nums breaking down incorrectly.")

        # 22 digit nums
        self.assertEqual(self.alg.break_down_num(self.e_s), (self.e1, self.e2),
                         "break_down_num: even 22-digit nums breaking down incorrectly.")
        self.assertEqual(self.alg.break_down_num(self.f_s), (self.f1, self.f2),
                         "break_down_num: odd 22-digit nums breaking down incorrectly.")

    def test_compute_p1(self):
        # 4-5 digit nums
        self.assertEqual(self.alg.compute_p1(self.a1, self.a2, self.b1, self.b2), self.p1ab,
                         "compute_p1: 2-3 digit nums not multiplying or adding correctly.")

        # 8-9 digit nums
        self.assertEqual(self.alg.compute_p1(self.c1, self.c2, self.d1, self.d2), self.p1cd,
                         "compute_p1: 4-5 digit nums not multiplying or adding correctly")

        # 22 digit nums
        self.assertEqual(self.alg.compute_p1(self.e1, self.e2, self.f1, self.f2), self.p1ef,
                         "compute_p1: 11 digit nums not multiplying or adding correctly")

    def test_compute_p2(self):
        # 4-5 digit nums
        self.assertEqual(self.alg.compute_p2(self.a1, self.b1), self.p2ab,
                         "compute_p2: 2-3 digit nums not multiplying correctly.")

        # 8-9 digit nums
        self.assertEqual(self.alg.compute_p2(self.c1, self.d1), self.p2cd,
                         "compute_p2: 4-5 digit nums not multiplying correctly.")

        # 22 digit nums
        self.assertEqual(self.alg.compute_p2(self.e1, self.f1), self.p2ef,
                         "compute_p2: 22 digit nums not multiplying correctly.")

    def test_compute_p3(self):
        # 4-5 digit nums
        self.assertEqual(self.alg.compute_p3(self.a2, self.b2), self.p3ab,
                         "compute_p3: 2-3 nums not multiplying correctly.")

        # 8-9 digit nums
        self.assertEqual(self.alg.compute_p3(self.c2, self.d2), self.p3cd,
                         "compute_p3: 4-5 digit nums not multiplying correctly.")

        # 22 digit nums
        self.assertEqual(self.alg.compute_p3(self.e2, self.f2), self.p3ef,
                         "compute_p3: 11 digit nums not multiplying correctly.")

    def test_compute_karatsuba(self):
        # 4-5 digit nums
        self.assertEqual(self.alg.compute_karatsuba(self.a1, self.a2, self.b1, self.b2), self.kab,
                         "compute_karatsuba: 4-5 digit nums are not computing correctly.")

        # 8-9 digit nums
        self.assertEqual(self.alg.compute_karatsuba(self.c1, self.c2, self.d1, self.d2), self.kcd,
                         "compute_karatsuba: 8-9 digit nums are not computing correctly.")

        # 22 digit nums
        self.assertEqual(self.alg.compute_karatsuba(self.e1, self.e2, self.f1, self.f2), self.kef,
                         "compute_karatsuba: 22 digit nums are not computing correctly.")
