# tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
# print(tuple[2:7])

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# def square_digits(num):
#     result = ''
#     numStr = str(num)
#     for i in range(len(numStr)):
#         result += str(int(numStr[i]) ** 2)
#     return int(result)

# print(square_digits(3212))    

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# def spin_words(sentence):
#     result = ''
#     for word in sentence.split():
#         if len(word) >= 5: result += word[::-1] + ' '
#         else: result += word + ' '
#     return result.strip()

# print(spin_words("Hey fellow warriors"))

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# def find_it(seq):
#     dic = {}
    
#     for num in seq:
#         if num in dic: dic[num] += 1
#         else: dic[num] = 1
        
#     for key, value in dic.items():
#         if value % 2 == 1: return key
    
#     return None

# print(find_it([1,1,1,1,2,2,3,3,3,7,7]))
# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# def check(seq, elem):
#     for item in seq:
#         if item == elem: return True
#     return False

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# """
# Leetcode 217. Contains Duplicate. Easy
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# Example 1:
# Input: nums = [1,2,3,1]
# Output: true

# Explanation:
# The element 1 occurs at the indices 0 and 3.

# Example 2:
# Input: nums = [1,2,3,4]
# Output: false

# Explanation:
# All elements are distinct.

# Example 3:
# Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true

# Constraints:
# 1 <= nums.length <= 105
# -109 <= nums[i] <= 109
# """
# class Solution(object):
#     def containsDuplicate(self, nums):
#         dic = {}
#         for num in nums:
#             if num in dic: return True
#             else: dic[num] = True
#         return False
        
# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# https://leetcode.com/problems/valid-anagram/description/

# 242. Valid Anagram - Easy
# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# Example 1:
# Input: s = "anagram", t = "nagaram"
# Output: true

# Example 2:
# Input: s = "rat", t = "car"
# Output: false

# Constraints:
# 1 <= s.length, t.length <= 5 * 104
# s and t consist of lowercase English letters.

# class Solution(object):
#     def isAnagram(self, s, t):
#         if len(s) != len(t): return False
#         dic = {}
#         for i in range(max(len(s), len(t))):
#             char1 = s[i]
#             char2 = t[i]
#             if char1 in dic: dic[char1] += 1
#             else: dic[char1] = 1
#             if char2 in dic: dic[char2] -= 1
#             else: dic[char2] = -1
#         for key in dic:
#             if dic[key] != 0: return False
#         return True

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# https://leetcode.com/problems/two-sum/description/

# 1. Two Sum
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

 

# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# Example 2:
# Input: nums = [3,2,4], target = 6
# Output: [1,2]

# Example 3:
# Input: nums = [3,3], target = 6
# Output: [0,1]
 
# Constraints:
# 2 <= nums.length <= 104
# -109 <= nums[i] <= 109
# -109 <= target <= 109
# Only one valid answer exists.

# class Solution(object):
#     def twoSum(self, nums, target):
#         dic = {}
#         for index, num in enumerate(nums):
#             tar = target - num
#             if tar in dic:
#                 return [index, dic[tar]]
#             else:
#                 dic[num] = index

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# arr = [1, 2, 3]
# test = arr.copy()
# test[0] = 10
# print(arr)

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# arr = [
# 1050,
# 3500,
# 1050,
# 1400,
# 2800,
# 1400,
# 6650,
# 2100,
# 210,
# 1750,
# 4200,
# 4200,
# 1400,
# 1120,
# 2800,
# 11200,
# 2100,
# 1400,
# 1050,
# 1050,
# 4200,
# 1400,
# 700
# ]
# print(sum(arr) / 700)

strs = """
![[2025-05-01_12-50-37.jpg]]

![[2025-05-01_12-50-29.jpg]]

![[2025-05-01_12-50-21.jpg]]

![[2025-05-01_12-50-17.jpg]]

![[2025-05-01_12-49-59.jpg]]

![[2025-05-01_12-49-42.jpg]]

![[2025-05-01_12-49-29.jpg]]

![[2025-05-01_12-48-44.jpg]]

![[2025-05-01_12-48-36.jpg]]

![[2025-05-01_12-48-33.jpg]]

![[2025-05-01_12-48-20.jpg]]

![[2025-05-01_12-48-09.jpg]]

![[2025-05-01_12-47-51.jpg]]

![[2025-05-01_12-47-43.jpg]]

![[2025-05-01_12-47-32.jpg]]

![[2025-05-01_12-47-22.jpg]]

![[2025-05-01_12-47-18.jpg]]

![[2025-05-01_12-47-09.jpg]]

![[2025-05-01_12-46-26.jpg]]

![[2025-05-01_12-46-17.jpg]]

![[2025-05-01_12-46-07.jpg]]

![[2025-05-01_12-45-58.jpg]]

![[2025-05-01_12-45-48.jpg]]

![[2025-05-01_12-45-35.jpg]]

![[2025-05-01_12-45-13.jpg]]

![[2025-05-01_12-45-07.jpg]]

![[2025-05-01_12-44-49.jpg]]

![[2025-05-01_12-44-32.jpg]]

![[2025-05-01_12-44-21.jpg]]

![[2025-05-01_12-44-15.jpg]]

![[2025-05-01_12-44-11.jpg]]

![[2025-05-01_12-44-06.jpg]]

![[2025-05-01_12-43-56.jpg]]

![[2025-05-01_12-43-47.jpg]]

![[2025-05-01_12-43-24.jpg]]

![[2025-05-01_12-43-14.jpg]]

![[2025-05-01_12-43-04.jpg]]

![[2025-05-01_12-42-57.jpg]]

![[2025-05-01_12-42-45.jpg]]

![[2025-05-01_12-42-29.jpg]]

![[2025-05-01_12-42-24.jpg]]

![[2025-05-01_12-42-05.jpg]]

![[2025-05-01_12-41-55.jpg]]

![[2025-05-01_12-41-47.jpg]]

![[2025-05-01_12-22-49.jpg]]

![[2025-05-01_12-22-44.jpg]]

![[2025-05-01_12-14-00.jpg]]

![[2025-05-01_12-13-55.jpg]]

![[2025-05-01_12-13-40.jpg]]

![[2025-05-01_12-13-36.jpg]]

![[2025-05-01_12-13-06.jpg]]

![[2025-05-01_12-12-50.jpg]]

![[2025-05-01_12-12-45.jpg]]

![[2025-05-01_12-12-25.jpg]]

![[2025-05-01_12-12-13.jpg]]

![[2025-05-01_12-12-02.jpg]]

![[2025-05-01_12-11-50.jpg]]

![[2025-05-01_12-11-47.jpg]]

![[2025-05-01_12-11-26.jpg]]

![[2025-05-01_12-11-19.jpg]]

![[2025-05-01_12-11-15.jpg]]

![[2025-05-01_12-11-02.jpg]]

![[2025-05-01_12-10-57.jpg]]

![[2025-05-01_12-10-43.jpg]]

![[2025-05-01_12-10-33.jpg]]
"""
print(reversed(strs.split()))

# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

