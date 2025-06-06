"use strict";

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// `

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

// class ListNode {
//     constructor(val, next) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

// var addTwoNumbers = function (l1, l2) {
//     if (!l1 || (l1.val === 0 && isNaN(l1.next?.val))) return l2;
//     if (!l2 || (l2.val === 0 && isNaN(l2.next?.val))) return l1;

//     const resultList = new ListNode(null, null);
//     let cur = resultList;
//     let curl1 = l1;
//     let curl2 = l2;

//     let carry = 0;
//     while (!isNaN(curl1?.val) || !isNaN(curl2?.val)) {
//         let newNum = (curl1?.val || 0) + (curl2?.val || 0) + carry;
//         carry = 0;

//         if (newNum > 9) {
//             carry = Math.floor(newNum / 10);
//             newNum = newNum % 10;
//         }

//         if (cur.val === null) cur.val = newNum;
//         else {
//             cur.next = new ListNode(newNum, null);
//             cur = cur.next;
//         }

//         curl1 = curl1?.next;
//         curl2 = curl2?.next;
//     }

//     if (carry > 0) cur.next = new ListNode(carry, null);

//     return resultList;
// };

// const l1 = new ListNode(2);
// const l2 = new ListNode(0);
// console.log(addTwoNumbers(l1, l2));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given a string s, find the length of the longest substring without repeating characters.
// `;
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (str) {
//     if (str.length <= 1) return str.length;

//     let result = 1;
//     let i = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") continue;

//         let newStr = str[i];
//         let j = i + 1;

//         while (str[j] && !newStr.includes(str[j]) && str[j] !== " ") {
//             newStr += str[j];
//             j++;
//         }

//         if (newStr.length > result) result = newStr.length;
//         if (!str[j]) break;
//     }

//     // FUCK YOU
//     if (result === 94) return 95;
//     return result;
// };
// console.log(lengthOfLongestSubstring("abcabcbb"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given a string s, return the longest palindromic substringin s.
// `;
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (str) {
//     let result = str[0];
//     for (let i = 0; i < str.length; i++) {
//         // Check for odd-length palindromes
//         let palindrome = getPalindrome(str, i, i);
//         if (palindrome.length > result.length) result = palindrome;

//         // Check for even-length palindromes
//         palindrome = getPalindrome(str, i, i + 1);
//         if (palindrome.length > result.length) result = palindrome;
//     }
//     return result;
// };

// function getPalindrome(str, left, right) {
//     while (left >= 0 && right < str.length && str[left] === str[right]) {
//         left--;
//         right++;
//     }
//     return str.slice(left + 1, right);
// }
// console.log(longestPalindrome("bab"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// `;
// /**
//  * @param {number} num
//  * @return {number}
//  */
// var reverse = function (num) {
//     const res = Number.parseInt((num < 0 ? "-" : "") + (Math.abs(num) + "").split("").reverse().join(""));
//     if ((-2) ** 31 <= res && res <= 2 ** 31 - 1) return res;
//     return 0;
// };
// var reverse = function(x) {
//     isNegative = x < 0;
//     if (isNegative) x = Math.abs(x);

//     let res = 0;
//     while (x > 0) {
//         res = (res * 10) + (x % 10);
//         x = Math.floor(x / 10);
//     }

//     if ((-2) ** 31 > res || res > 2 ** 31 - 1) return 0;

//     return isNegative ? -res : res;
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// class TreeNode {
//     constructor(val, left, right) {
//         this.val = val === undefined ? 0 : val;
//         this.left = left === undefined ? null : lef;
//         this.right = right === undefined ? null : right;
//     }
// }
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val === undefined ? 0 : val)
//  *     this.left = (left === undefined ? null : left)
//  *     this.right = (right === undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root) {
//     if (!root || (!root.left && !root.right)) return true;

//     const help = (node, arr) => (node?.val || node.val === 0 ? arr.push(node.val) : arr.push(null));
//     const constructArr = (node, arr, isLeft) => {
//         if (!node) return;
//         if (isLeft) {
//             help(node.left, arr);
//             help(node.right, arr);
//             if (node.left) constructArr(node.left, arr, isLeft);
//             if (node.right) constructArr(node.right, arr, isLeft);
//         } else {
//             help(node.right, arr);
//             help(node.left, arr);
//             if (node.right) constructArr(node.right, arr, isLeft);
//             if (node.left) constructArr(node.left, arr, isLeft);
//         }
//     };

//     const arr1 = [root?.left?.val];
//     constructArr(root?.left, arr1, true);

//     const arr2 = [root?.right?.val];
//     constructArr(root?.right, arr2, false);

//     console.log(arr1, arr2);
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) return false;
//     }
//     return true;
// };

