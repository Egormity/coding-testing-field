// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
