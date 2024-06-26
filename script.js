'use strict';

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function descendingOrder(n) {
//   nn = n.toString();
//   let arr = [];
//   let final = '';

//   for (let i = 0; i < nn.length; i++) {
//     arr.push(+nn[i]);
//   }

//   for (let i = 0; i < nn.length; i++) {
//     const max = Math.max(...arr);
//     final += max;

//     const index = arr.indexOf(max);
//     arr = arr.toSpliced(index, 1);
//   }

//   return +final;
// }
// console.log(descendingOrder(42145));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function getMiddle(s) {
//   let final;
//   console.log(s.length);

//   if (s.length % 2 === 1) {
//     final = s[Math.floor(s.length / 2)];
//   } else if (s.length === 2 || s.length === 1) {
//     final = s;
//   } else {
//     final = s[s.length / 2 - 1] + s[s.length / 2];
//   }

//   return final;
// }
// console.log(getMiddle('cbaa'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function filter_list(l) {
//   let arr = [];

//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] === 'number') {
//       arr.push(l[i]);
//     }
//   }
//   return arr;
// }
// const arr = [1, 2, 'aasf', '1', '123', 123, '44'];

// console.log(filter_list(arr));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function accum(s) {
//   let result = '';
//   s = s.toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     result += s[i].toUpperCase();
//     result += s[i].repeat(i);
//     if (i < s.length - 1) result += '-';
//   }
//   return result;
// }

// const text = 'NyffsGeyylB';
// console.log(accum(text));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var isSquare = function (n) {
//   if (Math.sqrt(n) % 1 === 0) return true;
//   else return false;
// };
// console.log(isSquare(4));
// console.log(Math.sqrt(-4) % 1);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function isIsogram(str) {
//   let result = true;

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i].toLowerCase() === str[j].toLowerCase()) result = false;
//     }
//   }
//   return result;
// }
// console.log(isIsogram('bagyuig'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
// }
// console.log(findNextSquare(121));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function countPositivesSumNegatives(input) {
//   let pos = 0;
//   let neg = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) pos++;
//     if (input[i] < 0) neg += input[i];
//   }

//   let arr = [pos, neg];
//   if (arr[0] === 0 && arr[1] === 0) arr = [];
//   return arr;
// }
// const test = [1, 2, 4];
// console.log(countPositivesSumNegatives(test));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function betterThanAverage(classPoints, yourPoints) {
//   let sum = 0;

//   for (let i = 0; i < classPoints.length; i++) {
//     sum += classPoints[i];
//   }
//   console.log(sum / classPoints.lenght);
//   return yourPoints > sum / classPoints.length ? true : false;
// }
// console.log(betterThanAverage([10, 5, 7, 2], 5));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function noSpace(x) {
//   return x.split(' ').join('');
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function XO(str) {
//   let x = 0;
//   let o = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === 'x') x++;
//     if (str[i].toLowerCase() === 'o') o++;
//   }
//   return x === o ? true : false;
// }
// console.log(XO('xo'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const toJadenCase = function (str) {
//   str = str.split(' ');
//   let newStr = '';

//   for (let i = 0; i < str.length; i++) {
//     const word = str[i];
//     newStr += word[0].toUpperCase() + word.slice(1) + ' ';
//   }

//   return newStr;
// };
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function findShort(s) {
//   let min = 100;
//   const words = s.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length < min) min = words[i].length;
//   }

//   return min;
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function countBy(x, n) {
//   let z = [];

//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }

//   return z;
// }
// console.log(countBy(2, 5));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function dnaStrand(dna) {
//   let result = '';
//   for (let i = 0; i < dna.length; i++) {
//     console.log(result);
//     if (dna[i] === 'A') result += 'T';
//     else if (dna[i] === 'T') result += 'A';
//     else if (dna[i] === 'C') result += 'G';
//     else if (dna[i] === 'G') result += 'C';
//     else result += dna[i];
//   }
//   return result;
// }
// console.log(dnaStrand('ATTGC'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function maskify(cc) {
//   return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
// }
// console.log(maskify('4556364607935616'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const arr = [19, 5, 42, 2, 77];
// function sumTwoSmallestNumbers(numbers) {
//   return numbers.sort((a, b) => a - b);
// }
// console.log(sumTwoSmallestNumbers(arr));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function getSum(a, b) {
//   let result = 0;
//   for (let i = 0; i <= Math.abs(a - b); i++) {
//     if (a < b) result += a + i;
//     else result += b + i;
//   }
//   return result;
// }

// console.log(getSum(-5, 0));

// Two to One -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function longest(s1, s2) {
//   let result = [];

//   for (let i = 0; i < s1.length; i++) {
//     if (!result.includes(s1[i])) result.push(s1[i]);
//   }
//   for (const l of s2) {
//     if (!result.includes(l)) result.push(l);
//   }

//   return result.sort().join('');
// }
// console.log(longest('faasssbbbb', 'aaajjj'));

// Friend or Foe? -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function friend(friends) {
//   let result = [];
//   for (const friend of friends) {
//     if (friend.length === 4) result.push(friend);
//   }
//   return result;
// }
// console.log(friend(['Ryan', 'Kieran', 'Mark']));

// Categorize New Member -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function openOrSenior(data) {
//   let result = [];
//   for (const [age, handicap] of data) {
//     age >= 55 && handicap > 7 ? result.push('Senior') : result.push('Open');
//   }
//   return result;
// }
// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
//);

// Printer issue -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function printerError(s) {
//   const wrong = 'nopqrstuvwxyz';
//   let result = 0;

//   for (const error of s) {
//     wrong.includes(error) ? result++ : (result = result);
//   }

//   return result + '/' + s.length;
// }
// console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));

// Regex validate PIN code -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }

// Binary Addition -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function addBinary(a, b) {
//   const decimal = a + b;
//   return Number(decimal).toString(2);
// }
// console.log((2).toString(2));

// String ends with? -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function solution(str, ending) {
//   return str.endsWith(ending) ? true : false;
// }
// console.log(solution('abcde', ''));

// Growth of a Population -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function nbYear(p0, percent, aug, p) {
//   let years = 0;

//   while (p0 < p) {
//     p0 = Math.floor(p0 + p0 * percent * 0.01 + aug);
//     years++;
//   }

//   return years;
// }
// console.log(nbYear(1500000, 0.25, 1000, 2000000));

// Ones and Zeros -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const binaryArrayToNumber = arr => {
//   return parseInt(arr.join(''), 2);
// };

// Reverse words -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function reverseWords(str) {
//   const arr = str.split(' ');
//   let result = '';

//   for (const word of arr) {
//     result += word.split('').reverse().join('') + ' ';
//   }

//   return result.slice(0, -1);
// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

// Sum of the first nth term of Series -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function SeriesSum(n) {
//   if (+n === 0) return '0.00';
//   else {
//     let result = 1;

//     for (let i = 1; i < +n; i++) {
//       result += +(1 / (4 + 3 * (i - 1)));
//     }
//     return result.toFixed(2);
//   }
// }

// console.log(SeriesSum(174));

// Sum of odd numbers -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function rowSumOddNumbers(n) {
//   let rowStart = 1;
//   let result = 0;

//   for (let i = 1; i < n; i++) {
//     rowStart += 2 * i;
//   }

//   for (let i = 0; i < n; i++) {
//     result += rowStart + 2 * i;
//   }

//   return result;
// }

// console.log(rowSumOddNumbers(2));

// Remove the minimum -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function removeSmallest(numbers) {
//   const min = Math.min(...numbers);
//   const index = numbers.indexOf(min);

//   const numbs = numbers.join(' ');
//   numbs.slice(0, 2);
//   const result = numbs.split(' ');
//   return result;
// }

// console.log(
//   removeSmallest([58, 239, 284, 45, 186, 352, 221, 341, 55, 130, 332, 294])
// );

// Testing 1-2-3 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var number = function (array) {
//   const arr = [];
//   for (let i = 0; i < array.length; i++) {
//     arr.push(i + 1 + ': ' + array[i]);
//   }
//   return arr;
// };
// console.log(number(['a', 'b', 'c']));

// Don't give me five! -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function dontGiveMeFive(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 5 === 0 && i % 2 !== 0);
//     else arr.push(i);
//   }
//   console.log(arr);
//   return arr.length;
// }
// console.log(dontGiveMeFive(28, 79));

// Find the stray number -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function stray(numbers) {
//   let result = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (
//       (result === numbers[i] && result === numbers[i + 1]) ||
//       (result === numbers[i] && result === numbers[i - 1])
//     )
//       result = result;
//     else result = numbers[i];
//   }
//   return result;
// }
// console.log(stray([1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1]));

// Count devisors -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function getDivisorsCnt(n) {
//   let result = 0;
//   const arr = [];

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       result++;
//       arr.push(i);
//       console.log(arr);
//     }
//   }

//   return result;
// }
// console.log(getDivisorsCnt(126456234));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function solution(nums) {
//   const test = [];
//   if (isNaN(nums[0]) || nums[0] == null) return test;
//   else
//     return nums.sort((a, b) => {
//       return a - b;
//     });
// }
// console.log(solution(null), []);

//Anagram Detection -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var isAnagram = function (test, original) {
//   if (
//     test.toLowerCase().split('').sort().join('') ==
//     original.toLowerCase().split('').sort().join('')
//   )
//     return true;
//   else return false;
// };

// console.log(isAnagram('bbcc', 'cbcb'));

// Stop gninnipS My sdroW! -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function spinWords(string) {
//   const test = string.split(' ');
//   let result = '';
//   console.log(test);
//   for (const word of test) {
//     word.length >= 5
//       ? (result += word.split('').reverse().join('') + ' ')
//       : (result += word + ' ');
//   }
//   return result.slice(0, -1);
// }
// console.log(spinWords('Welcome bro'));

// Who likes it? -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function likes(names) {
//   if (names.length === 0) return `no one likes this`;
//   else if (names.length === 1) return `${names[0]} likes this`;
//   else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
//   else if (names.length === 3)
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   else
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
// }
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function digitalRoot(n) {
//   let result = 0;

//   if (n.toString().length >= 2) {
//     const str = n.toString().split('');
//     for (const num of str) {
//       result += +num;
//     }
//   }
//   if (result < 10) return result;
//   else {
//     return digitalRoot(result);
//   }
// }

// console.log(digitalRoot(493193));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function arrayDiff(a, b) {
//   let result = [];
//   let test = true;

//   for (const pass of a) {
//     for (const remove of b) {
//       if (pass === remove) test = false;
//     }
//     if (test) result.push(pass);
//     else test = true;
//   }

//   return result;
// }
// console.log(arrayDiff([1, 2, 1, 3], [1, 2]));

// Count bits -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var countBits = function (n) {
//   let result = 0;
//   const arr = n.toString(2).split('');
//   for (const num of arr) {
//     result += +num;
//   }
//   return result;
// };
// console.log(countBits(4));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function findOutlier(i) {
//   let result = 0;

//   if (
//     (i[0] % 2 === 0 && i[1] % 2 === 0) ||
//     (i[0] % 2 === 0 && i[2] % 2 === 0)
//   ) {
//     for (const num of i) {
//       if (num % 2 === 1 || num % 2 === -1) result = num;
//     }
//   } else {
//     for (const num of i) {
//       if (num % 2 === 0 || num % 2 === -0) result = num;
//     }
//   }

//   return result;
// }
// console.log(findOutlier([17, 32, 22]));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function duplicateCount(text) {
//   let result = 0;
//   let textNew = text.toLowerCase();

//   for (const char of textNew) {
//     if (textNew.replace(char, '').includes(char)) {
//       result++;
//       textNew = textNew.replaceAll(char, '');
//     }
//   }
//   return result;
// }
// console.log(duplicateCount('Indivisibility11'));

// Duplicate Encoder -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function duplicateEncode(word) {
//   let result = '';
//   let textNew = word.toLowerCase();

//   for (const char of textNew) {
//     if (textNew.replace(char, '').includes(char)) result += ')';
//     else result += '(';
//   }
//   return result;
// }

// Take a Ten Minutes Walk -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const isValidWalk = walk =>
//   walk.filter(d => d === 'n').length === walk.filter(d => d === 's').length &&
//   walk.filter(d => d === 'w').length === walk.filter(d => d === 'e').length &&
//   walk.length === 10;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const alphabetPosition = text => {
//   const chars = 'abcdefghijklmnopqrstuvwxyz';
//   const result = [];
//   for (let char of text.toLowerCase()) {
//     if (chars.includes(char)) {
//       char = chars.indexOf(char) + 1;
//       result.push(char);
//     }
//   }

//   return result.join(' ');
// };
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Persistent Bugger. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const persistence = num => {
//   if (num < 10) return 0;
//   else {
//     let result = 0;
//     while (num >= 10) {
//       num = num
//         .toString()
//         .split('')
//         .reduce((acc, cur) => {
//           return (acc *= +cur);
//         }, 1);
//       result++;
//     }
//     return result;
//   }
// };
// console.log(persistence(39));

// Convert string to camel case -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const toCamelCase = str =>
//   str.split(/-|_/)[0] +
//   str
//     .split(/-|_/)
//     .slice(1)
//     .map(word => word.at(0).toUpperCase() + word.slice(1))
//     .join('');
// console.log(toCamelCase('asd-asd_asd'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const narcissistic = value =>
//   value ===
//   value
//     .toString()
//     .split('')
//     .reduce((acc, cur) => (acc += Number(cur) ** value.toString().length), 0);
// console.log(narcissistic(153));

// Your order, please -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const order = words => {
//   if (words === '') return '';
//   else {
//     let result = [];
//     words = words.split(' ');
//     for (let i = 1; i <= words.length; i++) {
//       result.push(words.find(el => el.includes(i + '')));

//       console.log(i + '', result);
//     }
//     return result.join(' ');
//   }
// };
// console.log(order('is2 Thi1s T4est 3a'));

// Tribonacci Sequence -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const tribonacci = (s, n) => {
//   if (n <= 0) return [];
//   else if (n === 1) return s.slice(0, 1);
//   else if (n === 2) return s.slice(0, 2);
//   else if (n === 3) return s;
//   else {
//     let count = s.length;
//     while (count < n) {
//       s.push(s.slice(-3).reduce((acc, cur) => acc + cur));
//       count++;
//     }
//     return s;
//   }
// };
// console.log(tribonacci([11, 22, 33], 1));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const uniqueInOrder = i => {
//   if (typeof i === 'string') i = i.split('');
//   let result = [];
//   i.forEach(el => {
//     if (result.at(-1) !== el) result.push(el);
//   });
//   return result;
// };
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const digPow = (n, p) =>
//   (n
//     .toString()
//     .split('')
//     .reduce((acc, cur, ind) => acc + Math.pow(+cur, p + ind), 0) /
//     n) %
//     1 ===
//   0
//     ? n
//         .toString()
//         .split('')
//         .reduce((acc, cur, ind) => acc + Math.pow(+cur, p + ind), 0) / n
//     : -1;
// console.log(digPow(89, 1));

// Detect Pangram -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const isPangram = string =>
//   Array.from(new Set(Array.from(string.toLowerCase()).sort()))
//     .join('')
//     .slice(-26) === 'abcdefghijklmnopqrstuvwxyz';
// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));

// Split Strings -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const solution = str =>
//   str === ''
//     ? []
//     : str.length % 2 === 0
//     ? str.match(/.{2}/g)
//     : str.concat('_').match(/.{2}/g);
// console.log(solution('abcdefz'));

// Find the missing letter -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const findMissingLetter = arr => {
//   const alp = 'abcdefghijklmnopqrstuvwxyz';
//   let result;

//   for (const l of arr) {
//     const i = arr.indexOf(l);
//     const ind = alp.indexOf(l.toLowerCase());
//     if (arr[i + 1].toLowerCase() !== alp[ind + 1]) {
//       result = alp[ind + 1];
//       break;
//     }
//   }

//   return alp.includes(arr[0]) ? result : result.toUpperCase();
// };
// console.log(findMissingLetter(['O', 'Q', 'R', 'S']));

// Build tower -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const towerBuilder = n =>
//   Array.from(
//     { length: n },
//     (_cur, i) =>
//       ' '.repeat(n - i - 1) + '*' + '*'.repeat(2 * i) + ' '.repeat(n - i - 1)
//   );
// console.log(towerBuilder(3));

// Highest Scoring Word -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const high = str => {
//   let count = 0;
//   let result;
//   const alph = 'abcdefghijklmnopqrstuvwxyz';

//   str.split(' ').forEach(word => {
//     let sum = 0;
//     word.split('').forEach(letter => {
//       sum += alph.indexOf(letter) + 1;
//     });

//     if (sum > count) {
//       count = sum;
//       result = word;
//     }
//   });
//   return result;
// };
// console.log(high('man girl boy'));

// Delete occurrences of an element if it occurs more than n times -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const deleteNth = (arr, n) => {
//   const count = {};
//   const result = [];

//   arr.forEach(num => {
//     count[num] = (count[num] || 0) + 1;
//     if (count[num] <= n) result.push(num);
//   });

//   return result;
// };
// console.log(deleteNth([20, 37, 20, 21], 1));

// Count the smiley faces! -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function countSmileys(arr) {
//   let result = 0;

//   arr.forEach(face => {
//     if (face[0] === ':' || face[0] === ';') {
//       if ((face[1] === ')' || face[1] === 'D') && face.length === 2) result++;
//       if (face[1] === '-' || face[1] === '~') {
//         if (face[2] === ')' || face[2] === 'D') result++;
//       }
//     }
//   });

//   return result;
// }

// Consecutive strings -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function longestConsec(arr, k) {
//   if (arr.length === 0 && k < 1) return '';

//   let result = '';
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let test = '';
//     for (let j = 0; j < k; j++) {
//       test = test.concat(arr[i + j]);
//     }
//     if (result.length < test.length) result = test;
//   }
//   return result;
// }
// console.log(
//   longestConsec(['tree', 'foling', 'trashy', 'blue', 'bacdef', 'uvwxyz'], 3)
// );

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function expandedForm(num) {
//   const str = num + '';
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     const form = str.slice(i);
//     if (!form.startsWith(0)) {
//       result += form[0] + '0'.repeat(form.slice(1).length) + ' + ';
//     }
//   }

//   return result.slice(0, -3);
// }
// console.log(expandedForm(10550));

// Are they the "same"? -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const comp = (arr1, arr2) =>
//   arr1
//     .sort((a, b) => a - b)
//     .map(el => el ** 2)
//     .join('') === arr2.sort((a, b) => a - b);
// console.log(comp([2, 2, 3], [4, 4, 9]));

// Which are in? -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function inArray(arr1, arr2) {
//   const result = new Set();

//   arr2.forEach(word => {
//     arr1.forEach(el => {
//       if (word.includes(el)) result.add(el);
//     });
//   });

//   return Array.from(result).sort();
// }

// console.log(
//   inArray(
//     ['xyz', 'live', 'strong'],
//     ['lively', 'alive', 'harp', 'sharp', 'armstrong']
//   )
// );

// Mexican Wave -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function wave(str) {
//   if (str === '') return [];
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ')
//       result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
//   }
//   return result;
// }
// console.log(wave(' two words '));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function twoSum(numbers, target) {
//   let result = [];
//   numbers.forEach((num, i) => {
//     if (i < numbers.length - 1)
//       numbers.slice(i + 1).forEach(n => {
//         if (num + n === target) result.push(num, n);
//       });
//   });
//   return result;
// }
// console.log(
//   twoSum(
//     [-222, -822, -23, 56, 490, 994, 369, 217, -911, -368, -900, 475, 995],
//     -1044
//   )
// );

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function sumDigPow(a, b) {
//   const result = [];
//   for (let i = a; i <= b; i++) {
//     let power = 1;
//     let test = 0;
//     for (let j = 0; j < i.toString().length; j++) {
//       test += i.toString().at(j) ** power;
//       power++;
//     }

//     if (test === i) result.push(i);
//   }
//   return result;
// }
// console.log(sumDigPow(1, 10000000));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function checkExam(arr1, arr2) {
//   let score = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2[i] === '') score += 0;
//     else if (arr2[i] === arr1[i]) score += 4;
//     else if (arr2[i] !== arr1[i]) score -= 1;
//   }
//   return score < 0 ? 0 : score;
// }
// console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']));

// Simple Pig Latin -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// prettier-ignore
// const pigIt = str => str.split(' ').map(el => el === '!' || el === '?' ? el : el.slice(1) + el[0] + 'ay').join(' ')
// console.log(pigIt('This is my string !'));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// prettier-ignore
// const generateHashtag = str => str.replaceAll(' ', '') === '' || str.replaceAll(' ', '').length + 1 > 140 ? false : '#' + str.split(' ').filter(el => el !== '').map(el => el[0].toUpperCase() + el.slice(1)).join('')
// console.log(generateHashtag('   fffffffffffffffffffffff asdasd   '));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// prettier-ignore
// const alph = 'abcdefghijklmnopqrstuvwxyz'
// const p1 = 'abcdefghijklm'.split('');
// const p2 = 'nopqrstuvwxyz'.split('');
// // prettier-ignore
// const rot13 = mes => mes.split('').map(el => !alph.includes(el.toLowerCase()) ? el : p1.includes(el.toLowerCase()) ? el === el.toLowerCase() ? el = p2[p1.findIndex(c => c === el)] : el = p2[p1.findIndex(c => c === el.toLowerCase())].toUpperCase() : el === el.toLowerCase() ? el = p1[p2.findIndex(c => c === el)] : el = p1[p2.findIndex(c => c === el.toLowerCase())].toUpperCase()).join('')
// console.log(rot13('Az'));

// Calculator -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const calc = (num, op) => {
//     if (op[0] === '+') return num + op[1]
//     if (op[0] === '-') return num - op[1]
//     if (op[0] === '*') return num * op[1]
//     if (op[0] === '/') return Math.floor((num / op[1]))
// }

// const zero = op => (op ? calc(0, op) : 0);
// const one = op => (op ? calc(1, op) : 1);
// const two = op => (op ? calc(2, op) : 2);
// const three = op => (op ? calc(3, op) : 3);
// const four = op => (op ? calc(4, op) : 4);
// const five = op => (op ? calc(5, op) : 5);
// const six = op => (op ? calc(6, op) : 6);
// const seven = op => (op ? calc(7, op) : 7);
// const eight = op => (op ? calc(8, op) : 8);
// const nine = op => (op ? calc(9, op) : 9);

// const plus = num => ['+', num];
// const minus = num => ['-', num];
// const times = num => ['*', num];
// const dividedBy = num => ['/', num];

// console.log(three(dividedBy(four())));
// console.log(four(plus(three())));

// Human readable duration format -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function formatDuration (secs) {
//     if (secs === 0) return 'now';

//     const s = 1;
//     const m = s * 60;
//     const h = m * 60;
//     const d = h * 24;
//     const y = d * 365;

//     const years = Math.floor(secs / y);
//     secs -= years * y;

//     const days = Math.floor(secs / d);
//     secs -= days * d;

//     const hours = Math.floor(secs / h);
//     secs -= hours * h;

//     const minutes = Math.floor(secs / m);
//     secs -= minutes * m;

//     const seconds = secs;

//     const format = (el, type, arr) => el === 0 ? '' : el === 1 ? `${el} ${type}` : `${el} ${type}s`;
//     const separate = arr => arr.map((el, i) => arr[i + 1] ? `${el}${!(i === arr.length - 2) ? ', ' : ' and '}` : el).join('');
//     const arr = [format(years, 'year'), format(days, 'day'), format(hours, 'hour'), format(minutes, 'minute'), format(seconds, 'second')].filter(el => el !== '')
//     return separate(arr)
// }
// console.log(formatDuration(6728400));
// console.log(formatDuration(120));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const humanReadable = secs => {
//   const second = 1;
//   const minute = second * 60;
//   const hour = minute * 60;

//   const h = Math.floor(secs / hour);
//   const m = Math.floor((secs - h * hour) / minute);
//   const s = secs - m * minute - h * hour;

//   const readible = value => (value + '').padStart(2, 0);

//   return `${readible(h)}:${readible(m)}:${readible(s)}`;
// };
// console.log(humanReadable(10000));

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