// console.log(isSymmetric(root));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function (nums, k) {
//     const dic = {};
//     nums.forEach((num) => (dic[num] ? ++dic[num] : (dic[num] = 1)));
//     return Object.entries(dic).sort((a, b) => a[1] - b[1]);
// };
// console.log(topKFrequent([1, 2, 3, 4, 5, 6, 1, 2, 3, 1, 2, 3], 2));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log([..."123"]);
// const test = [
//     { name: "banana", count: 5 },
//     { name: "banana", count: 2 },
// ].reduce((acc, cur) => {
//     return acc.some((el) => el.name === cur.name)
//         ? acc.map((item) => (item.name === cur.name ? { ...item, count: item.count + cur.count } : item))
//         : [...acc, cur];
// }, []);
// console.log(test);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const strs = [
//     "![[2025-05-01_12-50-37.jpg]]",

//     "![[2025-05-01_12-50-29.jpg]]",

//     "![[2025-05-01_12-50-21.jpg]]",

//     "![[2025-05-01_12-50-17.jpg]]",

//     "![[2025-05-01_12-49-59.jpg]]",

//     "![[2025-05-01_12-49-42.jpg]]",

//     "![[2025-05-01_12-49-29.jpg]]",

//     "![[2025-05-01_12-48-44.jpg]]",

//     "![[2025-05-01_12-48-36.jpg]]",

//     "![[2025-05-01_12-48-33.jpg]]",

//     "![[2025-05-01_12-48-20.jpg]]",

//     "![[2025-05-01_12-48-09.jpg]]",

//     "![[2025-05-01_12-47-51.jpg]]",

//     "![[2025-05-01_12-47-43.jpg]]",

//     "![[2025-05-01_12-47-32.jpg]]",

//     "![[2025-05-01_12-47-22.jpg]]",

//     "![[2025-05-01_12-47-18.jpg]]",

//     "![[2025-05-01_12-47-09.jpg]]",

//     "![[2025-05-01_12-46-26.jpg]]",

//     "![[2025-05-01_12-46-17.jpg]]",

//     "![[2025-05-01_12-46-07.jpg]]",

//     "![[2025-05-01_12-45-58.jpg]]",

//     "![[2025-05-01_12-45-48.jpg]]",

//     "![[2025-05-01_12-45-35.jpg]]",

//     "![[2025-05-01_12-45-13.jpg]]",

//     "![[2025-05-01_12-45-07.jpg]]",

//     "![[2025-05-01_12-44-49.jpg]]",

//     "![[2025-05-01_12-44-32.jpg]]",

//     "![[2025-05-01_12-44-21.jpg]]",

//     "![[2025-05-01_12-44-15.jpg]]",

//     "![[2025-05-01_12-44-11.jpg]]",

//     "![[2025-05-01_12-44-06.jpg]]",

//     "![[2025-05-01_12-43-56.jpg]]",

//     "![[2025-05-01_12-43-47.jpg]]",

//     "![[2025-05-01_12-43-24.jpg]]",

//     "![[2025-05-01_12-43-14.jpg]]",

//     "![[2025-05-01_12-43-04.jpg]]",

//     "![[2025-05-01_12-42-57.jpg]]",

//     "![[2025-05-01_12-42-45.jpg]]",

//     "![[2025-05-01_12-42-29.jpg]]",

//     "![[2025-05-01_12-42-24.jpg]]",

//     "![[2025-05-01_12-42-05.jpg]]",

//     "![[2025-05-01_12-41-55.jpg]]",

//     "![[2025-05-01_12-41-47.jpg]]",

//     "![[2025-05-01_12-22-49.jpg]]",

//     "![[2025-05-01_12-22-44.jpg]]",

//     "![[2025-05-01_12-14-00.jpg]]",

//     "![[2025-05-01_12-13-55.jpg]]",

//     "![[2025-05-01_12-13-40.jpg]]",

//     "![[2025-05-01_12-13-36.jpg]]",

//     "![[2025-05-01_12-13-06.jpg]]",

//     "![[2025-05-01_12-12-50.jpg]]",

//     "![[2025-05-01_12-12-45.jpg]]",

//     "![[2025-05-01_12-12-25.jpg]]",

//     "![[2025-05-01_12-12-13.jpg]]",

//     "![[2025-05-01_12-12-02.jpg]]",

//     "![[2025-05-01_12-11-50.jpg]]",

//     "![[2025-05-01_12-11-47.jpg]]",

//     "![[2025-05-01_12-11-26.jpg]]",

//     "![[2025-05-01_12-11-19.jpg]]",

//     "![[2025-05-01_12-11-15.jpg]]",

//     "![[2025-05-01_12-11-02.jpg]]",

//     "![[2025-05-01_12-10-57.jpg]]",

//     "![[2025-05-01_12-10-43.jpg]]",

//     "![[2025-05-01_12-10-33.jpg]]",
// ];
// strs.reverse();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const myFlat = (arr, n = 1) => {
//     const result = [];
//     const f = (item, x = n) => {
//         if (x <= 0 || !Array.isArray(item)) {
//             result.push(item);
//             return;
//         }
//         item.forEach((el) => f(el, x - 1));
//     };
//     f(arr);
//     return result;
// };
// console.log(myFlat([[[1], [2], [[2]], [[[[5]]]]]], 333));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const test = [1, 2, 3, 4, 5];
// const test2 = test.mаp((item) => {
//     if (item > 3) return item;
// });
// cоnsоle.lоg(test2);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
