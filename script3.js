"use strict";

// const minValue = nums => +[...new Set(nums)].sort((a, b) => a - b).join('');

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const factorial = n => {
//     if (n === 0) return 1;
//     let sum = 1;
//     for (let i = 2; i <= n; i++) {
//       sum *= i;
//     }
//     return sum;
//   }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function twoDecimalPlaces(n) {
//     return +n.toFixed(2);
//   }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const peopleWithAgeDrink = (age) =>
//     "drink " + (age < 14 ? "toddy" : age < 18 ? "coke" : age < 21 ? "beer" : "whisky");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// HELLO GUYS

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const world = (b) => `Hello world${b ? " !" : ""}`;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const smash = words => words.join(' ');

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// хехе, тупой коммит

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function perimeter(n) {
//     const fibs = [0, 1];

//     for (let i = 0; i < n; i++) {
//         fibs.push(fibs[i] + fibs[i + 1]);
//     }

//     return fibs.reduce((acc, cur) => acc + cur, 0) * 4;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function loop_size(node) {
//     var turtle = node;
//     var rabbit = node;

//     // Find a point in the loop.  Any point will do!
//     // Since the rabbit moves faster than the turtle
//     // and the kata guarantees a loop, the rabbit will
//     // eventually catch up with the turtle.
//     do {
//         turtle = turtle.getNext();
//         rabbit = rabbit.getNext().getNext();
//     } while (turtle != rabbit);

//     // The turtle and rabbit are now on the same node,
//     // but we know that node is in a loop.  So now we
//     // keep the turtle motionless and move the rabbit
//     // until it finds the turtle again, counting the
//     // nodes the rabbit visits in the mean time.
//     var count = 0;
//     do {
//         ++count;
//         rabbit = rabbit.getNext();
//     } while (turtle != rabbit);

//     // voila
//     return count;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const square = (n) => n ** 2;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function pickPeaks(arr) {
//     const response = { pos: [], peaks: [] };

//     for (let i = 1; i < arr.length - 1; i++) {
//         let next = 1;
//         while (arr[i] === arr[i + next]) next++;

//         if (arr[i] > arr[i - 1] && arr[i] > arr[i + next]) {
//             response.pos.push(i);
//             response.peaks.push(arr[i]);
//         }
//     }

//     return response;
// }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const stockList = (books, cts) =>
//     books.length === 0
//         ? ""
//         : Object.entries(
//               books.reduce(
//                   (acc, cur) => {
//                       const toAdd = acc[cur[0]] || 0;
//                       return { ...acc, [cur[0]]: +cur.split(" ")[1] + toAdd };
//                   },
//                   cts.reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {})
//               )
//           ).reduce(
//               (acc, cur, i) =>
//                   cts.includes(cur[0]) ? acc + `${i === 0 ? "" : " - "}(${cur[0]} : ${cur[1]})` : acc,
//               ""
//           );

// console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const alph = "abcdefghijklmnopqrstuvwxyz";
// const rot13 = (str) =>
//     str
//         .toLowerCase()
//         .split("")
//         .map((el) =>
//             alph.includes(el)
//                 ? alph.indexOf(el) < 13
//                     ? alph[13 + alph.indexOf(el)]
//                     : alph[alph.indexOf(el) - 13]
//                 : el
//         )
//         .map((el, i) => (str[i] === str[i].toLowerCase() ? el : el.toUpperCase()))
//         .join("");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function cleanString(s) {
//     return s.split("").reduce((acc, cur) => (cur === "#" ? acc.slice(0, -1) : acc + cur), "");
// }
// console.log(cleanString("abc#d##c"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2024.12.17 - currying add
// function add(n) {
//     var fn = function (x) {
//         return add(n + x);
//     };

//     fn.valueOf = function () {
//         return n;
//     };

//     return fn;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2024.12.18 - good fibonacci
// function fibonacci(n) {
//     const arr = [0, 1, 1];
//     if (n < arr.length) return arr[n];

//     for (let i = 3; i <= n; i++) {
//         arr.push(arr[i - 2] + arr[i - 1]);
//     }

//     return arr.at(-1);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// We want to generate all the numbers of three digits where:

// the sum of their digits is equal to 10
// their digits are in increasing order (the numbers may have two or more equal contiguous digits)
// The numbers that fulfill these constraints are: [118, 127, 136, 145, 226, 235, 244, 334]. There're 8 numbers in total with 118 being the lowest and 334 being the greatest.
// function findAll(sum, n) {
//     const numArr = Array.from({ length: n }, () => 1);
//     const resultArr = numArr.reduce((acc, cur) => acc + cur, 0) === sum ? [+numArr.join("")] : [];
//     let index = n - 1;

//     while (true) {
//         if (numArr[index] < 9) numArr[index]++;
//         else {
//             let min;
//             for (let i = 0; i < numArr.length; i++) {
//                 if (min) numArr[i] = min + 1;
//                 else if (numArr[i + 1] === 9) {
//                     if (!min) min = numArr[i];
//                     numArr[i]++;
//                 }
//             }
//             index = n - 1;
//         }

//         if (numArr.reduce((acc, cur) => acc + cur, 0) === sum) resultArr.push(+numArr.join(""));
//         if (numArr.some((el) => el > 9) || numArr.every((el) => el === 9)) break;
//     }

//     return resultArr.length <= 0
//         ? []
//         : [resultArr.length, resultArr[0] + "", resultArr[resultArr.length - 1] + ""];
// }
// console.log(findAll(10, 3));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()
// `;
// Math.round = function (num) {
//     const strNum = num + "";
//     if (!strNum.includes(".")) return num;
//     const notRounded = +strNum.slice(0, strNum.indexOf("."));
//     return +strNum[strNum.indexOf(".") + 1] >= 5 ? notRounded + 1 : notRounded;
// };

// Math.ceil = function (num) {
//     const strNum = num + "";
//     if (!strNum.includes(".")) return num;
//     return +strNum.slice(0, strNum.indexOf(".")) + 1;
// };

// Math.floor = function (num) {
//     const strNum = num + "";
//     if (!strNum.includes(".")) return num;
//     return +strNum.slice(0, strNum.indexOf("."));
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
// `;
// const chars = "aeiou";
// const indexes = "12345";

// function encode(str) {
//     return str.split("").reduce((acc, cur) => acc + (chars.includes(cur) ? chars.indexOf(cur) + 1 : cur), "");
// }

// function decode(str) {
//     return str
//         .split("")
//         .reduce((acc, cur) => acc + (indexes.includes(cur) ? chars[indexes.indexOf(cur)] : cur), "");
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
// `;
// const highestRank = (arr) =>
//     +Object.entries(arr.reduce((acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }), {}))
//         .sort((a, b) => b[1] - a[1])
//         .filter((el, i, arr) => el[1] === arr[0][1])
//         .sort((a, b) => +b[0] - +a[0])[0][0];

// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// A perfect power is a classification of positive integers:

// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.
// `;
// function isPP(n) {
//     for (var m = 2; m * m <= n; ++m)
//         for (var k = 2; Math.pow(m, k) <= n; ++k) if (Math.pow(m, k) == n) return [m, k];
//     return null;
// }
// console.log(isPP(43894));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\
//                     4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*

// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.
// `
// function foldArray(array, runs) {
//     let result = array;
//     for (let i = 0; i < runs; i++) {
//         let newResult = [];
//         for (let j = 0; j < Math.floor(result.length / 2); j++) {
//             newResult.push(result[j] + result[result.length - 1 - j]);
//         }
//         if (result.length % 2 !== 0 && result.length !== 0)
//             newResult.push(result[Math.floor(result.length / 2)]);
//         result = newResult;
//     }
//     return result;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Teemo is not really excited about the new year's eve, but he has to celebrate it with his friends anyway.

// He has a really big passion about programming and he wants to be productive till midnight. He wants to know how many minutes he has left to work on his new project.
// He doesn't want to look on the clock all the time, so he thought about a function, which returns him the number of minutes.

// Can you write him a function, so he can stay productive?

// The function minutesToMidnight(d) will take a date object as parameter. Return the number of minutes in the following format:

// "x minute(s)"

// You will always get a date object with of today with a random timestamp.
// You have to round the number of minutes.
// Milliseconds doesn't matter!

// Some examples:

// 10.00 am => "840 minutes"

// 23.59 pm => "1 minute"
// `
// function minutesToMidnight(d) {
//     const num = 1440 - d.getHours() * 60 - d.getMinutes() - Math.round(d.getSeconds() / 60);
//     return `${num} minute${num === 1 ? "" : "s"}`;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Task
// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4
// `
// function quadrant(x, y) {
//     if (x > 0 && y > 0) return 1;
//     if (x < 0 && y > 0) return 2;
//     if (x < 0 && y < 0) return 3;
//     if (x > 0 && y < 0) return 4;
//     return null;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.
// `
// function remainder(n, m){
//   return Math.max(n, m) % Math.min(n, m);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// `
// function finalGrade (e, p) {
//   if (e > 90 || p > 10) return 100;
//   if (e > 75 && p >= 5) return 90;
//   if (e > 50 && p >= 2) return 75;
//   return 0;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
// `
// function formatMoney(amount){
//   return `$${amount.toFixed(2)}`;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Create a parser to interpret and execute the Deadfish language.

// Deadfish operates on a single value in memory, which is initially set to 0.

// It uses four single-character commands:

// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.

// Examples
// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
// `
// function parse(data){
//   let num = 0;
//   const result = [];
//   data.split("").forEach((el) => {
//     if (el ===  "i") num += 1;
//     if (el ===  "d") num -= 1;
//     if (el ===  "s") num = num ** 2;
//     if (el ===  "o") result.push(num);
//   });
//   return result;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]
// `;
// multiplicationTable = function (size) {
//     const result = [];
//     for (let i = 1; i <= size; i++) {
//         const row = [];
//         for (let j = 1; j <= size; j++) {
//             row.push(j * i);
//         }
//         result.push(row);
//     }
//     return result;
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:
// `
// function sumIntervals(intervals) {
//     intervals = intervals.sort(function (a, b) {
//         // O(n)
//         return a[0] - b[0];
//     });
//     intervals = intervals.reduce(function (acc, el, index, array) {
//         // O(n)
//         const anterior = array[index - 1];
//         if (array.length > 1 && anterior !== undefined) {
//             if (el[0] < acc[acc.length - 1]) {
//                 if (el[1] >= acc[acc.length - 1]) {
//                     acc[acc.length - 1] = el[1];
//                 }
//             } else {
//                 acc.push(...el);
//             }
//         } else {
//             acc.push(...el);
//         }
//         return acc;
//     }, []);
//     let result = 0;
//     for (let i = 0; i < intervals.length - 1; i += 2) {
//         // O(2n)
//         result += intervals[i + 1] - intervals[i];
//     }
//     return result;
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// `;
// function sumStrings(a, b) {
//     if (+a + +b < 2 ** 55) return +a + +b + "";
//     return (BigInt(a) + BigInt(b)).toString();
// }
// console.log(sumStrings("123", "2222"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// `
// function add(a, b) {
//     let carry = 0;
//     const result = [];
//     const aReversed = a.split("").reverse().join("");
//     const bReversed = b.split("").reverse().join("");
//     for (let i = 0; i < Math.max(a.length, b.length); i++) {
//         const sum = (+aReversed[i] || 0) + (+bReversed[i] || 0) + carry;
//         carry = Math.floor(sum / 10);
//         result.push(sum % 10);
//     }
//     if (carry !== 0) result.push(carry);
//     return result.reverse().join("");
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var isPalindrome = function (x) {
//     const str = x.toString();
//     return str === str.split('').reverse().join('');
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// class ListNode {
//     constructor(val, next) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

// var mergeTwoLists = function (list1, list2) {
//     if (!list1) return list2;
//     if (!list2) return list1;

//     const result = new ListNode(null, null);

//     if (list1.val < list2.val) {
//         result.val = list1.val;
//         list1 = list1.next;
//     } else {
//         result.val = list2.val;
//         list2 = list2.next;
//     }

//     let cur = result;
//     while (list1?.val || list1?.val === 0 || list2?.val || list2?.val === 0) {
//         if (!list2 || list1?.val <= list2?.val) {
//             cur.next = new ListNode(list1.val);
//             list1 = list1.next;
//         } else {
//             cur.next = new ListNode(list2.val);
//             list2 = list2.next;
//         }
//         cur = cur.next;
//     }
//     return JSON.stringify(result);
// };

// const head1 = new ListNode(-10);
// head1.next = new ListNode(-9);
// head1.next.next = new ListNode(-6);
// head1.next.next.next = new ListNode(-4);
// head1.next.next.next.next = new ListNode(1);
// head1.next.next.next.next.next = new ListNode(9);
// head1.next.next.next.next.next.next = new ListNode(9);

// const head2 = new ListNode(-5);
// head2.next = new ListNode(-3);
// head2.next.next = new ListNode(0);
// head2.next.next.next = new ListNode(7);
// head2.next.next.next.next = new ListNode(8);
// head2.next.next.next.next.next = new ListNode(8);
// head2.next.next.next.next.next.next = new ListNode(10);
// head2.next.next.next.next.next.next.next = new ListNode(11);

// console.log(mergeTwoLists(head1, head2));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `Return the type of the sum of the two arguments`
// function typeOfSum(a, b) {
//     return typeof (a + b);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.`
// function sumMix(x){
//   return x.reduce((acc, cur) => acc + +cur, 0);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function (str) {
//     const values = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     };
//     return str.split("").reduce((acc, cur, i, arr) => {
//         if (
//             (cur === "I" && arr.slice(i + 1).some((el) => el === "V" || el === "X")) ||
//             (cur === "X" && arr.slice(i + 1).some((el) => el === "C" || el === "L")) ||
//             (cur === "C" && arr.slice(i + 1).some((el) => el === "D" || el === "M"))
//         )
//             return acc - values[cur];
//         return acc + values[cur];
//     }, 0);
// };
// console.log(romanToInt("MMMXLV"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.
// `
// /**
//  * @param {string[]} arr
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0) return "";

//     let prefix = strs[0];
//     for (let i = prefix.length - 1; i >= 0; i--) {
//         if (strs.every((word) => word.startsWith(prefix))) return prefix;
//         else prefix = prefix.slice(0, i);
//     }

//     return "";
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// `
// /**
//  * @param {string} str
//  * @return {boolean}
//  */
// var isValid = function (str) {
//     const stack = [];
//     const dic = { ")": "(", "]": "[", "}": "{" };

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (char in dic) {
//             if (stack.length !== 0 && stack.at(-1) === dic[char]) stack.pop();
//             else return false;
//         } else stack.push(char);
//     }

//     return stack.length === 0;
// };
// console.log(isValid("]"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// `
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//     const sorted = [...new Set(nums)];
//     sorted.forEach((el, i) => (nums[i] = el));
//     return sorted.length;
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// `
// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function (nums, val) {
//     const sorted = nums.sort((a, b) => (a === val) - (b === val));
//     sorted.forEach((el, i) => {
//         nums[i] = el;
//     });
//     return nums.filter((el) => el === val).length;
// };
// const arr = [0, 1, 2, 2, 3, 0, 4, 2];
// console.log(removeElement(arr, 2));
// console.log(arr);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// `
// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//     return haystack.indexOf(needle);
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// `
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//     if (target < nums[0]) return 0;
//     if (target > nums[nums.length - 1]) return nums.length;

//     let left = 0;
//     let right = nums.length - 1;
//     let middle = Math.floor((left + right) / 2);

//     while (nums[middle] !== target) {
//         if (target < nums[middle]) right = middle - 1;
//         else left = middle + 1;
//         middle = Math.floor((left + right) / 2);

//         if (left > right) return middle + 1;
//     }

//     return middle;
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given a number n, return the number of positive odd numbers below n, EASY!
// `;
// function oddCount(n) {
//     return Math.floor(n / 2);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function include(arr, item) {
//     return arr.includes(item);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.
// `
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function (s) {
//     return s.trim().split(" ").at(-1).length;
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// `;
// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function (digits) {
//     if (digits.at(-1) !== 9) return [...digits.slice(0, -1), digits.at(-1) + 1];

//     let i = digits.length - 1;

//     while (digits[i] === 9) {
//         digits[i] = 0;
//         i--;
//     }

//     if (i >= 0) digits[i] += 1;
//     else digits.unshift(1);

//     return digits;
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given two binary strings a and b, return their sum as a binary string.
// `
// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
// var addBinary = function (a, b) {
//     let carry = 0;
//     let i = 0;
//     let result = "";

//     let aNum = a[a.length - 1 - i];
//     let bNum = b[b.length - 1 - i];

//     const c = (num) => {
//         if (num === "1") return true;
//         return false;
//     };

//     while (!!aNum || !!bNum) {
//         let newNum = "";

//         if (c(aNum) && c(bNum)) {
//             if (carry) {
//                 newNum = "1";
//             } else {
//                 newNum = "0";
//                 carry += 1;
//             }
//         } else if ((c(aNum) && !c(bNum)) || (!c(aNum) && c(bNum))) {
//             if (carry) {
//                 newNum = "0";
//             } else {
//                 newNum = "1";
//             }
//         } else {
//             if (carry) {
//                 newNum = "1";
//                 carry -= 1;
//             } else {
//                 newNum = "0";
//             }
//         }

//         result = newNum + result;

//         i += 1;
//         aNum = a[a.length - 1 - i];
//         bNum = b[b.length - 1 - i];
//     }

//     if (carry) result = "1" + result;

//     return result;
// };
// console.log(addBinary("11", "1"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// `;
// /**
//  * @param {number} x
//  * @return {number}
//  */
// var mySqrt = function (x) {
//     return Math.floor(Math.sqrt(x));
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// `;
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//     const fibs = [1, 2];
//     for (let i = 2; i < n; i++) {
//         fibs.push(fibs[i - 1] + fibs[i - 2]);
//     }
//     return fibs[n - 1];
// };

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// `

// function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
// }

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

// var deleteDuplicates = function (head) {
//     let curNode = head;
//     while (curNode) {
//         if (curNode.val === curNode.next?.val) {
//             curNode.next = curNode.next.next;
//         } else {
//             curNode = curNode.next;
//         }
//     }
//     return head;
// };

// console.log(deleteDuplicates(new ListNode(8, new ListNode(8, new ListNode(8, new ListNode(8, null))))));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// `
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// `
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//     [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b).forEach((el, i) => (nums1[i] = el));
// };

// const arr1 = [-1, 0, 1, 1, 0, 0, 0, 0, 0];
// const arr2 = [-1, 0, 2, 2, 3];
// merge(arr1, 4, arr2, 5);
// console.log(arr1);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {boolean}
//  */
// var isSameTree = function (p, q) {
//     // return JSON.stringify(p) === JSON.stringify(q);
//     if (!p || !q) return p === q;
//     return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };
