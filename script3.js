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
